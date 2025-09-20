# 5 Minute Chill

**Find your calm in 5 minutes** - A modern web application providing relaxing ambient sounds for stress relief and mindfulness.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Mantine](https://img.shields.io/badge/Mantine-8.3.1-339af0?style=flat-square)](https://mantine.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 🎵 Features

- **Curated Ambient Sounds**: Carefully selected nature sounds, rain, ocean waves, and more
- **Interactive Sound Mixing**: Play multiple sounds simultaneously with individual volume controls
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Next.js 15, React 19, and Mantine UI
- **Fast Performance**: Optimized for quick loading and smooth interactions
- **Static Export Ready**: Can be deployed as static files to any hosting provider
- **Accessibility First**: Keyboard navigation and screen reader support

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PNPM (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Available Scripts

- `pnpm dev` - Start development server on [http://localhost:3000](http://localhost:3000)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks
- `pnpm export` - Generate static export (files in `out/` directory)

## 🏗️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: Mantine UI v8.3.1
- **Language**: TypeScript 5.9.2
- **Styling**: CSS-in-JS with Mantine + Tailwind CSS v4
- **Package Manager**: PNPM
- **Linting**: ESLint with Next.js config
- **Deployment**: Vercel (recommended) or static hosting

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout component
│   │   ├── page.tsx         # Home page
│   │   ├── providers.tsx    # Mantine providers
│   │   ├── error.tsx        # Error boundary
│   │   └── not-found.tsx    # 404 page
│   ├── components/          # Reusable React components
│   │   └── SoundCard.tsx    # Sound card component
│   └── types/              # TypeScript type definitions
│       └── sound.ts        # Sound interface
├── public/
│   └── assets/             # Static assets
│       ├── audio/          # MP3 audio files
│       └── images/         # Background images (JPG/WebP)
├── out/                    # Static export output
├── package.json            # Dependencies and scripts
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.mjs       # ESLint configuration
└── README.md               # This file
```

## 🎨 Design Philosophy

The application focuses on simplicity and calmness:
- **Minimal Interface**: Clean, distraction-free design
- **Natural Sounds**: High-quality ambient audio
- **Intuitive Controls**: Easy-to-use volume sliders and play/pause
- **Accessibility**: Keyboard navigation and screen reader support

## 🔧 Development

### Code Quality

This project follows modern development practices:

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code linting with Next.js recommended rules
- **Clean Git History**: Proper `.gitignore` configuration (no `node_modules` tracked)
- **Modern Dependencies**: Latest stable versions of all packages

### Adding New Sounds

1. Add audio files to `public/assets/audio/`
2. Add corresponding images to `public/assets/images/`
3. Update `public/sounds.json` with sound metadata
4. The `SoundCard` component will automatically pick up new sounds

### Environment Setup

```bash
# Clone the repository
git clone <repository-url>
cd 5minutechill.com

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Static Export

```bash
pnpm build
# Static files will be generated in the 'out' directory
```

### Other Hosting Providers

The static export works with any static hosting provider:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any CDN or web server

## 🐛 Troubleshooting

### Common Issues

**Audio not playing:**
- Check browser autoplay policies
- Ensure audio files are in the correct format (MP3)
- Verify file paths in `sounds.json`

**Build errors:**
- Run `pnpm install` to ensure all dependencies are installed
- Check TypeScript errors with `pnpm lint`
- Clear Next.js cache: `rm -rf .next`

**Performance issues:**
- Audio files are optimized for web delivery
- Images are provided in both JPG and WebP formats
- Static export reduces server load

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Ways to Contribute

- **Add new sounds**: Submit high-quality ambient audio files
- **Improve UI/UX**: Enhance the user interface and experience
- **Fix bugs**: Report and fix issues
- **Documentation**: Improve this README or add code comments
- **Performance**: Optimize loading times and bundle size

### Development Guidelines

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `pnpm lint`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📋 Changelog

### v2.0.0 (Current)
- ✅ **Repository Cleanup**: Removed `node_modules` from Git tracking
- ✅ **Modern Stack**: Upgraded to Next.js 15, React 19, and Mantine UI v8
- ✅ **TypeScript**: Full type safety implementation
- ✅ **Performance**: Optimized build and static export
- ✅ **Documentation**: Comprehensive README with development guidelines

### v1.x (Previous)
- Initial release with basic sound mixing functionality
- Responsive design implementation
- Core ambient sound library

## 🙏 Acknowledgments

- **Audio Contributors**: 
  - Mike Koenig (SoundBible.com)
  - Daniel Simon
  - GlorySunz
  - Various Freesound.org contributors
- **Images**: Beautiful nature photography from Unsplash photographers
- **Technology**: Built with modern web technologies and best practices
- **Community**: Thanks to all contributors and users

---

**Created with ❤️ in Bulgaria**  
*Powered by Next.js, React, and strong coffee*

*Last updated: December 2024*
