const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const accessDB = require('../models/access-db.js');

router.get('/', (req, res) => { res.send('you cannot access this page.'); })
router.get('/dashboard', (req, res) => { res.render('index', { title: 'TH-Sensor'}) });
router.post('/insertTH', accessDB.insertTH);
router.post('/selectTH', accessDB.selectTH);

module.exports = router;