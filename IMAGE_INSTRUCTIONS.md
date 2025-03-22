# Portfolio and Instagram Image Instructions

## Adding Real Images to Your Portfolio

The website is currently set up with placeholder image files. To add your real images from Google Drive:

1. Download the images you want to showcase from your Google Drive.
2. Rename the images to match the format used in the portfolio:
   - For portfolio images: `portfolio-1.jpg`, `portfolio-2.jpg`, etc. (up to `portfolio-12.jpg`)
   - For Instagram feed: `instagram-1.jpg`, `instagram-2.jpg`, etc. (up to `instagram-6.jpg`)

3. Replace the placeholder files in these directories:
   - Portfolio images: `/public/portfolio/`
   - Instagram images: `/public/instagram/`

## Image Optimization Tips

For best performance:

1. **Size**: 
   - Portfolio images: Recommended size is 800x800px or 1000x1000px (square)
   - Instagram images: Recommended size is 600x600px (square)

2. **Format**: JPG or WebP for photos (WebP offers better compression)

3. **Compression**: Compress your images before uploading to improve site performance. You can use tools like:
   - [TinyPNG](https://tinypng.com/) 
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/) (Mac app)

## Customizing Portfolio Items

If you want to change the details of portfolio items (titles, descriptions, categories):

1. Open `/src/hooks/usePortfolioData.ts`
2. Edit the `portfolioData` array to update titles, descriptions, or categories
3. Make sure the `imageUrl` properties match your actual image filenames

## Adding More Portfolio Items

To add more than 12 portfolio items:

1. Add more image files in the `/public/portfolio/` directory (e.g., `portfolio-13.jpg`)
2. Open `/src/hooks/usePortfolioData.ts`
3. Add additional items to the `portfolioData` array, following the existing format

## Adding More Instagram Posts

To add more than 6 Instagram posts:

1. Add more image files in the `/public/instagram/` directory (e.g., `instagram-7.jpg`)
2. Open `/src/components/portfolio/InstagramFeed.tsx`
3. Add additional items to the `instagramPosts` array, following the existing format 