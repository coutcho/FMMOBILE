import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Play & Earn Free Skins | GameRewards",
  description = "Complete fun challenges in your favorite games to earn exclusive weapon skins and rare collectibles for free.",
  image = "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph Tags for social sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Other important meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#312e81" />
    </Helmet>
  );
};

export default SEO;