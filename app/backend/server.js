import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import corsConfig from './config/cors.js';
const app = express();
const port = 3000;

app.use(cors(corsConfig))

app.post("/add", (req, res) => {
    console.log("heyyo")
})

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});