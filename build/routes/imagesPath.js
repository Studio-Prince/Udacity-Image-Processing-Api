var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { promises as fs } from 'fs';
import path from 'path';
const imagePath = path.resolve(__dirname, '../images/full/');
const getImages = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return (yield fs.readdir(imagePath)).map((filename) => filename.split('.')[0]);
    }
    catch (_a) {
        return [];
    }
});
export default getImages;
