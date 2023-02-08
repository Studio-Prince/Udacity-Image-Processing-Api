import { promises as fs } from 'fs';
import path from 'path';

const imagePath: string = path.resolve(__dirname, '../images/full/');

const getImages = async (): Promise<string[]> => {
  try {
    return (await fs.readdir(imagePath)).map(
      (filename: string): string => filename.split('.')[0]
    );
  } catch {
    return [];
  }
};

export default getImages;
