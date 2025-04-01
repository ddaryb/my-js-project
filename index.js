const express = require('express');
const app = express();
const _ = require('lodash');
const moment = require('moment');

app.get('/', (req, res) => {
    res.send(`Hello, World! Time: ${moment().format('YYYY-MM-DD HH:mm:ss')}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
