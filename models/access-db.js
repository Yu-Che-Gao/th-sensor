const thDbs = require('./th-dbs.js');
function insertTH(req, res) {
    let data = new thDbs({
        temp: req.query.temp,
        humi: req.query.humi,
    });

    data.save().catch((err) => { console.log(err) });
}

exports.insertTH = insertTH;