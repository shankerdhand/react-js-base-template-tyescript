```markdown
# React TypeScript Base Project

A modern React application starter template with TypeScript, Webpack, ESLint, and Prettier.

## 🚀 Features

- ⚡️ React 18
- 📦 TypeScript 5
- 🛠️ Webpack 5
- 🧹 ESLint + Prettier
- 📚 Storybook
- 🔄 Hot Module Replacement
- 🎯 Code Splitting
- 📝 TypeScript Support
- 🎨 Modular CSS Support
- 📱 Production-ready build optimization

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd react-base

# Install dependencies
npm install
```

## 🔧 Development

```bash
# Start development server
npm run start

# Run type checking
npm run type-check

# Lint files
npm run lint

# Fix lint issues
npm run lint:fix

# Format code
npm run format

# Build for production
npm run build

# Analyze bundle
npm run build:analyze
```

## 📂 Project Structure

```
react-base/
├── src/                    # Source files
│   ├── components/        # Shared components
│   ├── pages/            # Page components
│   ├── utils/            # Utility functions
│   ├── hooks/            # Custom React hooks
│   ├── assets/           # Static assets
│   ├── App.tsx           # Root component
│   └── index.tsx         # Application entry point
├── public/               # Public static files
├── dist/                 # Production build
├── .storybook/          # Storybook configuration
├── scripts/             # Build/setup scripts
├── webpack/             # Webpack configuration
└── tests/               # Test files
```

## 🔄 Update Dependencies

```bash
# Check outdated dependencies
npm run update:check

# Update all dependencies
npm run update

# Check versions
npm run version-check

# Clean install
npm run clean:install
```

## 🛠️ Configuration Files

- `eslint.config.mjs` - ESLint configuration
- `tsconfig.json` - TypeScript configuration
- `webpack.common.js` - Shared webpack configuration
- `webpack.dev.js` - Development webpack configuration
- `webpack.prod.js` - Production webpack configuration
- `.prettierrc` - Prettier configuration

## 📚 Storybook

```bash
# Run Storybook development server
npm run storybook

# Build Storybook
npm run build-storybook
```

## 🔧 Scripts

- `start`: Start development server
- `build`: Build for production
- `build:analyze`: Analyze production bundle
- `type-check`: Run TypeScript type checking
- `lint`: Run ESLint
- `lint:fix`: Fix ESLint issues
- `format`: Format code with Prettier
- `storybook`: Start Storybook development server
- `build-storybook`: Build Storybook
- `update`: Update dependencies
- `version-check`: Check tool versions
- `clean`: Clean build files
- `clean:install`: Clean and reinstall dependencies

## 🌟 Best Practices

- Use TypeScript for type safety
- Follow ESLint rules for consistent code
- Write stories for components using Storybook
- Split code into small, reusable components
- Use React hooks for state management
- Follow semantic versioning
- Keep dependencies updated
- Write meaningful commit messages

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📦 Production Build

The production build will be created in the `dist` directory. To create a production build:

```bash
npm run build
```

## 🔍 Bundle Analysis

To analyze the bundle size:

```bash
npm run build:analyze
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## 🙏 Acknowledgments

- React
- TypeScript
- Webpack
- ESLint
- Prettier
- Storybook

## 📫 Contact

Shanker Dhand - shankerdhand@gmail.com
