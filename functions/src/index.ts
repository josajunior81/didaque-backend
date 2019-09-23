import * as functions from 'firebase-functions';
import * as request from 'request';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from "body-parser";

const app = express();
const main = express();

// Automatically allow cross-origin requests
main.use(cors({ origin: true }));
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

export const webApi = functions.https.onRequest(main);

app.get('/volumes/:lang', async (req, res) => {
    const key = await functions.config().dbp.key;
    request.get(`https://dbt.io/library/volume?key=${key}&language_code=${req.params.lang}&v=2`, { json: true }, (err, _, body) => {
        if (err) {
            console.log("Error: " + err.message);
        }
        res.send(body);
    });
});

app.get('/languages', async (req, res) => {
    const key = await functions.config().dbp.key;
    request.get(`https://dbt.io/library/language?key=${key}&v=2`, { json: true }, (err, _, body) => {
        if (err) {
            console.log("Error: " + err.message);
        }
        res.send(body);
    });
});

app.get('/books/:lang/:dam', async (req, res) => {
    const key = await functions.config().dbp.key;
    request.get(`https://dbt.io/library/volume?key=${key}&language_code=${req.params.lang}&v=2`, { json: true }, (err, _, body) => {
        if (err) {
            console.log("Error: " + err.message);
        }
        res.send(body);
    });
});