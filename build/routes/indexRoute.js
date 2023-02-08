var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import path from 'path';
import { imagesResizing, imagePathResizing } from '../utilities/imageResize';
import getAvailableImageNames from './imagesPath';
const routes = express.Router();
const validate = (query) => __awaiter(void 0, void 0, void 0, function* () {
    if (!query.filename) {
        const availableImageNames = (yield getAvailableImageNames()).join(', ');
        return `Please pass a valid filename in the 'filename' query segment. Available filenames are: ${availableImageNames}.`;
    }
    if (!query.width && !query.height) {
        return null;
    }
    const width = parseInt(query.width || '');
    if (Number.isNaN(width) || width < 1) {
        return "Please provide a positive numerical value for the 'width' query segment.";
    }
    const height = parseInt(query.height || '');
    if (Number.isNaN(height) || height < 1) {
        return "Please provide a positive numerical value for the 'height' query segment.";
    }
    return null;
});
routes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filename = req.query.filename;
        const height = parseInt(req.query.height);
        const width = parseInt(req.query.width);
        const outputPath = imagePathResizing(filename, height, width);
        const validationMessage = yield validate(req.query);
        if (validationMessage) {
            res.send(validationMessage);
            return;
        }
        if (!fs.existsSync(outputPath)) {
            const resizedImage = yield imagesResizing(filename, height, width);
            yield fsPromises.writeFile(outputPath, resizedImage);
        }
        if (outputPath) {
            res.sendFile(path.resolve(outputPath));
        }
        else {
            res.send('This should not have happened!');
        }
    }
    catch (err) {
        if (typeof err === 'object' && err !== null)
            res.render('errors', { message: err.message });
    }
}));
routes.use('/images', routes);
export default routes;
