import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let data = "Initial Data";

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/get-data', (req, res) => {
    res.send({ data })
});

app.post('/update-data', (req, res) => {
    data = "Updated Data";
    res.send({ data })
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`I am running on PORt ${PORT}`);
});