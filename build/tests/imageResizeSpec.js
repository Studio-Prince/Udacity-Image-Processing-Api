var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { imagesResizing } from '../utilities/imageResize';
describe('Testing image processing API', () => {
    it('Resolves successfully when provided the right filename, height and width parameters', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync(imagesResizing('santamonica', 400, 200)).toBeResolved();
    }));
});
