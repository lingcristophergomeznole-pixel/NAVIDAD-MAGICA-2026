// Ejemplo opcional de C++ para compilar a WebAssembly con Emscripten.
// La página funciona sin este archivo; C++ no se ejecuta directamente en el navegador.
#include <emscripten/emscripten.h>
#include <string>

extern "C" {
  EMSCRIPTEN_KEEPALIVE
  int dias_hasta_navidad(int dias_restantes) {
    return dias_restantes < 0 ? 0 : dias_restantes;
  }

  EMSCRIPTEN_KEEPALIVE
  const char* saludo_navideno() {
    return "¡Feliz Navidad 2026!";
  }
}

// Compilación (desde la carpeta del proyecto, con Emscripten instalado):
// em++ cpp/navidad.cpp -O2 -s WASM=1 -s EXPORTED_FUNCTIONS="['_dias_hasta_navidad','_saludo_navideno']" -s EXPORTED_RUNTIME_METHODS="['ccall','cwrap']" -o js/navidad_wasm.js
