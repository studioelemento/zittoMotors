import sharp from 'sharp';
import fs from 'fs';

const inputPath = 'public/Home Page/Home Hero Section (2).png';
const outputPath = 'public/Home Page/hero-bg.webp';

sharp(inputPath)
  .webp({ quality: 80 }) // Compress to WebP with 80% quality
  .toFile(outputPath)
  .then(info => {
    console.log('Successfully compressed image:', info);
  })
  .catch(err => {
    console.error('Error compressing image:', err);
  });
