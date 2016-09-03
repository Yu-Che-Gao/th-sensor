const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const thDbs = new Schema({
    temp: Number,
    humi: Number,
    insertTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('th-dbs', thDbs);