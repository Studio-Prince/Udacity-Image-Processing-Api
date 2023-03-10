import express from 'express';
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import path from 'path';
import { imagesResizing, imagePathResizing } from '../utilities/imageResize';
import getAvailableImageNames from './imagesPath';
const routes = express.Router();

interface ImageQuery {
  filename?: string;
  width?: string;
  height?: string;
}

const validate = async (query: ImageQuery): Promise<null | string> => {
  if (!query.filename) {
    const availableImageNames: string = (await getAvailableImageNames()).join(
      ', '
    );
    return `Please pass a valid filename in the 'filename' query segment. Available filenames are: ${availableImageNames}.`;
  }

  if (!query.width && !query.height) {
    return null;
  }

  const width: number = parseInt(query.width || '');
  if (Number.isNaN(width) || width < 1) {
    return "Please provide a positive numerical value for the 'width' query segment.";
  }

  const height: number = parseInt(query.height || '');
  if (Number.isNaN(height) || height < 1) {
    return "Please provide a positive numerical value for the 'height' query segment.";
  }

  return null;
};

routes.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const filename = req.query.filename as unknown as string;
    const height = parseInt(req.query.height as unknown as string);
    const width = parseInt(req.query.width as unknown as string);
    const outputPath: Promise<string> = imagePathResizing(
      filename,
      height,
      width
    );

    const validationMessage: null | string = await validate(req.query);

    if (validationMessage) {
      res.send(validationMessage);
      return;
    }

    if (!fs.existsSync(outputPath as unknown as string)) {
      const resizedImage = await imagesResizing(filename, height, width);
      await fsPromises.writeFile(outputPath as unknown as string, resizedImage);
    }
    if (outputPath) {
      res.sendFile(path.resolve(outputPath as unknown as string));
    } else {
      res.send('This should not have happened!');
    }
  } catch (err) {
    if (typeof err === 'object' && err !== null)
      res.render('errors', { message: err.message });
  }
});
routes.use('/images', routes);

export default routes;
