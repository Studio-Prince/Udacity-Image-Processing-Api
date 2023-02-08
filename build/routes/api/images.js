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
import path from 'path';
import { imagesResizing, imagePathResizing } from '../../utilities/imageResize';
import { promises as fsPromises } from 'fs';
import fs from 'fs';
const images = express.Router();
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filename = req.query.filename;
        const height = parseInt(req.query.height);
        const width = parseInt(req.query.width);
        const outputPath = imagePathResizing(filename, height, width);
        if (!fs.existsSync(outputPath)) {
            const resizedImage = yield imagesResizing(filename, height, width);
            yield fsPromises.writeFile(outputPath, resizedImage);
        }
        res.sendFile(path.resolve(outputPath));
    }
    catch (err) {
        if (typeof err === 'object' && err !== null)
            res.render('errors', { message: err.message });
    }
}));
export default images;
