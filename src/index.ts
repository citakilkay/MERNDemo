import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import 'dotenv/config.js';
const app = express();

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI!).then(() => {
    console.log(`listening on port ${port}`);
    app.listen(port);
  });
app.get('/', (req : Request, res: Response) => {
    res.send("hello world!");
});