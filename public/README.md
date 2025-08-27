# Public Folder

This folder contains static assets that are served directly by Next.js.

## Structure

- `/images/` - Store your website images, logos, and graphics
- `/icons/` - Store favicon and app icons
- `/favicon/` - Store favicon files
- `robots.txt` - SEO and web crawler guidance
- `site.webmanifest` - PWA manifest file

## Usage

- Place images in `/images/` and reference them as `/images/filename.jpg`
- Place icons in `/icons/` and reference them as `/icons/icon.png`
- The favicon.ico should be in the root of public folder or in `/favicon/`

## File Types Supported

- Images: .jpg, .jpeg, .png, .gif, .webp, .svg
- Icons: .ico, .png, .svg
- Documents: .pdf, .txt
- Other: .json, .xml

## Next.js Integration

Files in this folder are automatically served at the root URL:
- `public/logo.png` → accessible at `/logo.png`
- `public/images/hero.jpg` → accessible at `/images/hero.jpg`
