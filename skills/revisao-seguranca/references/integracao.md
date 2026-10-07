# Revisão de integração / Integration review

PT-BR: ao incorporar uma biblioteca, confira o contrato real na versão fixada,
o caminho dos dados e a compatibilidade dos formatos persistidos. Não basta
o módulo passar nos seus próprios testes: reproduza o fluxo consumidor com
fixtures sintéticas. Preserve licença e proveniência se copiar código público.

EN-US: when integrating a library, inspect the actual API of the pinned version,
data flow and compatibility with persisted formats. Passing the library's own
tests is insufficient: exercise its consumer with synthetic fixtures. Preserve
license and provenance when copying public code.

| Caso / Case | Evidência necessária / Required evidence |
|---|---|
| Logs | Console, arquivo, erro e objeto circular são redigidos antes da saída; nenhum getter/toJSON executado. / Console, file, errors and cycles are redacted before output; getters/toJSON are not executed. |
| Arquivos / Files | Limite UTF-8 preserva extensão quando possível; sanitizar nome não impede symlinks, colisões ou sobrescrita. / UTF-8 limit preserves extension when possible; name sanitization does not prevent symlinks, collisions or overwrites. |
| Cifra / Encryption | Contexto estável, chaves antigas e rotação testados; mudança de formato exige plano separado. / Stable context, old keys and rotation tested; format changes need a separate plan. |
| HTTP | CSP report-only só observa; proxy e loja correspondem à topologia real. / Report-only CSP only observes; proxy and store match the actual topology. |
| Interface / UI | Cancelamento/desmontagem limpa diálogos; teclado e nomes de gráficos funcionam. / Cancellation/unmount cleans up dialogs; keyboard and chart names work. |

Relatório / Report: versão analisada; consumidor afetado; reprodução sintética;
resultado esperado/observado; limites; estado da publicação. / Reviewed version;
affected consumer; synthetic reproduction; expected/observed result; limits;
publication status. Não publicar logs reais ou credenciais. / Never publish real
logs or credentials.
