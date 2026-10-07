# skill-revisao-seguranca

[Brazilian Portuguese](README.md) · [Voluntary support](SUPPORT.md)

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
and limitations before recommending them. No donation channel is configured.

## Structure

- `.claude-plugin/plugin.json`: plugin metadata.
- `.claude-plugin/marketplace.json`: local marketplace entry.
- `skills/revisao-seguranca/SKILL.md`: discoverable skill and review boundaries.
- `skills/revisao-seguranca/references/review.en-US.md`: English guidance.
- `test/`: packaging validation, not behavioral certification of an AI model.

[Contributing](CONTRIBUTING.md) · [Security](SECURITY.md) · [Support](SUPPORT.md)

MIT © Rodrigo Rodrigues

Official reference: https://code.claude.com/docs/en/plugins-reference


## Practical use — 1.2.0

The bilingual `references/integracao.md` guides consumer reviews, pinned versions, licensing and persisted formats. Passing isolated module tests does not validate system integration.
