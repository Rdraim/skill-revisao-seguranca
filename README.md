<p align="right">
  <a href="README.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="README.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="README.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# skill-revisao-seguranca

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
| nome de arquivo / path traversal | [`nome-seguro`](https://github.com/Rdraim/nome-seguro) |
| cabeçalhos HTTP | [`headers-seguros`](https://github.com/Rdraim/headers-seguros) |
| força bruta / varredura | [`escudo-express`](https://github.com/Rdraim/escudo-express) |
| cifra em repouso | [`cofre-campo`](https://github.com/Rdraim/cofre-campo) |
| segredo em log | [`mascarar-segredos`](https://github.com/Rdraim/mascarar-segredos) |
| CPF/CNPJ/CEP | [`documentos-br`](https://github.com/Rdraim/documentos-br) |

## Instalação (Claude Code)

```
/plugin marketplace add Rdraim/skill-revisao-seguranca
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

A referência em português `references/integracao.md` orienta revisão de consumidores, versões fixadas, licença e formatos persistidos. Teste isolado do módulo não comprova integração no sistema.

---

<p align="center">
  <img src="assets/support/banner-pt-br.svg" width="960" alt="Código aberto. Um café faz diferença. Apoie o trabalho de Rodrigo Rodrigues.">
</p>

## ☕ Me pague um café

Este projeto te ajudou a resolver um problema, aprender algo novo ou dar os primeiros passos no desenvolvimento? Se você sentir vontade de apoiar meu trabalho, um café é uma forma carinhosa de agradecer.

Sou **Rodrigo Rodrigues**, criador do **Nexus** e destes projetos de código aberto. Seu apoio me ajuda a dedicar tempo para melhorar o código, escrever exemplos mais claros e continuar compartilhando o que aprendo.

**Contribua com o valor que fizer sentido para você. O apoio é totalmente voluntário — o projeto continua gratuito sob a licença MIT.**

<p>
  <a href="#apoie-com-pix"><img src="assets/support/pix-pt-br.svg" width="190" height="44" alt="Apoiar com Pix"></a>
  <a href="https://github.com/Rdraim/skill-revisao-seguranca/issues/new?title=Coment%C3%A1rio%3A%20este%20projeto%20me%20ajudou"><img src="assets/support/comment-pt-br.svg" width="210" height="44" alt="Deixar um comentário"></a>
</p>

### Apoie com Pix

No aplicativo do seu banco, escaneie o QR Code ou copie a chave Pix abaixo. Escolha o valor e confira os dados do destinatário antes de confirmar.

<p align="center">
  <img src="assets/support/pix-qr.png" width="260" alt="QR Code Pix original fornecido por Rodrigo Rodrigues; a chave em texto abaixo é uma alternativa.">
</p>

**Chave Pix**

```text
8875a24e-44d1-4c91-b6bb-62c9f0070955
```

Você também pode apoiar compartilhando o projeto, relatando um problema, melhorando a documentação ou deixando um comentário.

### Seu comentário também faz diferença

[Conte como o projeto te ajudou](https://github.com/Rdraim/skill-revisao-seguranca/issues/new?title=Coment%C3%A1rio%3A%20este%20projeto%20me%20ajudou). Vou gostar de saber o que você criou, o que aprendeu e o que poderia ficar mais claro para quem está começando.

O comentário é bem-vindo com ou sem doação. Preserve sua privacidade: não publique comprovantes, dados pessoais, credenciais ou informações de usuários nas Issues.

---

**Obrigado por apoiar meu trabalho e me ajudar a continuar criando e compartilhando. ❤️**
