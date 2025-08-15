# Solution Hub — Static Website

A modern, colorful site to share step‑by‑step solutions. Built with vanilla HTML/CSS/JS.  
Host it for **free** on **GitHub Pages** in minutes.

## 🚀 Quick Start

1. **Download** this folder as a ZIP and extract it.
2. Create a **GitHub account** (if you don’t have one).
3. Create a **new repository** named anything you like (e.g., `solution-hub`).
4. Upload all files from this folder to the repository root.
5. Go to **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main** (or `master`) / root
6. Wait a minute, your site will be live at:  
   `https://<your-username>.github.io/<repository-name>/`

## 🛠 Customize

- **Site name:** Edit the text “Solution Hub” in `index.html`, `solutions.html`, and `contact.html`.
- **Email button:** In `assets/js/main.js`, replace `youremail@example.com` with your address.
- **Add solutions:** Edit the `SOLUTIONS` array in `assets/js/main.js`. Add your entries with:
  ```js
  {
    id: 'unique-id',
    title: 'Your Solution Title',
    excerpt: 'One-line summary.',
    category: 'Tech|Productivity|Health|Finance|Life',
    tags: ['tag1', 'tag2'],
    popularity: 0-999,
    updated: 'YYYY-MM-DD'
  }
  ```
- **Colors & styles:** Tweak CSS variables at the top of `assets/css/style.css`.

## 📁 Files

- `index.html` — Home page with hero + popular solutions
- `solutions.html` — Searchable, filterable list of all solutions
- `contact.html` — Contact form (demo) + email button
- `assets/css/style.css` — Styles (responsive, colorful, accessible)
- `assets/js/main.js` — Interactivity + sample data
- `assets/img/` — Add your images here (a `favicon.png` placeholder is recommended)

## ✉️ Contact form on GitHub Pages

GitHub Pages has no backend. Use a form service like:
- **Formspree**, **Getform**, or **Netlify Forms** (if hosting on Netlify).  
For Formspree, change the form action to your Formspree endpoint and set method to POST.

## 📦 Local preview

Open `index.html` directly in your browser, or run a simple local server:
```bash
python3 -m http.server 3000
```
Then visit http://localhost:3000

---

Happy building!
