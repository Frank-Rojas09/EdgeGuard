# Contributing to EdgeGuard

Thank you for your interest in contributing to EdgeGuard! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/EdgeGuard.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Setup

### Frontend
```bash
cd apps/frontend
npm install
npm run dev
```

### Backend (Coming Soon)
```bash
cd apps/backend
pip install -r requirements.txt
python main.py
```

## Code Standards

- **TypeScript**: Use strict typing, no `any` types
- **Python**: Follow PEP 8 style guide
- **Components**: One component per file
- **CSS**: Use component-specific CSS files in `styles/` folder
- **Commits**: Write clear, descriptive commit messages

## Pull Request Process

1. Update documentation for any changed functionality
2. Add tests for new features
3. Ensure all tests pass
4. Update the README.md if needed
5. Submit PR with clear description of changes

## Reporting Issues

- Use GitHub Issues
- Provide clear description and steps to reproduce
- Include system information and logs if applicable

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help create a welcoming environment

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
