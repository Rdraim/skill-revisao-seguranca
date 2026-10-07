<p align="right">
  <a href="README.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="README.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="README.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# skill-revisao-seguranca

Skill de revisión de seguridad para código web y APIs Node.js, distribuida como plugin de Claude Code. Produce hallazgos priorizados con evidencia y correcciones concretas. También es un ejemplo pequeño y legible de organización de SKILL.md para quienes empiezan. No incluye dependencias de ejecución, servicios externos, credenciales ni registros de usuarios.

## Descargá y revisá

```sh
git clone https://github.com/techrodrigo21-ux/skill-revisao-seguranca.git
cd skill-revisao-seguranca
npm test
node tools/check-public-content.mjs
```

Leé `skills/revisao-seguranca/SKILL.md` antes de habilitar la skill. Node.js 22+ solo se requiere para las pruebas del paquete. Para cargar el plugin necesitás Claude Code; las instrucciones también se pueden adaptar a otro agente compatible con SKILL.md.

## Instalación en Claude Code

```text
/plugin marketplace add techrodrigo21-ux/skill-revisao-seguranca
/plugin install revisao-seguranca@revisao-seguranca
```

Ejemplo: «Revisá este diff buscando problemas de seguridad. Usá evidencia sintética e indicá archivo, línea, impacto, escenario de explotación y corrección». La skill responde en el idioma del usuario. La guía en inglés está en su directorio `references`.

## Límites

Una revisión de código no autoriza pruebas de intrusión, cambios de producción, cambios de credenciales, despliegue ni divulgación de secretos. No es una certificación de seguridad. Las bibliotecas relacionadas son referencias opcionales: verificá sus APIs y límites antes de recomendarlas.

## Estructura

- `.claude-plugin/plugin.json`: metadatos del plugin.
- `.claude-plugin/marketplace.json`: entrada de marketplace local.
- `skills/revisao-seguranca/SKILL.md`: skill y alcance de la revisión.
- `skills/revisao-seguranca/references/review.en-US.md`: guía en inglés.
- `test/`: validación del paquete, no certificación del comportamiento de un modelo de IA.

## Mantenimiento

Estos módulos independientes se inspiran en problemas resueltos en Nexus, proyecto de Rodrigo Rodrigues. No incluyen bases privadas, configuración de despliegue, logs, credenciales ni registros de usuarios. El mantenimiento coordinado consiste en revisar cambios relacionados en el mismo ciclo; no copia automáticamente archivos privados.

[Cómo contribuir](CONTRIBUTING.es-AR.md) · [Seguridad](SECURITY.es-AR.md)

MIT © Rodrigo Rodrigues

Referencia oficial: https://code.claude.com/docs/en/plugins-reference

## Uso práctico — 1.2.0

La referencia localizada `references/integracao.md` orienta la revisión de consumidores, versiones fijadas, licencias y formatos persistidos. Aprobar pruebas aisladas de un módulo no valida la integración del sistema.

---

<p align="center">
  <img src="assets/support/banner-es-ar.svg" width="960" alt="Código abierto. Un café suma. Apoyá el trabajo de Rodrigo Rodrigues.">
</p>

## ☕ Invitame un café

¿Este proyecto te ayudó a resolver un problema, aprender algo nuevo o dar tus primeros pasos en desarrollo? Si querés apoyar mi trabajo, un café es una linda forma de agradecer.

Soy **Rodrigo Rodrigues**, creador de **Nexus** y de estos proyectos de código abierto. Tu aporte me ayuda a dedicar tiempo a mejorar el código, escribir ejemplos más claros y seguir compartiendo lo que aprendo.

**Aportá el monto que tenga sentido para vos. El apoyo es totalmente voluntario; el proyecto sigue siendo gratuito bajo la licencia MIT.**

[Apoyá con Pix](#apoyá-con-pix) · [Dejá un comentario](https://github.com/techrodrigo21-ux/skill-revisao-seguranca/issues/new?title=Comentario%3A%20este%20proyecto%20me%20ayud%C3%B3)

### Apoyá con Pix

En la app de tu banco, escaneá el QR o copiá la clave Pix de abajo. Elegí el monto y revisá los datos del destinatario antes de confirmar.

<p align="center">
  <img src="assets/support/pix-qr.png" width="260" alt="QR Pix original proporcionado por Rodrigo Rodrigues; también podés usar la clave de texto de abajo.">
</p>

**Clave Pix**

```text
8875a24e-44d1-4c91-b6bb-62c9f0070955
```

Pix es el sistema de pagos de Brasil. Si tu banco no lo admite, también podés ayudar compartiendo el proyecto, reportando un problema, mejorando la documentación o dejando un comentario.

### Tu comentario también suma

[Contame cómo te ayudó el proyecto](https://github.com/techrodrigo21-ux/skill-revisao-seguranca/issues/new?title=Comentario%3A%20este%20proyecto%20me%20ayud%C3%B3). Me gustaría saber qué creaste, qué aprendiste y qué podría ser más claro para quienes recién empiezan.

Los comentarios son bienvenidos con o sin donación. Cuidá tu privacidad: no publiques comprobantes de pago, datos personales, credenciales ni información privada de usuarios en las Issues.

**Gracias por apoyar mi trabajo y ayudarme a seguir creando y compartiendo. ❤️**
