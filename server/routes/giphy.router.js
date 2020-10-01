const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('this is req.body', req.body);
    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            limit: 10,
            q: 'dancing'
        } 
    }).then(response => {
        console.log('this is responsedata', response.data);
        res.send(response.data);
    }).catch(error => {
        console.log('we have an error', error);
        res.sendStatus(500);
    });
});

module.exports = router;