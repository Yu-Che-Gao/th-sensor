const thDbs = require('./th-dbs.js');
function insertTH(req, res) {
    let data = new thDbs({
        temp: req.body.temp,
        humi: req.body.humi,
    });

    data.save().then((result) => {
        res.send('success')
    }).catch((err) => {
        res.send(err)
    });
}

function selectTH(req, res) {
    if (typeof (req.body.lowerTime) == 'undefined' || typeof (req.body.lowerTime) == 'undefined') {
        thDbs.find({}).exec().then((result) => {
            res.send(JSON.stringify(result));
        }).catch((err) => {
            res.send('error: ' + err);
        })
    } else {
        thDbs.find({ insertTime: { "$in": [req.body.lowerTime, req.body.upperTime] } }).exec().then((result) => {
            res.send(JSON.stringify(result));
        }).catch((err) => {
            res.send('error: ' + err);
        })
    }
}

exports.insertTH = insertTH;
exports.selectTH = selectTH;