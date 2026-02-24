#!/usr/bin/env node

/**
 * Script para actualizar precios en el menú de Norigami × el TORO
 * Uso: node update-prices.js [sección] [porcentaje]
 * 
 * Ejemplos:
 *   node update-prices.js sushis 10    # Aumenta 10% todos los sushis
 *   node update-prices.js entradas -5  # Disminuye 5% las entradas
 *   node update-prices.js all 15       # Aumenta 15% todo el menú
 */

const fs = require('fs');
const path = require('path');

// Mapeo de secciones a IDs en el HTML
const sections = {
  'entradas': '#entradas',
  'sushis': '#sushis',
  'yakimeshi': '#yakimeshi',
  'camarones': '#camarones',
  'hamburguesas': '#hamburguesas',
  'combos': '#combos',
  'tortas': '#tortas',
  'all': 'todo'
};

// Función para extraer precio de un string
function extractPrice(text) {
  const match = text.match(/\$(\d+)/);
  return match ? parseInt(match[1]) : null;
}

// Función para formatear precio
function formatPrice(amount) {
  return `$${amount}`;
}

// Función para actualizar precios en una sección
function updateSectionPrices(html, sectionId, percentage) {
  const lines = html.split('\n');
  let inSection = false;
  let updated = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Verificar si estamos en la sección correcta
    if (sectionId === 'todo' || line.includes(`id="${sectionId.replace('#', '')}"`)) {
      inSection = true;
    }
    
    // Si estamos en la sección y encontramos un precio
    if (inSection && line.includes('class="price"')) {
      const price = extractPrice(line);
      if (price) {
        const newPrice = Math.round(price * (1 + percentage / 100));
        const oldPriceStr = `$${price}`;
        const newPriceStr = formatPrice(newPrice);
        
        lines[i] = line.replace(oldPriceStr, newPriceStr);
        updated = true;
        console.log(`  Actualizado: ${oldPriceStr} → ${newPriceStr}`);
      }
    }
    
    // Salir de la sección si encontramos la siguiente
    if (inSection && line.includes('</section>')) {
      if (sectionId !== 'todo') break;
    }
  }
  
  return { lines, updated };
}

// Función principal
function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log(`
Uso: node update-prices.js [sección] [porcentaje]

Secciones disponibles:
  - entradas
  - sushis
  - yakimeshi
  - camarones
  - hamburguesas
  - combos
  - tortas
  - all (para todo el menú)

Ejemplos:
  node update-prices.js sushis 10     # Aumenta 10% los sushis
  node update-prices.js entradas -5   # Disminuye 5% las entradas
  node update-prices.js all 15        # Aumenta 15% todo el menú
    `);
    process.exit(1);
  }
  
  const section = args[0].toLowerCase();
  const percentage = parseFloat(args[1]);
  
  if (!sections[section]) {
    console.error(`Error: Sección "${section}" no válida.`);
    console.error('Secciones disponibles:', Object.keys(sections).join(', '));
    process.exit(1);
  }
  
  if (isNaN(percentage)) {
    console.error(`Error: Porcentaje "${args[1]}" no válido.`);
    process.exit(1);
  }
  
  const htmlPath = path.join(__dirname, 'index.html');
  
  try {
    console.log(`\n📊 Actualizando precios de: ${section}`);
    console.log(`📈 Porcentaje: ${percentage > 0 ? '+' : ''}${percentage}%`);
    console.log('─'.repeat(50));
    
    let html = fs.readFileSync(htmlPath, 'utf8');
    const sectionId = sections[section];
    
    const { lines, updated } = updateSectionPrices(html, sectionId, percentage);
    
    if (updated) {
      fs.writeFileSync(htmlPath, lines.join('\n'));
      console.log('─'.repeat(50));
      console.log('✅ Precios actualizados exitosamente!');
      console.log(`📁 Archivo guardado: ${htmlPath}`);
    } else {
      console.log('⚠️  No se encontraron precios para actualizar en esa sección.');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

module.exports = { extractPrice, formatPrice, updateSectionPrices };