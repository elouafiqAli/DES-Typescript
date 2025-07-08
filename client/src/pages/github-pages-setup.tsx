import { useState } from "react";
import { Copy, Download, Github, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function GitHubPagesSetup() {
  const { toast } = useToast();
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    toast({
      title: "Copied to clipboard!",
      description: `${section} configuration copied.`,
    });
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const packageJsonConfig = `{
  "name": "javascript-tutorial",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.0.0",
    "vite": "^4.4.0"
  }
}`;

  const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})`;

  const githubWorkflow = `name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist`;

  const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Fundamentals Tutorial</title>
    <meta name="description" content="Learn JavaScript fundamentals with interactive examples and hands-on coding exercises." />
    
    <!-- Open Graph meta tags for social media sharing -->
    <meta property="og:title" content="JavaScript Fundamentals Tutorial" />
    <meta property="og:description" content="Interactive JavaScript tutorial with code examples you can run in your browser." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourusername.github.io/your-repo-name/" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

  return (
    <div className="min-h-screen bg-white text-github-text">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-github-text mb-4">Deploy to GitHub Pages</h1>
          <p className="text-lg text-github-gray leading-relaxed">
            Follow these steps to publish your JavaScript tutorial as a GitHub Pages website.
          </p>
        </div>

        {/* Step 1: Create Repository */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-github-text mb-4 flex items-center gap-2">
            <Github className="w-6 h-6" />
            Step 1: Create GitHub Repository
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-github-gray">
            <li>Go to <a href="https://github.com" className="text-github-blue hover:underline">GitHub.com</a> and create a new repository</li>
            <li>Name it something like <code className="bg-gray-100 px-2 py-1 rounded">javascript-tutorial</code></li>
            <li>Make sure it's <strong>public</strong> (required for GitHub Pages)</li>
            <li>Initialize with a README if you want</li>
            <li>Clone the repository to your local machine</li>
          </ol>
        </div>

        {/* Step 2: Project Structure */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-github-text mb-4">Step 2: Create Project Files</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-github-text mb-2">package.json</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 relative">
              <button
                onClick={() => copyToClipboard(packageJsonConfig, "package.json")}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-github-blue transition-colors"
              >
                {copiedSection === "package.json" ? <span className="text-green-600">✓</span> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-sm overflow-x-auto"><code>{packageJsonConfig}</code></pre>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-github-text mb-2">vite.config.ts</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 relative">
              <button
                onClick={() => copyToClipboard(viteConfig, "vite.config.ts")}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-github-blue transition-colors"
              >
                {copiedSection === "vite.config.ts" ? <span className="text-green-600">✓</span> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-sm overflow-x-auto"><code>{viteConfig}</code></pre>
            </div>
            <p className="text-sm text-github-gray mt-2">
              <strong>Important:</strong> Replace <code>your-repo-name</code> with your actual repository name!
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-github-text mb-2">index.html</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 relative">
              <button
                onClick={() => copyToClipboard(indexHtml, "index.html")}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-github-blue transition-colors"
              >
                {copiedSection === "index.html" ? <span className="text-green-600">✓</span> : <Copy className="w-4 h-4" />}
              </button>
              <pre className="text-sm overflow-x-auto"><code>{indexHtml}</code></pre>
            </div>
          </div>
        </div>

        {/* Step 3: GitHub Actions */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-github-text mb-4">Step 3: Automated Deployment</h2>
          <p className="text-github-gray mb-4">
            Create <code className="bg-gray-100 px-2 py-1 rounded">.github/workflows/deploy.yml</code> for automatic deployment:
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 relative">
            <button
              onClick={() => copyToClipboard(githubWorkflow, "GitHub Actions workflow")}
              className="absolute top-2 right-2 p-2 text-gray-500 hover:text-github-blue transition-colors"
            >
              {copiedSection === "GitHub Actions workflow" ? <span className="text-green-600">✓</span> : <Copy className="w-4 h-4" />}
            </button>
            <pre className="text-sm overflow-x-auto"><code>{githubWorkflow}</code></pre>
          </div>
        </div>

        {/* Step 4: Enable GitHub Pages */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-github-text mb-4">Step 4: Enable GitHub Pages</h2>
          <ol className="list-decimal list-inside space-y-2 text-github-gray">
            <li>Go to your repository on GitHub</li>
            <li>Click on <strong>Settings</strong> tab</li>
            <li>Scroll down to <strong>Pages</strong> section</li>
            <li>Under "Source", select <strong>GitHub Actions</strong></li>
            <li>Push your code to the main branch</li>
            <li>GitHub Actions will automatically build and deploy your site</li>
          </ol>
        </div>

        {/* Final Steps */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-green-900 mb-4">Step 5: Your Site is Live! 🎉</h2>
          <p className="text-green-800 mb-4">
            After pushing your code, your tutorial will be available at:
          </p>
          <div className="bg-white border border-green-200 rounded-lg p-3 font-mono text-sm">
            https://yourusername.github.io/your-repo-name/
          </div>
          <p className="text-green-800 mt-4">
            Any future commits to the main branch will automatically update your live site!
          </p>
        </div>

        {/* Quick Commands */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Quick Command Reference</h3>
          <div className="space-y-2 text-blue-800 font-mono text-sm">
            <div><code>npm install</code> - Install dependencies</div>
            <div><code>npm run dev</code> - Start development server</div>
            <div><code>npm run build</code> - Build for production</div>
            <div><code>git add .</code> - Stage all changes</div>
            <div><code>git commit -m "Initial commit"</code> - Commit changes</div>
            <div><code>git push origin main</code> - Deploy to GitHub Pages</div>
          </div>
        </div>
      </div>
    </div>
  );
}