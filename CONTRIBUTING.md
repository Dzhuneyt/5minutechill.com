# Contributing to 5 Minute Chill

Thank you for your interest in contributing to 5 Minute Chill! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- PNPM package manager
- Git

### Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/5minutechill.com.git`
3. Install dependencies: `pnpm install`
4. Start development server: `pnpm dev`

## 🎵 Adding New Sounds

### Audio Requirements
- **Format**: MP3 (optimized for web)
- **Quality**: High-quality ambient sounds
- **Duration**: 5-10 minutes (looping)
- **License**: Must be free to use (CC0, CC BY, or similar)

### Image Requirements
- **Format**: JPG and WebP
- **Size**: 1920x1080 or similar high resolution
- **Style**: Calming, nature-themed images
- **License**: Free to use (Unsplash, Pexels, etc.)

### Steps to Add Sounds
1. Add audio file to `public/assets/audio/`
2. Add corresponding image to `public/assets/images/`
3. Update `public/sounds.json` with metadata:
   ```json
   {
     "id": "unique-id",
     "name": "Sound Name",
     "description": "Brief description",
     "audioFile": "filename.mp3",
     "imageFile": "filename.jpg",
     "category": "nature|rain|ocean|wind|thunder"
   }
   ```

## 🐛 Reporting Bugs

### Before Reporting
1. Check if the issue already exists
2. Try the latest version
3. Clear browser cache and try again

### Bug Report Template
```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g. macOS, Windows, Linux]
- Browser: [e.g. Chrome, Firefox, Safari]
- Version: [e.g. 22]

**Additional context**
Any other context about the problem.
```

## ✨ Feature Requests

### Before Requesting
1. Check if the feature already exists
2. Consider if it aligns with the project's goals
3. Think about implementation complexity

### Feature Request Template
```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Alternative solutions or features you've considered.

**Additional context**
Any other context or screenshots about the feature request.
```

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow existing naming conventions
- Add comments for complex logic
- Ensure accessibility compliance

### Commit Messages
Use clear, descriptive commit messages:
- `feat: add new ocean wave sound`
- `fix: resolve audio playback issue on mobile`
- `docs: update README with new features`
- `refactor: improve sound card component`

### Testing
- Test on multiple browsers
- Test on mobile devices
- Ensure audio plays correctly
- Verify responsive design

## 📝 Pull Request Process

1. **Create a branch**: `git checkout -b feature/your-feature-name`
2. **Make changes**: Implement your feature or fix
3. **Test thoroughly**: Ensure everything works
4. **Run linting**: `pnpm lint`
5. **Commit changes**: Use clear commit messages
6. **Push to your fork**: `git push origin feature/your-feature-name`
7. **Create Pull Request**: Provide clear description

### PR Template
```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tested on desktop browsers
- [ ] Tested on mobile devices
- [ ] Audio functionality verified
- [ ] No console errors

## Screenshots
If applicable, add screenshots.

## Additional Notes
Any additional information.
```

## 🎨 Design Guidelines

### UI/UX Principles
- **Simplicity**: Keep the interface clean and minimal
- **Accessibility**: Ensure keyboard navigation and screen reader support
- **Performance**: Optimize for fast loading
- **Mobile-first**: Design for mobile, enhance for desktop

### Color Scheme
- Use calming, nature-inspired colors
- Maintain good contrast ratios
- Follow Mantine UI design system

## 📄 License

By contributing to 5 Minute Chill, you agree that your contributions will be licensed under the MIT License.

## 💬 Community

- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Code of Conduct**: Be respectful and inclusive

## 🙏 Recognition

Contributors will be recognized in:
- README acknowledgments
- Release notes
- Project documentation

Thank you for contributing to 5 Minute Chill! 🎵
