NAVIDAD MAGICA 2026
===================

CÓMO ABRIR EL PROYECTO
1. Descomprime NAVIDAD_MAGICA_2026.zip.
2. Abre Visual Studio Code.
3. Selecciona Archivo > Abrir carpeta y elige NAVIDAD_MAGICA_2026.
4. Abre index.html.
5. Si tienes Live Server, haz clic derecho y selecciona "Open with Live Server".
   También puedes abrir index.html directamente en tu navegador.

ARCHIVOS
- index.html: estructura de la página.
- css/estilos.css: diseño, colores y animaciones.
- js/script.js: contador, nieve, regalos, carta, tema y música.
- cpp/navidad.cpp: ejemplo de C++ preparado para Emscripten/WebAssembly.
- musica/: coloca aquí tu archivo de música y llámalo navidad.mp3.

IMPORTANTE SOBRE C++
Los navegadores no ejecutan archivos .cpp directamente. El sitio funciona con HTML,
CSS y JavaScript. Para integrar el ejemplo C++ como WebAssembly necesitas instalar
Emscripten y ejecutar el comando que está comentado al final de cpp/navidad.cpp.
El archivo de música no está incluido; agrega tu propio MP3 con permiso de uso.

Personaliza los textos en index.html y los mensajes en js/script.js.
