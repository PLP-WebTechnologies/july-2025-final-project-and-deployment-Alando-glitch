# My Website Project

A simple **responsive multipage website** built with:

- **HTML5** for semantic structure
- **CSS3** for styling & responsiveness
- **JavaScript** for interactivity (image slider + form validation)

## Pages
- **Home (`index.html`)**: Hero section and image slider.
- **About (`about.html`)**: Project overview with a responsive grid.
- **Contact (`contact.html`)**: Accessible contact form with client-side validation.

## How to Run Locally
1. Download and unzip the project.
2. Open `index.html` in your browser (or use VS Code Live Server for a better experience).

## Deploy Options
### GitHub Pages
1. Create a new repo and push these files.
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose `Deploy from a branch`, then pick `main` and `/root` folder.
4. Save. Your site will be live at the URL shown by GitHub.

### Netlify
1. Go to Netlify dashboard → **Add new site** → **Deploy manually**.
2. Drag-and-drop the **entire project folder**.
3. Netlify gives you a live URL you can customize.

### Vercel
1. Go to Vercel → **New Project** → Import your GitHub repo.
2. Click **Deploy** (no special build settings needed for static sites).
3. Share the live URL Vercel provides.

## Live URL
Add your live URL here once deployed: `https://your-live-url.example`

## Folder Structure
```
my-website/
├── index.html
├── about.html
├── contact.html
├── style.css
├── script.js
├── images/
│   ├── slide1.jpg
│   ├── slide2.jpg
│   └── slide3.jpg
└── README.md
```

## Notes
- The site is responsive and includes a mobile hamburger menu.
- The slider auto-plays and can be navigated with Previous/Next controls.
- The contact form includes basic client-side validation.
