import express from 'express';
import path from 'path';
import { imagesResizing, imagePathResizing } from '../../utilities/imageResize';
import { promises as fsPromises } from 'fs';
import fs from 'fs';

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const filename = req.query.filename as unknown as string;
    const height = parseInt(req.query.height as unknown as string);
    const width = parseInt(req.query.width as unknown as string);
    const outputPath: Promise<string> = imagePathResizing(
      filename,
      height,
      width
    );

    if (!fs.existsSync(outputPath as unknown as string)) {
      const resizedImage = await imagesResizing(filename, height, width);
      await fsPromises.writeFile(outputPath as unknown as string, resizedImage);
    }
    res.sendFile(path.resolve(outputPath as unknown as string));
  } catch (err) {
    if (typeof err === 'object' && err !== null)
      res.render('errors', { message: err.message });
  }
});

export default images;
