import express, {Request, Response } from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/main.router';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//Build in express needed middlewares
//JSON
app.use(express.json());
//Format endpoints
app.use('/api', mainRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('This API is working, at least at response level');
})

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`)
}
)