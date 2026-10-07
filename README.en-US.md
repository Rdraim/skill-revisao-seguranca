<p align="right">
  <a href="README.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="README.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="README.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# skill-revisao-seguranca

A security review skill for web and Node.js API code, packaged as a Claude Code
plugin. It produces prioritized findings with evidence and actionable fixes.
It also serves as a small, readable example of SKILL.md packaging for beginners.
No runtime dependency, external service, credential or user record is included.

## Download and inspect

```sh
git clone https://github.com/techrodrigo21-ux/skill-revisao-seguranca.git
cd skill-revisao-seguranca
npm test
node tools/check-public-content.mjs
```

Read `skills/revisao-seguranca/SKILL.md` before enabling the skill. Requires
Node.js 22+ only for package tests. Claude Code is required to load the plugin;
the instructions can also be adapted to another SKILL.md-compatible agent.

## Install in Claude Code

```text
/plugin marketplace add techrodrigo21-ux/skill-revisao-seguranca
/plugin install revisao-seguranca@revisao-seguranca
```

Example: “Review this diff for security issues. Use synthetic evidence and report
file, line, impact, exploitation scenario and fix.” The skill responds in the
user's language. English guidance is in the skill's `references` directory.

## Limits

A code review does not authorize penetration testing, production changes,
credential changes, deployment or disclosure of secrets. It is not a security
certification. Related libraries are optional references; verify their APIs
and limitations before recommending them.

## Structure

- `.claude-plugin/plugin.json`: plugin metadata.
- `.claude-plugin/marketplace.json`: local marketplace entry.
- `skills/revisao-seguranca/SKILL.md`: discoverable skill and review boundaries.
- `skills/revisao-seguranca/references/review.en-US.md`: English guidance.
- `test/`: packaging validation, not behavioral certification of an AI model.

[Contributing](CONTRIBUTING.en-US.md) · [Security](SECURITY.en-US.md)

MIT © Rodrigo Rodrigues

Official reference: https://code.claude.com/docs/en/plugins-reference


## Practical use — 1.2.0

The localized `references/integracao.md` guides consumer reviews, pinned versions, licensing and persisted formats. Passing isolated module tests does not validate system integration.

---

<p align="center">
  <img src="assets/support/banner-en-us.svg" width="960" alt="Open source. A coffee makes a difference. Support Rodrigo Rodrigues’s work.">
</p>

## ☕ Buy me a coffee

Did this project help you solve a problem, learn something new, or take your first steps in development? If you feel like supporting my work, a coffee is a kind way to say thank you.

I’m **Rodrigo Rodrigues**, creator of **Nexus** and these open source projects. Your support helps me set aside time to improve the code, write clearer examples, and keep sharing what I learn.

**Give any amount that feels right to you. Supporting is completely optional — the project remains free under the MIT license.**

<p>
  <a href="#support-via-pix"><img src="assets/support/pix-en-us.svg" width="190" height="44" alt="Support via Pix"></a>
  <a href="https://github.com/techrodrigo21-ux/skill-revisao-seguranca/issues/new?title=Feedback%3A%20this%20project%20helped%20me"><img src="assets/support/comment-en-us.svg" width="210" height="44" alt="Leave a comment"></a>
</p>

### Support via Pix

In your banking app, scan the QR code or copy the Pix key below. Choose your amount and check the recipient details before confirming.

<p align="center">
  <img src="assets/support/pix-qr.png" width="260" alt="Original Pix QR code supplied by Rodrigo Rodrigues; the text key below is an alternative.">
</p>

**Pix key**

```text
8875a24e-44d1-4c91-b6bb-62c9f0070955
```

Pix is Brazil’s payment system. If your bank does not support it, you can still help by sharing the project, reporting a bug, improving the documentation, or leaving feedback.

### Your feedback matters, too

[Tell me how the project helped you](https://github.com/techrodrigo21-ux/skill-revisao-seguranca/issues/new?title=Feedback%3A%20this%20project%20helped%20me). I’d love to hear what you built, what you learned, and what could be clearer for someone just starting out.

A comment is welcome with or without a donation. Please keep payment receipts, personal details, credentials and private user data out of public Issues.

---

**Thank you for supporting my work and helping me keep building and sharing. ❤️**
