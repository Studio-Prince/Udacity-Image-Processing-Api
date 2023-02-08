import sharp from 'sharp';
import path from 'path';

export const imagesResizing = async (
  filename: string,
  height: number,
  width: number
): Promise<Buffer> => {
  return sharp(path.resolve(`src/images/full/${filename}.jpg`))
    .resize({
      height: height,
      width: width,
    })
    .toBuffer();
};

export const imagePathResizing = async (
  filename: string,
  height: number,
  width: number
): Promise<string> => {
  return `src/images/thumbnails/${filename}${height}x${width}.jpg`;
};
