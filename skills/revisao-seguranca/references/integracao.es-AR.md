<p align="right">
  <a href="integracao.md"><img src="../../../assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="integracao.en-US.md"><img src="../../../assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="integracao.es-AR.md"><img src="../../../assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# Revisión de integración

Al incorporar una biblioteca, revisá la API real de la versión fijada, el recorrido de los datos y la compatibilidad de los formatos persistidos. No alcanza con que el módulo apruebe sus propias pruebas: reproducí el flujo consumidor con datos sintéticos. Conservá la licencia y la procedencia al copiar código público.

| Caso | Evidencia necesaria |
|---|---|
| Logs | Consola, archivo, errores y objetos circulares se redactan antes de la salida; no se ejecutan getters/toJSON. |
| Archivos | El límite UTF-8 conserva la extensión cuando es posible; limpiar el nombre no impide enlaces simbólicos, colisiones ni sobrescrituras. |
| Cifrado | Contexto estable, claves anteriores y rotación probados; un cambio de formato exige un plan separado. |
| HTTP | CSP report-only solo observa; el proxy y el almacén corresponden a la topología real. |
| Interfaz | Cancelar o desmontar limpia los diálogos; funcionan el teclado y los nombres de los gráficos. |

Informe: versión revisada; consumidor afectado; reproducción sintética; resultado esperado/observado; límites; estado de publicación. No publiques logs reales ni credenciales.
