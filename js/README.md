# 💻 Carpeta de JavaScript

Esta carpeta está destinada a almacenar los archivos JavaScript del menú del restaurante.

## 📁 Archivos Actuales

### **Scripts Disponibles:**
- `update-prices.js` - Script para actualizar precios (está en la raíz del proyecto)

## 🛠️ Scripts Sugeridos

### **1. Navegación Suave (smooth-scroll.js)**
```javascript
// Scroll suave al hacer clic en los enlaces de navegación
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
```

### **2. Menú Móvil (mobile-menu.js)**
```javascript
// Menú hamburguesa para móviles
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}
```

### **3. Resaltar Sección Activa (active-section.js)**
```javascript
// Resaltar el enlace de navegación de la sección visible
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
```

### **4. Búsqueda en el Menú (menu-search.js)**
```javascript
// Búsqueda en tiempo real de platillos
const searchInput = document.querySelector('#menu-search');
const menuItems = document.querySelectorAll('.menu-item');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        menuItems.forEach(item => {
            const itemName = item.querySelector('.name').textContent.toLowerCase();
            const itemDesc = item.querySelector('.description')?.textContent.toLowerCase() || '';
            
            if (itemName.includes(searchTerm) || itemDesc.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
}
```

### **5. Modo Oscuro/Claro (theme-toggle.js)**
```javascript
// Alternar entre modo oscuro y claro
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Verificar preferencia guardada
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        
        // Guardar preferencia
        const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });
}
```

### **6. Loading de Imágenes (lazy-load.js)**
```javascript
// Carga diferida de imágenes para mejor rendimiento
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});
```

## 📦 Cómo Agregar un Script

### **Paso 1: Crear el archivo**
```bash
# En la carpeta js/
touch js/smooth-scroll.js
```

### **Paso 2: Agregar al HTML**
En `index.html`, antes de `</body>`:
```html
<script src="js/smooth-scroll.js"></script>
```

### **Paso 3: Probar**
1. Abre el menú en el navegador
2. Abre la consola (F12)
3. Verifica que no haya errores

## 🔧 Scripts Recomendados para Este Proyecto

### **Prioridad Alta:**
1. **smooth-scroll.js** - Mejora la experiencia de navegación
2. **active-section.js** - Muestra qué sección estás viendo

### **Prioridad Media:**
3. **lazy-load.js** - Mejora el rendimiento con muchas imágenes
4. **menu-search.js** - Búsqueda rápida de platillos

### **Prioridad Baja:**
5. **theme-toggle.js** - Modo oscuro/claro (opcional)
6. **mobile-menu.js** - Menú hamburguesa (si se necesita)

## 💡 Buenas Prácticas

### **Código:**
- ✅ Usa nombres descriptivos para archivos y funciones
- ✅ Comenta el código importante
- ✅ Mantén los scripts pequeños y específicos
- ✅ Usa ES6+ (let, const, arrow functions)

### **Rendimiento:**
- ✅ Minifica los scripts para producción
- ✅ Carga scripts al final del body
- ✅ Usa `defer` o `async` si es necesario
- ✅ Evita scripts innecesarios

### **Compatibilidad:**
- ✅ Prueba en diferentes navegadores
- ✅ Usa polyfills si necesitas soporte antiguo
- ✅ Verifica en móviles

## 🔍 Depuración

### **Herramientas:**
- **Consola del navegador** (F12)
- **Chrome DevTools** - Debugger y performance
- **Firefox Developer Tools** - Excelentes para CSS/JS

### **Comandos Útiles:**
```javascript
// Ver si un script cargó
console.log('Script cargado correctamente');

// Ver errores
console.error('Error:', error);

// Ver información
console.info('Información:', data);
```

## 📚 Recursos

- [MDN JavaScript Guide](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

---

**Nota:** Actualmente el menú funciona sin JavaScript. Los scripts son opcionales para mejorar la experiencia.