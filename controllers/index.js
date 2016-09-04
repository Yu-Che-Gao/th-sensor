const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const pug = require('pug');
const accessDB = require('../models/access-db.js');

router.get('/', (req, res) => { res.send('you cannot access this page.'); })
router.get('/dashboard', (req, res) => { res.render('index', { title: 'Hey', content: 'Hello there!' }) });
router.get('/insertTH', accessDB.insertTH);
router.get('/selectTH', accessDB.selectTH);

module.exports = router;