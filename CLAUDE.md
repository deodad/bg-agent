# bg-agent

Generic background coding agent. Runs OpenCode in Modal sandboxes, orchestrated via Cloudflare Agents SDK.

## Quick Context

- **Plan**: See [PLAN.md](./PLAN.md) for full architecture and milestones
- **Current milestone**: M1 (Local Proof of Concept) - verifying OpenCode runs in Modal

## Milestones

1. **M1**: Local POC (Modal + OpenCode) ← CURRENT
2. **M2**: Cloudflare Agent + CLI (multi-client, session sharing)
3. **M3**: Session persistence
4. **M4**: GitHub integration (`gh` CLI)
5. **M5**: Project registry
6. **M6**: Additional clients (Slack, web)

## Project Structure

```
packages/
  shared/     # Types for events and WebSocket protocol
  sandbox/    # Node.js code that runs inside Modal (wraps OpenCode CLI)
  cli/        # (M2) CLI tool
  agent/      # (M2) Cloudflare Durable Object

infra/        # Modal Python code (image, sandbox runner)
```

## Commands

```bash
pnpm build        # Build all packages
pnpm typecheck    # Type check all packages

# Test Modal sandbox (M1)
cd infra
source .venv/bin/activate.fish
python test_sandbox.py "your task here" --repo https://github.com/user/repo
```

## Environment

- `ANTHROPIC_API_KEY` - Set via `.envrc` (direnv)

## Tech Stack

- **Monorepo**: pnpm workspaces + Turbo
- **Sandbox**: Modal (Python SDK)
- **Coding Agent**: OpenCode CLI (headless mode)
- **Orchestration**: Cloudflare Workers + Agents SDK (M2)
