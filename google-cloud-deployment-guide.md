# Google Cloud Deployment Guide for Tech Adivas Website

## Overview
This guide explains how to deploy your React app to Google Cloud App Engine, including DNS setup, dark mode support, and troubleshooting.

---

## 1. Prerequisites
- Google Cloud project with billing enabled
- Google Cloud SDK (`gcloud`) installed and authenticated
- Node.js and npm installed
- Your React app codebase ready

---

## 2. Build Your React App
1. Open a terminal in your project root.
2. Run:
   ```sh
   npm run build
   ```
   This creates a `build/` directory with production-ready static files.

---

## 3. Prepare App Engine Configuration
1. Ensure you have an `app.yaml` file with the following content:
   ```yaml
   runtime: nodejs20
   service: default

   handlers:
     - url: /static
       static_dir: static
       secure: always

     - url: /(.*\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot))
       static_files: \1
       upload: .*
       secure: always

     - url: /.*
       static_files: index.html
       upload: index.html
       secure: always

   env_variables:
     NODE_ENV: production
   automatic_scaling:
     max_instances: 10
   ```
2. Copy or move `app.yaml` into the `build/` directory:
   ```sh
   copy app.yaml build/app.yaml
   # or on Mac/Linux:
   cp app.yaml build/app.yaml
   ```

---

## 4. Deploy to App Engine
1. Change to the `build/` directory:
   ```sh
   cd build
   ```
2. Deploy:
   ```sh
   gcloud app deploy
   ```
3. Confirm the prompts as needed.
4. After deployment, your app will be live at:
   - `https://[YOUR_PROJECT_ID].uc.r.appspot.com`

---

## 5. Set Up Custom Domain (techadivas.com)
1. In Google Cloud Console, go to **App Engine > Settings > Custom Domains**.
2. Add your domain (e.g., `techadivas.com`).
3. Follow the instructions to verify ownership (add TXT or CNAME record in Squarespace DNS).
4. Update DNS A and CNAME records in Squarespace:
   - **A Records** (for root domain):
     - 216.239.32.21
     - 216.239.34.21
     - 216.239.36.21
     - 216.239.38.21
   - **CNAME Record** (for www):
     - Host: www
     - Points to: ghs.googlehosted.com
5. Wait for DNS propagation (can take up to 48 hours).
6. Google Cloud will automatically provision SSL certificates.

---

## 6. Dark Mode Support
- Dark mode is enabled using the `prefers-color-scheme` CSS media query.
- No toggle button is needed; the site adapts to the user's system preference.
- To customize, edit `src/App.css` and `src/index.css`.

---

## 7. Redeploying After Changes
1. Make your changes in the React app.
2. Run `npm run build`.
3. Copy `app.yaml` to `build/` if changed.
4. Deploy from the `build/` directory:
   ```sh
   cd build
   gcloud app deploy
   ```

---

## 8. Troubleshooting
- **Not Found error:** Ensure `index.html` and `static/` are in `build/`, and `app.yaml` is correct.
- **DNS not working:** Double-check DNS records in Squarespace and wait for propagation.
- **SSL not active:** Wait up to 48 hours after DNS is correct.
- **Build errors:** Run `npm install` to ensure dependencies are installed.

---

## 9. Useful Commands
- View logs:
  ```sh
  gcloud app logs tail -s default
  ```
- Open app in browser:
  ```sh
  gcloud app browse
  ```

---

## 10. References
- [Google App Engine Docs](https://cloud.google.com/appengine/docs/standard/nodejs)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [Squarespace DNS Help](https://support.squarespace.com/hc/en-us/articles/205812378) 