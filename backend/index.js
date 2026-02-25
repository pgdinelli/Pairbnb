import dotenv from 'dotenv';
import express from 'express';
import router from './routes.js';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor executando na porta: http://localhost:${PORT}`);
});