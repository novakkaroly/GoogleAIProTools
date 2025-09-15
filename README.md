<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Google AI Pro Tools

## 🚀 Live Demo

The app is deployed and available at: **[https://novakkaroly.github.io/GoogleAIProTools/](https://novakkaroly.github.io/GoogleAIProTools/)**

## 📝 About

This contains everything you need to run your Google AI Pro Tools app locally and deploy it to GitHub Pages.

View your app in AI Studio: https://ai.studio/apps/drive/17zW8LCk3jsbixtzFVK1VAsLyuMlLESLY

## 🏃‍♂️ Run Locally

**Prerequisites:** Node.js

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key**

3. **Run the app:**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

This repository is configured with GitHub Actions for automatic deployment to GitHub Pages. Every push to the main branch will:

1. Build the React+Vite application
2. Deploy it to GitHub Pages
3. Make it available at the live URL above

The deployment workflow is configured in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
