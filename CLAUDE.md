# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an experimental project designed for learning and development with Claude Code. It serves as a sandbox for trying out new features, testing implementations, and exploring different development approaches. The project is intentionally flexible to accommodate various types of experiments and learning goals.

## Getting Started

### Prerequisites
- Git (for version control)
- Node.js (if JavaScript/TypeScript work is planned)
- Python (if Python work is planned)
- Any other language runtimes as needed for specific experiments

### Project Structure

The repository is organized to accommodate different types of projects. Currently minimal, the structure can expand based on project needs:

```
experiment-with-claude/
├── .git/              # Git version control
├── .gitignore         # Git ignore configuration
├── .idea/             # IDE configuration (WebStorm/IntelliJ)
├── README.md          # Project documentation
├── CLAUDE.md          # Claude Code guidance (this file)
└── LICENSE            # Project license
```

## Development Guidelines

### Before Starting Work

1. **Understand the Current State**: Always read existing documentation (README.md) and any relevant configuration files before making changes.
2. **Ask Clarifying Questions**: If the task requirements are unclear or if there are multiple valid approaches, ask for clarification before implementation.
3. **Plan Complex Changes**: For tasks affecting multiple files or requiring architectural decisions, outline the approach and get approval before implementation.

### Code Organization

- Keep code modular and well-organized
- Use clear, descriptive names for files and functions
- Follow language-specific conventions and best practices
- Separate concerns logically (e.g., business logic, UI, configuration)

### Testing & Validation

- Run appropriate tests or validation after making changes
- Ensure changes don't break existing functionality
- For experiments, document what was tested and any findings

### Git Workflow

- Make meaningful, atomic commits with clear messages
- Keep commits focused on a single concern
- Use descriptive branch names if working with branches

## Building & Running

Since this is an experimental project, build and run procedures will depend on the specific implementation. Update this section as the project develops.

**Common Development Tasks:**

```bash
# Initialize or update dependencies (if applicable)
npm install        # For Node.js projects
pip install -r requirements.txt  # For Python projects

# Run the project (varies by type)
npm start          # For Node.js
python main.py     # For Python

# Run tests (varies by implementation)
npm test           # For Node.js projects
```

## Important Notes

- This project is a learning tool - experiments and iterations are expected
- Always preserve git history for tracking changes and learning
- Document significant discoveries or learnings in README.md or relevant files
- Keep dependencies minimal unless there's a specific need
