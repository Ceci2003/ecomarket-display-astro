# Setup Guide

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Admin Secret Key**
   Create a `.env` file in the root directory:
   ```
   ADMIN_SECRET_KEY=your-secure-secret-key-here
   ```
   **Important**: Change this to a strong, random string in production!

3. **Add Your Content**
   - Edit `data/settings.json` with your business information
   - Add products to `data/products.json`
   - Customize colors in `data/colors.json`

4. **Add Images**
   - Place product images in `public/products/`
   - Place gallery images in `public/gallery/`
   - Place brand/logo images in `public/brand/`
   - Update image paths in your JSON files accordingly

## Running the Site

### Development
```bash
npm run dev
```
Visit `http://localhost:4321`

### Production Build
```bash
npm run build
npm run preview
```

## Admin Access

Access the admin editor at:
```
http://localhost:4321/admin-data?key=YOUR_SECRET_KEY
```

Replace `YOUR_SECRET_KEY` with the value from your `.env` file.

## Content Structure

### Settings JSON Structure
```json
{
  "bg": {
    "siteTitle": "Your Site Title (BG)",
    "motto": "Your motto (BG)",
    "contacts": { ... },
    "about": { ... },
    "navigation": { ... },
    "footer": { ... }
  },
  "en": {
    // Same structure in English
  }
}
```

### Products JSON Structure
```json
{
  "products": [
    {
      "id": "001",
      "slug": "product-slug",
      "bg": {
        "name": "Product Name (BG)",
        "shortDescription": "...",
        "longDescription": "...",
        // ... more fields
      },
      "en": {
        // Same structure in English
      },
      "price": 12.50,
      "category": "honey",
      "images": ["/products/image1.jpg"],
      "featured": true
    }
  ]
}
```

## Customization Tips

1. **Colors**: Edit `data/colors.json` - all colors are automatically applied via CSS variables
2. **Categories**: Add new categories in `CategoryBadge.astro` component
3. **Navigation**: Update navigation items in `settings.json`
4. **Pages**: Create new pages following the pattern in `src/pages/`

## Deployment

This template uses Astro's Node adapter. Deploy to:
- Vercel (Node.js)
- Netlify (Node.js)
- Railway
- Your own Node.js server

Make sure to:
1. Set `ADMIN_SECRET_KEY` as an environment variable
2. Run `npm run build`
3. Start the server with `node dist/server/entry.mjs`

