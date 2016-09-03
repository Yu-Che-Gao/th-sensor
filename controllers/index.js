const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('you cannot access this page.');
})

module.exports = router;