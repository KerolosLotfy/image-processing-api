import express from 'express';
import path from 'path';
import { router } from './routers/API';
import { uploadImages } from './routers/uploadimage';

const port = 3030;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'website')));
app.set('view engine', 'ejs');
app.set('views', 'website');

app.post('/api', uploadImages);

app.get('/api', router);

app.get('/', (_req, res) => {
    res.render('index', {
        src: false,
        error: false,
    });
});

app.use('/', (_req, res) => {
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});

export { app };
