# JavaScript Fundamentals Tutorial

An interactive JavaScript tutorial website with live code editors, syntax highlighting, and runnable examples. Perfect for learning JavaScript fundamentals with hands-on coding practice.

## 🚀 Features

- **Interactive Code Editors**: Write and run JavaScript code directly in your browser
- **Syntax Highlighting**: Professional code editor with CodeMirror
- **Live Examples**: DOM manipulation, functions, objects, and arrays
- **Responsive Design**: Works on desktop and mobile devices
- **GitHub Pages Ready**: Automatic deployment with GitHub Actions

## 🌐 Live Demo

[View Live Tutorial](https://yourusername.github.io/javascript-fundamentals-tutorial/)

## 🛠️ Quick Deploy to GitHub Pages

### Method 1: One-Click Deploy (Recommended)

1. **Fork this repository** to your GitHub account
2. **Go to Settings** → **Pages** in your forked repository
3. **Select "GitHub Actions"** as the source
4. **Push any commit** to the main branch - the site will automatically deploy!

Your tutorial will be live at: `https://yourusername.github.io/javascript-fundamentals-tutorial/`

### Method 2: Manual Setup

1. **Clone your forked repository:**
   ```bash
   git clone https://github.com/yourusername/javascript-fundamentals-tutorial.git
   cd javascript-fundamentals-tutorial
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build for GitHub Pages:**
   ```bash
   npx vite build --config vite.gh-pages.config.ts
   ```

4. **Deploy:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

## 🖥️ Local Development

Run the tutorial locally for development:

```bash
npm install
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

## 📁 Project Structure

```
├── client/src/
│   ├── components/tutorial/    # Tutorial components
│   ├── pages/                  # Page components
│   └── App.tsx                 # Main app component
├── .github/workflows/          # GitHub Actions for deployment
├── vite.gh-pages.config.ts     # GitHub Pages build config
└── README.md                   # This file
```

## 🎯 Tutorial Content

- **Variables & Data Types**: Learn about let, const, strings, numbers, booleans
- **Functions**: Function declarations, arrow functions, parameters
- **Objects & Arrays**: Working with complex data structures
- **Interactive Examples**: Live coding exercises with immediate feedback
- **DOM Manipulation**: Hands-on examples of changing web pages

## 🔧 Customization

### Adding New Examples

1. Edit `client/src/pages/tutorial.tsx`
2. Add new `JSFiddleExample` components with your code examples
3. The code will run in real-time in the browser

### Styling

- Modify `client/src/index.css` for global styles
- Uses Tailwind CSS for component styling
- Dark theme code editor with syntax highlighting

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers supported

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test locally
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

MIT License - feel free to use this for your own tutorials!

## 🐛 Issues

Found a bug or have a suggestion? [Open an issue](https://github.com/yourusername/javascript-fundamentals-tutorial/issues)

---

**Made with ❤️ for JavaScript learners everywhere**