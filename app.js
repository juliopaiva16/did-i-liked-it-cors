const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET'],
}));

// Make this server as a proxy server
app.get('/search/album', (req, res) => {
    axios.get('https://api.deezer.com/search/album/?q=' + req.query.q + '&limit=5')
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch(error => {
        console.log(error);
        res.status(500).send(error);
    });
});

app.listen(3030, () => {
    console.log('listening on port 3030')
})