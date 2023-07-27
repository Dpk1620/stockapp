// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Import moment for Date Format
const moment = require('moment');
app.post('/api/fetchStockData', async (req, res) => {
    // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION

    // I have used Specific date time also I implemented to change date but this api not provide that much data as per subcription of polygonApi
    // from - 2023-01-09, to - 2023-01-09
    // 2023-01-09,2023-01-09
    const { multiplier, from, stocksTicker, to, timespan, sort, limit } = req.body
    let fd = moment(from).format("YYYY-DD-MM");
    let td = moment(to).format("YYYY-DD-MM");
    let url
    // condition Check For Date Format & dynamic api manipulation
    if (td && fd) {
        url = `https://api.polygon.io/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/${timespan}/${fd}/${td}?adjusted=true&sort=${sort}&limit=${limit}&apiKey=QluB7fPGWFLC5jo0htef1sbNE7qvmakq`
    }
    await axios.get(url).then(response => {
        // The data send in response doesn't have extra column that effects api speed so i didn't modifie the response
        res.send(response.data).status(200);
    }).catch(err => {
        // handle err to send response 500 to match internal Server Err
        res.send(err.massage).status(500);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));