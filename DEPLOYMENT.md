# 🚀 Deployment Guide for MediCompare+

This guide will help you deploy your MediCompare+ application to various platforms.

## 📦 Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy Vite/React applications.

### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Your Project**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your `isedept` repository
   - Vercel will automatically detect it's a Vite project

3. **Configure Build Settings** (Auto-detected)
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site will be live at `your-project.vercel.app`

### Using Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy from project directory
vercel

# Deploy to production
vercel --prod
```

---

## 🔷 Option 2: Deploy to Netlify

### Steps:

1. **Create a Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **New Site from Git**
   - Click "New site from Git"
   - Choose GitHub and authorize
   - Select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Using Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

---

## 🐙 Option 3: Deploy to GitHub Pages

### Steps:

1. **Install gh-pages package**
```bash
npm install -D gh-pages
```

2. **Update vite.config.js**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/isedept/', // Your repository name
})
```

3. **Add deploy scripts to package.json**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Save

Your site will be available at: `https://ritheshhebbar.github.io/isedept/`

---

## ☁️ Option 4: Deploy to Railway

### Steps:

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**
   - Railway auto-detects Vite
   - Build Command: `npm run build`
   - Start Command: `npm run preview`

---

## 🌐 Option 5: Deploy to Render

### Steps:

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **New Static Site**
   - Click "New +"
   - Select "Static Site"
   - Connect your repository

3. **Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Click "Create Static Site"

---

## 🔧 Pre-Deployment Checklist

- [x] All pages working correctly
- [x] No console errors
- [x] Responsive design tested
- [x] QR code generation working
- [x] Local storage functioning
- [x] All routes accessible
- [x] Build completes without errors

### Test Production Build Locally:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Open `http://localhost:4173` to test the production build locally.

---

## 🌍 Custom Domain Setup

### For Vercel:
1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### For Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Update your DNS records

---

## 📊 Environment Variables (If Needed)

If you add backend APIs later, create `.env` file:

```env
VITE_API_URL=https://your-api.com
VITE_GOOGLE_MAPS_API_KEY=your-key
```

**Important:** 
- Prefix all env variables with `VITE_`
- Add `.env` to `.gitignore`
- Set environment variables in your hosting platform

---

## 🔄 Continuous Deployment

Once connected to GitHub, deployments are automatic:

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Update features"
   git push origin main
   ```

2. **Automatic deployment** triggers on all platforms
3. **Preview deployments** for pull requests (Vercel/Netlify)

---

## 🐛 Common Issues & Solutions

### Issue: Blank page after deployment
**Solution:** Check if `base` is set correctly in `vite.config.js`

### Issue: Routes not working (404 on refresh)
**Solution:** Add `_redirects` file (Netlify) or `vercel.json` (Vercel)

**For Netlify** - Create `public/_redirects`:
```
/*    /index.html   200
```

**For Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Issue: Build fails
**Solution:** 
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📈 Performance Optimization

Before deploying, optimize your app:

1. **Enable compression**
2. **Optimize images** (use WebP format)
3. **Code splitting** (already handled by Vite)
4. **Lazy loading** for routes
5. **Remove console.logs** from production

---

## 🎉 Post-Deployment

After successful deployment:

1. ✅ Test all features on live site
2. ✅ Check mobile responsiveness
3. ✅ Test QR code download
4. ✅ Verify all routes work
5. ✅ Share your live URL!

---

## 📞 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Vite Deployment:** [vitejs.dev/guide/static-deploy](https://vitejs.dev/guide/static-deploy.html)

---

**🎊 Congratulations on deploying MediCompare+!**

Share your live URL with the world! 🌍
