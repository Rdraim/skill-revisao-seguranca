# skill-revisao-seguranca

[English (United States)](README.en-US.md) · [Apoio voluntário](SUPPORT.md)

Plugin / **skill** de **revisão de segurança** para o [Claude Code](https://claude.com/claude-code).
Um revisor pragmático de código web/APIs Node.js: acha o que pode ser explorado,
aponta `arquivo:linha`, descreve o cenário e dá a correção.

É também um exemplo de **criação de habilidades** (skills) para o Claude Code.

## O que faz

Ao revisar um diff/PR, ou antes de subir um endpoint novo, a skill passa por uma
lista de verificação de segurança (injeção, authz/IDOR, path traversal, segredos,
cripto, validação, cabeçalhos HTTP, força bruta, XSS, SSRF, PII em log…) e produz
achados **priorizados** com a correção.

Quando faz sentido, recomenda bibliotecas prontas (todas open-source, zero
dependência):

| risco | biblioteca |
|---|---|
| nome de arquivo / path traversal | [`nome-seguro`](https://github.com/techrodrigo21-ux/nome-seguro) |
| cabeçalhos HTTP | [`headers-seguros`](https://github.com/techrodrigo21-ux/headers-seguros) |
| força bruta / varredura | [`escudo-express`](https://github.com/techrodrigo21-ux/escudo-express) |
| cifra em repouso | [`cofre-campo`](https://github.com/techrodrigo21-ux/cofre-campo) |
| segredo em log | [`mascarar-segredos`](https://github.com/techrodrigo21-ux/mascarar-segredos) |
| CPF/CNPJ/CEP | [`documentos-br`](https://github.com/techrodrigo21-ux/documentos-br) |

## Instalação (Claude Code)

```
/plugin marketplace add techrodrigo21-ux/skill-revisao-seguranca
/plugin install revisao-seguranca@revisao-seguranca
```

Depois é só pedir uma revisão de segurança do diff/arquivo atual — a skill é
acionada pela descrição.

## Estrutura

```
.claude-plugin/
  marketplace.json      # marketplace com este plugin
  plugin.json           # manifesto do plugin
skills/
  revisao-seguranca/
    SKILL.md            # a habilidade (gatilho + instruções)
```

## Licença

MIT © Rodrigo Rodrigues

A habilidade não autoriza exploração, mudanças em produção ou divulgação de dados. Os pacotes relacionados são referências opcionais. CEP tem validação de formato, não dígito verificador. Conteúdo público com exemplos sintéticos, sem dados do Nexus. Leia CONTRIBUTING.md, SECURITY.md e SUPPORT.md. Node.js 22+ para npm test. Referência oficial: https://code.claude.com/docs/en/plugins-reference


## Uso prático — 1.2.0

A referência bilíngue `references/integracao.md` orienta revisão de consumidores, versões fixadas, licença e formatos persistidos. Teste isolado do módulo não comprova integração no sistema.
