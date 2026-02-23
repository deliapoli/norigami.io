# 📋 Instrucciones para subir a GitHub Pages

## Paso 1: Crear cuenta en GitHub
1. Ve a [github.com](https://github.com)
2. Regístrate (es gratis)
3. Confirma tu email

## Paso 2: Crear nuevo repositorio
1. Haz clic en el botón "+" (arriba derecha)
2. Selecciona "New repository"
3. Configuración:
   - **Repository name:** `norigami-menu` (o el nombre que prefieras)
   - **Description:** "Menú web para Norigami × el TORO"
   - **Visibility:** Public
   - **NO marques** "Initialize this repository with a README"
4. Haz clic en "Create repository"

## Paso 3: Subir los archivos
### Opción A: Desde la web de GitHub
1. En tu repositorio nuevo, verás opciones para subir archivos
2. Arrastra y suelta TODA la carpeta `norigami-github` (con todos sus archivos)
3. O haz clic en "uploading an existing file"

### Opción B: Usando Git en tu computadora (recomendado)
```bash
# 1. Instala Git si no lo tienes: https://git-scm.com/downloads

# 2. Abre terminal en la carpeta del proyecto
cd /ruta/a/tu/carpeta/norigami-github

# 3. Inicializa repositorio Git
git init

# 4. Agrega todos los archivos
git add .

# 5. Haz tu primer commit
git commit -m "Primera versión del menú Norigami"

# 6. Conecta con GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/norigami-menu.git

# 7. Sube los archivos
git branch -M main
git push -u origin main
```

## Paso 4: Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings" (pestaña superior derecha)
3. En el menú izquierdo, haz clic en "Pages"
4. En "Source", selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Haz clic en "Save"

## Paso 5: ¡Listo!
1. Espera 1-2 minutos para que se despliegue
2. Tu menú estará disponible en:
   `https://TU_USUARIO.github.io/norigami-menu/`

## 🔗 Enlace personalizado (opcional)
Si quieres un dominio personalizado como `menu.norigami.com`:
1. Compra un dominio
2. En GitHub Pages settings, agrega tu dominio personalizado
3. Configura los DNS records con tu proveedor de dominio

## 📱 Probar el menú
- Abre el enlace de GitHub Pages en tu móvil
- Verifica que todo se vea bien
- Prueba la navegación y las tablas

## 🆘 Soporte
Si tienes problemas:
1. Revisa que todos los archivos estén subidos
2. Verifica que GitHub Pages esté activado
3. Espera unos minutos para el despliegue
4. Si necesitas ayuda, contáctame