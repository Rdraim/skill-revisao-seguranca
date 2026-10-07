<p align="right">
  <a href="integracao.md"><img src="../../../assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="integracao.en-US.md"><img src="../../../assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="integracao.es-AR.md"><img src="../../../assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# Integration review

When integrating a library, inspect the actual API of the pinned version, data flow and compatibility with persisted formats. Passing the library’s own tests is insufficient: exercise its consumer with synthetic fixtures. Preserve license and provenance when copying public code.

| Case | Required evidence |
|---|---|
| Logs | Console, file, errors and cycles are redacted before output; getters/toJSON are not executed. |
| Files | UTF-8 limit preserves the extension when possible; filename sanitization does not prevent symlinks, collisions or overwrites. |
| Encryption | Stable context, old keys and rotation tested; format changes need a separate plan. |
| HTTP | Report-only CSP only observes; proxy and store match the actual topology. |
| UI | Cancellation/unmount cleans up dialogs; keyboard and chart names work. |

Report: reviewed version; affected consumer; synthetic reproduction; expected/observed result; limits; publication status. Never publish real logs or credentials.
