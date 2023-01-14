import express, { Request, Response } from 'express';
import 'dotenv/config.js';
import { connectDB } from './config/db';
import { routerCompany } from './routes/companyRoutes';
import { routerUser } from './routes/userRoutes';

const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/companies', routerCompany);
app.use('/api/users', routerUser);

app.get('/', (req: Request, res: Response) => {
    res.send("hello world!");
});

app.get('/api', (req, res) => {
    res.send("ilkaysss");
});

app.listen(port, () => console.log(`Server started on port ${port}`));