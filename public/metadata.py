import os
import pikepdf
from datetime import datetime

# Directorio donde están los archivos PDF
directory = 'public/docs'

# Listar los archivos PDF en el directorio ordenados por fecha de modificación (más recientes primero)
pdf_files = [f for f in os.listdir(directory) if f.lower().endswith('.pdf')]
pdf_files = sorted(pdf_files, key=lambda f: os.path.getmtime(os.path.join(directory, f)), reverse=True)

if not pdf_files:
    print("No hay archivos PDF en la carpeta 'docs'.")
    exit()

# Mostrar la lista de archivos PDF
print("Archivos PDF en la carpeta 'docs':")
for i, file in enumerate(pdf_files):
    mod_time = datetime.fromtimestamp(os.path.getmtime(os.path.join(directory, file)))
    print(f"{i + 1}. {file} (modificado el {mod_time})")

# Seleccionar el archivo
file_index = int(input("Selecciona el número del archivo que quieres editar: ")) - 1

if file_index < 0 or file_index >= len(pdf_files):
    print("Índice inválido.")
    exit()

selected_file = pdf_files[file_index]
file_path = os.path.join(directory, selected_file)

# Editar los metadatos del archivo seleccionado
with pikepdf.open(file_path, allow_overwriting_input=True) as pdf:
    docinfo = pdf.docinfo

    # Solicitar nuevos metadatos
    title = input("Nuevo Título: ")
    author = input("Nuevo Autor: ")
    coauthor = input("Nuevo Coautor: ")
    subject = input("Fecha en que entra en vigor (dd/mm/yyyy): ")
    keywords = input("Nuevas Palabras Clave (separadas por comas): ")

    # Modificar los metadatos
    if title:
        docinfo['/Title'] = title
    if author:
        docinfo['/Author'] = author
    if subject:
        docinfo['/Subject'] = subject
    if keywords:
        docinfo['/Keywords'] = keywords
    if coauthor:
        docinfo['/Producer'] = coauthor

    # Guardar el archivo PDF con los metadatos modificados
    pdf.save(file_path)

print(f"Metadatos actualizados y guardados en '{file_path}'")