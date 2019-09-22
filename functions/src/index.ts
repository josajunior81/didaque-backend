import * as functions from 'firebase-functions';
import * as request from 'request';


export const getVolumes = functions.https.onRequest( async (req, res) => {
    const key = await functions.config().dbp.key;
    console.log("kkkkkkkkkkkkkkkkkkkkkkkk -> ", functions.config());
    request.get(`https://dbt.io/library/volume?key=${key}&language_code=${req.query.lang}&v=2`, {json: true}, (err, resp, body) => {
        if (err) {
            console.log("Error: " + err.message);
        }
        res.send(body);
    });
});

export const getLanguages = functions.https.onRequest( async (req, res) => {
    request.get('https://dbt.io/library/language', {json: true}, (err, resp, body) => {
        if (err) {
            console.log("Error: " + err.message);
        }
        res.send(body);
    });
});

export const getBook = functions.https.onRequest( async (req, res) => {
    const key = await functions.config().dbp.key;
    request.get(`https://dbt.io/library/volume?key=${key}&language_code=${req.query.lang}&v=2`, {json: true}, (err, resp, body) => {
        if (err) {
            console.log("Error: " + err.message);
        }
        res.send(body);
    });
});
