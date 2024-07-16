import fs from 'fs';
import path from 'path';
import json2md from 'json2md';

// Leer el archivo JSON
const rawData = fs.readFileSync('new_blogs.json');
const blogs = JSON.parse(rawData);

// Directorio donde se guardarán los archivos Markdown
const blogsDir = path.join(__dirname, 'src', 'blogs');

// Crear el directorio si no existe
if (!fs.existsSync(blogsDir)) {
  fs.mkdirSync(blogsDir, { recursive: true });
}

// Convertir cada blog a Markdown y guardarlo en el directorio
blogs.forEach(blog => {
  const markdownContent = json2md([
    { h1: blog.title },
    { p: blog.content },
    // Agregar más campos según sea necesario
  ]);

  const filePath = path.join(blogsDir, `${blog.slug}.md`);
  fs.writeFileSync(filePath, markdownContent);
});

console.log('Blogs convertidos a Markdown y guardados en', blogsDir);