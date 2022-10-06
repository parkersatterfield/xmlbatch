const express = require('express');
const cors = require('cors');
const dbOperation = require('./dbFiles/dbOperation');

// const API_PORT = process.env.PORT || 5000;
// const app = express();

// app.use(cors());

dbOperation.getDatabases().then(res => {
    console.log(res.recordset);
});


// app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));