# ecomarket-display-astro

"Local Roots Template" is a modern Astro template for small family producers. It features multilingual support (BG/EN), product pages, JSON-based settings, a hidden admin editor, and full color customization. Ideal for farms, apiaries, and artisan businesses seeking a clean, professional online presence.

## Features

- 🌍 **Multilingual Support**: Bulgarian (default) and English
- 📦 **JSON-based Content**: All content managed through JSON files
- 🎨 **Full Theme Customization**: Colors configurable via `colors.json`
- 🔒 **Hidden Admin Editor**: Secure admin page for editing content
- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **Fast & Modern**: Built with Astro for optimal performance

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── data/
│   ├── settings.json    # Site settings (BG/EN)
│   ├── products.json    # Product catalog (BG/EN)
│   └── colors.json      # Theme colors
├── public/
│   ├── products/        # Product images
│   ├── gallery/         # Gallery images
│   └── brand/           # Brand/logo images
└── src/
    ├── components/      # Reusable components
    ├── layouts/         # Page layouts
    ├── pages/           # Route pages
    └── utils/           # Utility functions
```

## Content Management

### Settings (`data/settings.json`)

Contains site-wide content in both languages:
- Site title and motto
- Contact information
- About section (story, mission, values)
- Navigation labels
- Footer content

### Products (`data/products.json`)

Product catalog with full multilingual support:
- Product details (name, description, price, etc.)
- Images
- Categories
- Featured products

### Colors (`data/colors.json`)

Theme customization:
- Primary and secondary colors
- Accent colors
- Text and background colors
- Dark mode support (optional)

## Multilingual URLs

- **Bulgarian (default)**: `/`, `/products`, `/about`, `/contact`
- **English**: `/en/`, `/en/products`, `/en/about`, `/en/contact`

The language switcher in the header allows easy navigation between languages.

## Admin Page

Access the admin editor at:
```
/admin-data?key=YOUR_SECRET_KEY
```

Set your secret key in `.env`:
```
ADMIN_SECRET_KEY=your-secure-secret-key
```

The admin page allows you to:
- Edit JSON files (settings, products, colors)
- Upload images to different directories
- Validate JSON before saving

**Note**: In production, implement proper server endpoints to save JSON files and handle image uploads.

## Customization

### Changing Colors

Edit `data/colors.json` to customize your theme. All colors are automatically converted to CSS variables and applied throughout the site.

### Adding Products

Add products to `data/products.json` following the existing structure. Each product must have:
- `id`: Unique identifier
- `slug`: URL-friendly identifier
- `bg` and `en`: Language-specific content
- `price`: Product price
- `category`: Product category
- `images`: Array of image paths

### Adding Pages

Create new pages in `src/pages/` following the existing structure. For multilingual pages:
- Create `/page.astro` for Bulgarian
- Create `/en/page.astro` for English

## Deployment

This template uses Astro's Node adapter for server-side rendering. Deploy to any Node.js hosting service:

- Vercel
- Netlify
- Railway
- Your own server

Make sure to:
1. Set `ADMIN_SECRET_KEY` environment variable
2. Build the project: `npm run build`
3. Start the server: `node dist/server/entry.mjs`

## License

MIT

## Support

For issues and questions, please open an issue on the repository.
