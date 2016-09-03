const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;


app.use(require('./controllers'));
app.listen(port, () => { console.log('listening on port ' + port); })