import express from 'express';
// import path from 'path';
import route from './routes/indexRoute';
const app = express();
const PORT = 3000;
app.use('/api', route);
app.listen(PORT, () => {
    console.log(`listening to the localhost:${PORT}`);
});
export default app;
