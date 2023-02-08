import { imagesResizing } from '../utilities/imageResize';

describe('Testing image processing API', () => {
  it('Resolves successfully when provided the right filename, height and width parameters', async () => {
    await expectAsync(imagesResizing('santamonica', 400, 200)).toBeResolved();
  });
});
