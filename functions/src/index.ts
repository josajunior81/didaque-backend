import * as functions from 'firebase-functions';
import * as request from 'request';

export const getVolumes = functions.https.onRequest((req, res) => {
    request.get(`https://dbt.io/library/volume?key=dabe48f0225e59e68ed95cccd4762a88&language_code=${req.query.lang}&v=2`, {json: true}, (err, resp, body) => {
        if (err) {
            console.log("Error: " + err.message);
        }
        res.send(body);
    });
});

export const getLanguages = functions.https.onRequest((req, res) => {
    request.get('https://dbt.io/library/language', {json: true}, (err, resp, body) => {
        if (err) {
            console.log("Error: " + err.message);
        }
        res.send(body);
    });
});

export const getBook = functions.https.onRequest((req, res) => {
    request.get(`https://dbt.io/library/volume?key=dabe48f0225e59e68ed95cccd4762a88&language_code=${req.query.lang}&v=2`, {json: true}, (err, resp, body) => {
        if (err) {
            console.log("Error: " + err.message);
        }
        res.send(body);
    });
});
