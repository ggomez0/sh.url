import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import ShortUrlModel from './shorturl'; 

require('dotenv').config();

const app = express();

app.set('view engine', 'tsx');
app.engine('tsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: false }));
mongoose.connect(process.env.MONGODB_URI as string);

app.get('/', async (req: Request, res: Response) => {
    const shortUrls = await ShortUrlModel.find();
    res.render('index', { shortUrls: shortUrls });
});

app.post('/shortUrls', async (req: Request, res: Response) => {
    await ShortUrlModel.create({ full: req.body.fullUrl });
    res.redirect('/');
});

app.get('/:shortUrl', async (req: Request, res: Response) => {
    const shortUrl = await ShortUrlModel.findOne({ short: req.params.shortUrl });
    if (shortUrl == null) return res.sendStatus(404);
    shortUrl.save();
    res.redirect(shortUrl.full);
});

app.listen(process.env.PORT || 3000);
