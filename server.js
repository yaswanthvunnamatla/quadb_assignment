const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/crypto-prices', (req, res) => {
    const cryptoData = [
        { platform: 'WazirX', lastPrice: 2572612, buySellPrice: '₹25,72,610 / ₹25,72,612', diff: '-3.14%', savings: '₹83,498' },
        { platform: 'Bitbns', lastPrice: 2883906, buySellPrice: '₹28,55,164 / ₹28,82,157', diff: '8.58%', savings: '₹2,27,796' },
        { platform: 'Colodax', lastPrice: 2546035, buySellPrice: '₹25,33,304 / ₹28,51,559', diff: '-4.14%', savings: '₹1,10,074' },
        { platform: 'Zebpay', lastPrice: 2650000, buySellPrice: '₹26,49,999 / ₹26,21,000', diff: '-0.23%', savings: '₹6,110' }
    ];
    res.json(cryptoData);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
