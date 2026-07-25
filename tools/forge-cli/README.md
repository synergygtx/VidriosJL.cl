# @getforja/forge

Multi-platform CLI for the Forge factory OS. Generates Claude Code,
Codex, OpenCode, Cursor, and Gemini CLI project layouts from a single
agnostic source in `core/`.

> **Status:** alpha. Only `--target=claude` is implemented as of V4.0.0-alpha.3
> (Fase 3). Other targets land in Fase 5.

## Install

```bash
npm i -g @getforja/forge
# or one-shot
npx @getforja/forge init --target=claude
```

## Commands

```bash
forge init [--target=<name>] [--output=<dir>] [--force] [--dry-run]
forge doctor          # detect installed CLIs + project layout
forge doctor --fix    # remove the legacy V4 `forge` alias (see below)
forge check           # validate current project for common issues
```

Targets: `claude`, `codex`, `opencode`, `cursor`, `gemini`, or `all`.

### Migrating from Forge V4

Forge V4 installed a global shell command that **blind-dumps the template over
the current directory** (`cp`/`rsync` with no diff or confirmation). It shadows
this CLI and — far worse — re-running it inside a mature project overwrites real
code (the [V4 production-data incident](#)). It shipped in several forms:

```bash
alias forge='cp -r ~/forge/forge/. .'
alias forge="rsync -a --exclude=.git $FORGE_HOME/ ."   # V4.0-alpha.9
forge() { ... rsync -a --exclude=.git "$FORGE_HOME/" . }
alias forge-init="rsync -a --exclude=.git $FORGE_HOME/ ."
```

**Automatic cleanup.** The `npm install` / `npm i -g` postinstall hook detects
and removes that whole family from your shell rc files (`.bashrc`,
`.bash_aliases`, `.bash_profile`, `.profile`, `.zshrc`, `.zprofile`), backing
each up to `<file>.forge-bak`. It removes only `cp`/`rsync`-based `forge` /
`forge-init` aliases and functions; any *other* `forge` definition that shadows
the CLI (a custom alias, an echo guard) is **reported but left in place** for
you to remove by hand. Skipped in CI and when `FORGE_NO_ALIAS_CLEANUP` is set.

If the command is still active in your current shell (rc edits don't affect a
running shell), run `unalias forge` or open a new terminal. To re-run the
cleanup manually use `command forge doctor --fix` — the `command` builtin
bypasses the alias/function so the real CLI runs.

### `init` safety

`forge init` never blind-overwrites:

- It **refuses a non-empty output directory** unless you pass `--force`.
- It **refuses to run in your HOME directory** outright.
- With `--force`, if the target looks like a real project (a `.git/` repo or a
  populated `package.json`) it requires you to type `DESTROY` — and **refuses
  entirely in a non-interactive shell** (an agent's `bash -c`, a script, CI),
  which is exactly how the V4 incident happened.

## Development

```bash
cd tools/forge-cli
npm install
npm run dev -- init --target=claude --output=/tmp/test-forge
npm run build
npm run test
```

Stack: Node 18+, TypeScript, `commander`, `prompts`, `yaml`, `@iarna/toml`,
`gray-matter`, `chalk`. Target install size: <2 MB.

## Architecture

- `src/index.ts` — commander entry, dispatches to commands
- `src/commands/` — `init.ts`, `doctor.ts`, `check.ts`
- `src/targets/` — per-platform transpilers (only `claude.ts` in Fase 3)
- `src/utils/fs.ts` — cross-platform fs helpers (no shell, no symlinks)

The Claude target replicates the logic of `scripts/regenerate-mirror.sh`
(the bash version is preserved as fallback for environments without Node).
