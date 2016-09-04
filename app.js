const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const mongodbUri = process.env.MONGODB_URI;

app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})
mongoose.connect(mongodbUri);
app.use(require('./controllers'));
app.listen(port, () => { console.log('now listening on port ' + port); })