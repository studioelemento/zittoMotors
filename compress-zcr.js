import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directory = 'public/ZCR Page';

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.png')) {
      const inputPath = path.join(directory, file);
      const outputPath = path.join(directory, file.replace('.png', '.webp'));

      sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(info => {
          console.log(`Successfully compressed ${file}:`, info);
        })
        .catch(err => {
          console.error(`Error compressing ${file}:`, err);
        });
    }
  });
});
