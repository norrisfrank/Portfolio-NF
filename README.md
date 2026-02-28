# 🚀 Norris Frank Meyo - Portfolio
**Live Site:** [https://portfolio-backend-92a8.onrender.com/](https://portfolio-backend-92a8.onrender.com/)

A high-performance "stepped pixel" aesthetic portfolio for a Backend Engineer. Features art galleries, project showcases, and a Node.js backend for commissions and billing.

## 🛠 Features
- **True Backend**: Node.js/Express server ensures your site is dynamic.
- **Dynamic Projects**: Hire Me section with deep-dive technical project cards.
- **Pixel Art Gallery**: Custom lightbox with card-flip animations.
- **Billing System**: Card-only checkout simulation (Mock).

---

## 💻 Local Development

1. **Clone the repository** (after you push it to GitHub):
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start the Server**:
   ```bash
   npm start
   ```
   *Access at: http://localhost:4000*

---

## 🌐 Deployment Guide

### Step 1: Push to GitHub
1. Open terminal in the project folder.
2. Initialize and push (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initialize portfolio with backend"
   # Go to github.com, create a NEW repository called 'Portfolio'
   git remote add origin https://github.com/<your-username>/Portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Render
1. Create a free account at [Render.com](https://render.com).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub account and select the **Portfolio** repository.
4. Use these settings:
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click **Create Web Service**. Render will give you a live URL (e.g., `portfolio-xxxx.onrender.com`).

---

## 📂 Project Structure
- `server.js`: Backend logic & API (Express).
- `public/`: All frontend files (HTML, CSS, JS).
- `public/art/`: Your pixel art assets.
- `package.json`: Node.js dependencies.
