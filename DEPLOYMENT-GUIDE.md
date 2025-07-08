# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your JavaScript tutorial to GitHub Pages in just a few simple steps.

## Quick Setup (5 minutes)

### Step 1: Create Your Repository
1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it `javascript-fundamentals-tutorial` (or any name you prefer)
3. Make sure it's **PUBLIC** (required for free GitHub Pages)
4. Check "Add a README file"

### Step 2: Upload Your Files
1. Download or clone this project to your computer
2. Copy all files to your new repository
3. Make sure these files are included:
   - `.github/workflows/deploy.yml` (automatic deployment)
   - `vite.gh-pages.config.ts` (build configuration)
   - All the `client/` folder contents
   - `package.json` and other config files

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under "Source", select **GitHub Actions**
5. Save the settings

### Step 4: Deploy
1. Make any small change to a file (like editing README.md)
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Deploy JavaScript tutorial"
   git push origin main
   ```

3. GitHub Actions will automatically:
   - Install dependencies
   - Build the project for GitHub Pages
   - Deploy to your live website

### Step 5: View Your Live Site
After 2-3 minutes, your tutorial will be live at:
```
https://yourusername.github.io/javascript-fundamentals-tutorial/
```

## What Happens Automatically

✅ **GitHub Actions Workflow** builds your site on every push  
✅ **Code Editor** works with full syntax highlighting  
✅ **Run Code buttons** execute JavaScript in the browser  
✅ **Responsive design** works on mobile and desktop  
✅ **SEO optimized** with proper meta tags  

## Customizing Your Tutorial

### Change the Repository Name
If you want a different URL, rename your repository in GitHub Settings. Your site will be at:
```
https://yourusername.github.io/your-new-name/
```

### Add Your Own Examples
Edit `client/src/pages/tutorial.tsx` and add new `JSFiddleExample` components:

```jsx
<JSFiddleExample
  title="Your Custom Example"
  initialCode={`
// Your JavaScript code here
console.log("Hello, world!");
  `}
/>
```

### Modify Styling
- Edit `client/src/index.css` for global styles
- The project uses Tailwind CSS for easy customization
- Code editor uses a dark theme by default

## Troubleshooting

### Site Not Loading?
- Check that your repository is public
- Verify GitHub Pages is enabled in Settings → Pages
- Wait 5-10 minutes after first deployment

### Build Failing?
- Check the Actions tab for error details
- Make sure all files were uploaded correctly
- Verify `package.json` contains all required dependencies

### Code Editor Not Working?
- Check browser console for JavaScript errors
- Try refreshing the page
- Make sure you're viewing the HTTPS version of your site

## Advanced: Custom Domain

Want to use your own domain like `tutorial.yoursite.com`?

1. Add a `CNAME` file to your repository with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Enable HTTPS in GitHub Pages settings

## Support

- Check the [GitHub Actions logs](https://github.com/yourusername/your-repo/actions) for deployment status
- View the [README.md](README.md) for more detailed information
- Open an issue if you encounter problems

---

**Your JavaScript tutorial is now live and automatically deploys on every code change!**