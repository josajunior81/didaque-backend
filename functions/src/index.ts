import * as functions from 'firebase-functions';
import * as request from 'request';
import * as express from 'express';
import * as cors from 'cors';

const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.get('/volumes', async (req, res) => {
    const key = await functions.config().dbp.key;
    request.get(`https://dbt.io/library/volume?key=${key}&language_code=${req.query.lang}&v=2`, { json: true }, (err, resp, body) => {
        if (err) {
            console.log("Error: " + err.message);
        }
        res.send(body);
    });
});

export const webApi = functions.https.onRequest(app);


export const getLanguages = functions.https.onRequest(async (req, res) => {
    const key = await functions.config().dbp.key;
    request.get(`https://dbt.io/library/language?key=${key}`, { json: true }, (err, resp, body) => {
        if (err) {
            console.log("Error: " + err.message);
        }
        res.send(body);
    });
});

export const getBook = functions.https.onRequest(async (req, res) => {
    const key = await functions.config().dbp.key;
    request.get(`https://dbt.io/library/volume?key=${key}&language_code=${req.query.lang}&v=2`, { json: true }, (err, resp, body) => {
        if (err) {
            console.log("Error: " + err.message);
        }
        res.send(body);
    });
});
