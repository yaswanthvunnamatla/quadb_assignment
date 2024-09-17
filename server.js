const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const cryptoAPI = 'https://api.example.com/crypto-prices';//sample api

app.use(express.static('public'));

app.get('/api/crypto-prices', async (req, res) => {
    try {
        const response = await axios.get(cryptoAPI);
        const cryptoData = response.data;
        res.json(cryptoData);
    } catch (error) {
        console.error('Error fetching crypto data:', error);
        res.status(500).json({ error: 'Unable to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
