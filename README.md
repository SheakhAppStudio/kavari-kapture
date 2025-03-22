# KAVARI Kapture Website

A modern, SEO-optimized website for KAVARI Kapture, a premier social media marketing agency specializing in the catering industry.

## Tech Stack

- **Next.js** - React framework with excellent SEO capabilities
- **TypeScript** - For type safety and better developer experience
- **Tailwind CSS** - For responsive, utility-first styling
- **Framer Motion** - For smooth animations and transitions
- **React Icons** - For high-quality icons
- **Next SEO** - For enhanced SEO optimization

## Features

- Responsive design optimized for all devices
- SEO-friendly structure and meta tags
- Modern UI with smooth animations
- Mobile-first approach
- Performance-optimized components
- Accessible UI elements

## Portfolio Section

The portfolio section showcases selected works and projects. The current implementation uses placeholder content that you can replace with your actual portfolio items.

### Adding Real Images to Your Portfolio

To add your real images from Google Drive:

1. Download the images you want to showcase from your Google Drive.
2. Rename the images to match the format used in the portfolio:
   - For portfolio images: `portfolio-1.jpg`, `portfolio-2.jpg`, etc. (up to `portfolio-12.jpg`)
   - For Instagram feed: `instagram-1.jpg`, `instagram-2.jpg`, etc. (up to `instagram-6.jpg`)

3. Replace the placeholder files in these directories:
   - Portfolio images: `/public/portfolio/`
   - Instagram images: `/public/instagram/`

For more detailed instructions, please see the [IMAGE_INSTRUCTIONS.md](./IMAGE_INSTRUCTIONS.md) file.

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/kavari-kapture-website.git
cd kavari-kapture-website
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src` - Source code
  - `/app` - Next.js app pages
  - `/components` - Reusable UI components
    - `/layout` - Layout components (header, footer)
    - `/sections` - Page section components
    - `/ui` - Smaller UI components
  - `/assets` - Static assets
- `/public` - Public static files

## Deployment

This website is configured for deployment to GitHub Pages.

### Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Push this code to the repository:

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/kavari-kapture-website.git
git push -u origin main
```

3. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set the "Source" to "GitHub Actions"

4. The GitHub Actions workflow will automatically build and deploy the site when you push to the main branch.

### Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Make sure to comment out the `basePath` and `assetPrefix` in `next.config.js` when running locally.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or inquiries about this website, please contact:

Email: info@kavarikapture.com
Phone: (212) 555-1234

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
