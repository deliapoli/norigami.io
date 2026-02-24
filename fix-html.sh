#!/bin/bash
# Script para arreglar el HTML - remover CSS duplicado

# Crear nuevo archivo con solo el head correcto
head -18 index.html > index-fixed.html

# Agregar cierre del head y apertura del body
echo '</head>' >> index-fixed.html
echo '<body>' >> index-fixed.html

# Agregar todo el contenido después del CSS duplicado
# Buscar desde la línea después del cierre del style
sed -n '1203,$p' index.html >> index-fixed.html

# Reemplazar el archivo original
mv index-fixed.html index.html

echo "HTML arreglado exitosamente"