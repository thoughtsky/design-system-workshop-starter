# AI-Assisted Design System Workshop Repo

This repository is the starter environment for the workshop.

We’ll use it to:
- connect Figma MCP to Cursor / Claude Code / Codex
- pull component context from Figma
- generate React components with AI 
- preview and iterate on them inside Storybook

The repo intentionally starts almost empty so we can build everything live during the session.

---

# 1. Requirements

Before the workshop, make sure you have:

## Required
- Node.js installed (https://nodejs.org/en/download)
- Cursor / Claude Code / Codex installed
- A sufficient plan for Cursor / Claude Code / Codex
- A (paid) Figma account with MCP access enabled (Note: While technically the MCP is available on the free plan, it is so limited that you will quickly hit rate limits)

## Helpful but absolutely optional
- Basic familiarity with React and Tailwind
- Basic familiarity with Cursor or another AI coding tool
- Basic familiarity with the terminal

---

# 2. Basic setup

- Open your IDE (Cursor etc)
- Select a new fresh folder to start your project in OR select the option *Clone repo* (e.g. Cursor has this in a new window)
- Open the terminal (Skip if you cloned repo)
- Copy the following into the terminal (Skip if you cloned repo)
```sh
git clone https://github.com/thoughtsky/design-system-workshop-starter.git
```
- Hit enter

# 3. Get Storybook running

- Run the following command in the terminal
```sh
npm install
```
- Run the following command in the terminal
```sh
npm run storybook
```
- Storybook should now automatically open in your browser. If not check by typing the following in your browser search bar
```sh
localhost:6006
```
