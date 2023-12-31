# Contributing to [svelte-put][github]

Thank you for stopping by. [svelte-put][github] welcomes and appreciates your contribution.

## Table of Contents

- [Contributing to svelte-put](#contributing-to-svelte-put)
  - [Table of Contents](#table-of-contents)
  - [Reporting Issues](#reporting-issues)
    - [Bug Report](#bug-report)
    - [Feature Request](#feature-request)
  - [Pull Requests](#pull-requests)
  - [Consistent Code Style](#consistent-code-style)
  - [Development Setup](#development-setup)
    - [Recommended VSCode Extensions](#recommended-vscode-extensions)

## Reporting Issues

Before opening a new issue, [first search for existing issues][github.issues] to avoid duplications.

When you start working on an issue, make sure you are asked to be assigned to it.

### Bug Report

Please include as much details as possible:

- steps to reproduce,
- a github repo that has enough setup to reproduce the bug would be nice. It might be helpful to clone this repo and play around in the [docs](./sites/docs) project, create a branch to reproduce your problem there and reference in your issue.
- screenshots.

### Feature Request

If you have an idea and don't know where to start yet, consider [opening a discussion][github.discussions] first.

If you have a PR ready as your proposed implementation, you can [create an issue][github.issues] and a PR that references it.

## Pull Requests

Each pull request should [reference an open issue][github.issues.open] unless the change is very something simple such as a typo.

## Consistent Code Style

1. Commit message should follow the [Conventional Commits specification][conventionalcommits].
2. Code should be formatted with [prettier] and linted with [eslint] and [stylelint]. They are already integrated into the codebase. See [package.json] for relevant scripts. There might also exist extensions for your editor that further enhance the experience with these tools.
   - [VS Code Prettier][vscode.extension.prettier]
   - [VS Code Eslint][vscode.extension.eslint]
   - [VS Code Stylelint][vscode.extension.stylelint]

## Development Setup

This is a monorepo managed with [pnpm] & [turborepo]. Familiarity with [turborepo] is helpful but [turborepo] shouldn't stand in your way otherwise.

The monorepo contains several "projects" (a folder with its own `package.json` - "package" in [pnpm] terminology).

Typically you will only work in one project at a time, in which case the workflow is similar if not exactly the following:

```bash
# cd to the project of interest

pnpm install
pnpm dev

pnpm lint
pnpm format

pnpm build

# to generate api analysis & docs
pnpm api
```

### Recommended VSCode Extensions

Some extensions that are well suited for this project:

| Extension                                                                                                  | Author         |
| ---------------------------------------------------------------------------------------------------------- | -------------- |
| [Monorepo Workspace](https://marketplace.visualstudio.com/items?itemName=folke.vscode-monorepo-workspace)  | Folke Lemaitre |
| [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)             | Svelte         |
| [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) | Brad Cornes    |
| [Stylelint][vscode.extension.stylelint]                                                                    | stylelint      |
| [Eslint][vscode.extension.eslint]                                                                          | eslint         |
| [Prettier][vscode.extension.prettier]                                                                      | prettier       |

[turborepo]: https://turborepo.org/
[github]: https://github.com/vnphanquangsvelte-put/
[github.issues]: https://github.com/vnphanquang/svelte-put/issues?q=
[github.issues.open]: https://github.com/vnphanquang/svelte-put/issues?q=is%3Aissue+is%3Aopen
[github.discussions]: https://github.com/vnphanquang/vnphanquang.dev/discussions
[conventionalcommits]: https://www.conventionalcommits.org/en/v1.0.0/
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[stylelint]: https://stylelint.io/
[vscode.extension.prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode.extension.eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vscode.extension.stylelint]: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
[pnpm]: https://pnpm.io/
