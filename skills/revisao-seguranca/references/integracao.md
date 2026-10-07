<p align="right">
  <a href="integracao.md"><img src="../../../assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="integracao.en-US.md"><img src="../../../assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="integracao.es-AR.md"><img src="../../../assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# Revisão de integração

Ao incorporar uma biblioteca, confira o contrato real na versão fixada, o caminho dos dados e a compatibilidade dos formatos persistidos. Não basta o módulo passar nos seus próprios testes: reproduza o fluxo consumidor com fixtures sintéticas. Preserve licença e proveniência se copiar código público.

| Caso | Evidência necessária |
|---|---|
| Logs | Console, arquivo, erro e objeto circular são redigidos antes da saída; nenhum getter/toJSON executado. |
| Arquivos | Limite UTF-8 preserva extensão quando possível; sanitizar nome não impede symlinks, colisões ou sobrescrita. |
| Cifra | Contexto estável, chaves antigas e rotação testados; mudança de formato exige plano separado. |
| HTTP | CSP report-only só observa; proxy e loja correspondem à topologia real. |
| Interface | Cancelamento/desmontagem limpa diálogos; teclado e nomes de gráficos funcionam. |

Relatório: versão analisada; consumidor afetado; reprodução sintética; resultado esperado/observado; limites; estado da publicação. Não publicar logs reais ou credenciais.
