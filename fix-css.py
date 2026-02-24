#!/usr/bin/env python3
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remover todo el CSS duplicado que está después del link
# Buscar desde <link rel="stylesheet" href="css/styles.css"> hasta el cierre del head
pattern = r'(<link rel="stylesheet" href="css/styles\.css">\s*)(<style>.*?</style>\s*)(</head>)'
replacement = r'\1\3'

content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("CSS duplicado removido exitosamente")