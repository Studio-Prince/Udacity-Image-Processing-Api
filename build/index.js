import express from 'express';
import path from 'path';
import routes from './routes/indexRoute';
const app = express();
const PORT = 3000;
app.use('/api', routes);
app.use('/public', express.static(path.join(__dirname, '../public')));
app.listen(PORT, () => {
    console.log(`listening to the localhost:${PORT}`);
});
export default app;
