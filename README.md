# Syd Squid Photography

A clean, modern photography portfolio website with a Pinterest-style masonry gallery layout.

## Features

- Responsive design that works on all devices
- Pinterest-style masonry gallery layout
- Lightbox for viewing photos in full size
- Multiple pages: Home, Gallery, About, Contact
- Contact form (using Formspree)
- Clean and minimal aesthetic

## Getting Started

### 1. Replace Placeholder Images

The `images/` folder currently contains placeholder images. Replace these with your actual photos:

**Required images:**
- `placeholder-1.jpg` through `placeholder-9.jpg` (gallery images)
- `profile-placeholder.jpg` (your profile photo for the About page)

**Image recommendations:**
- Format: JPG or PNG
- Resolution: 1920px on the longest side
- File size: Keep under 500KB per image for faster loading

### 2. Update Content

**About Page** (`about.html`):
- Replace the placeholder text with your actual bio
- Update [X] years with your actual experience

**Contact Form** (`contact.html`):
- Sign up at [Formspree](https://formspree.io)
- Create a new form and get your Form ID
- In `contact.html`, replace `YOUR_FORM_ID` with your actual Formspree Form ID on line 24:
  ```html
  <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```

### 3. Deploy to GitHub Pages

#### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `sydsquidphotography` (or any name you prefer)
4. Make it public
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

#### Step 2: Push Your Code to GitHub

Run these commands in your project directory:

```bash
git add .
git commit -m "Initial commit: Photography portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sydsquidphotography.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

#### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" in the top menu
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for the site to deploy
7. Your site will be available at: `https://YOUR_USERNAME.github.io/sydsquidphotography/`

### 4. Connect Your Custom Domain (sydsquidphotography.com)

#### Step 1: Configure DNS Settings

Log in to your domain registrar (where you bought sydsquidphotography.com) and add these DNS records:

**For apex domain (sydsquidphotography.com):**
Add these A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For www subdomain:**
Add a CNAME record:
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

#### Step 2: Configure GitHub Pages Custom Domain

1. In your GitHub repository, go to Settings > Pages
2. Under "Custom domain", enter: `sydsquidphotography.com`
3. Click "Save"
4. Wait for the DNS check to complete (this can take up to 24 hours, but usually takes 15-30 minutes)
5. Once verified, check "Enforce HTTPS"

#### Step 3: Create CNAME File

Create a file named `CNAME` (no extension) in your project root with this content:
```
sydsquidphotography.com
```

Then commit and push:
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

## Adding More Photos to Gallery

1. Add your image file to the `images/` folder
2. Open `gallery.html`
3. Add a new masonry item inside the `<div class="masonry-grid">`:

```html
<div class="masonry-item">
    <img src="images/your-image-name.jpg" alt="Description of your photo">
</div>
```

4. Commit and push your changes:
```bash
git add .
git commit -m "Add new gallery photos"
git push
```

## Customization

### Changing Colors

Edit `styles.css` to change colors:
- Background colors
- Navigation colors
- Button colors
- Text colors

### Changing Fonts

Add a Google Fonts link in the `<head>` of your HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font+Name&display=swap" rel="stylesheet">
```

Then update the font-family in `styles.css`.

## File Structure

```
sydsquidphotography/
├── index.html          # Home page
├── gallery.html        # Gallery page with masonry layout
├── about.html          # About page
├── contact.html        # Contact page with form
├── styles.css          # All styling
├── script.js           # JavaScript for lightbox and form
├── images/             # Your photos go here
│   ├── README.md
│   └── placeholder-*.jpg
├── .nojekyll           # Tells GitHub Pages not to use Jekyll
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Need Help?

If you run into any issues:
1. Check that all your image files are named correctly
2. Make sure your Formspree Form ID is correct in `contact.html`
3. Verify your DNS settings with your domain registrar
4. Check the GitHub Pages deployment status in your repository settings

## License

This is your personal portfolio website. All photos and content are your property.
