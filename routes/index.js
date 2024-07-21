const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); // Render the index.ejs file

});

module.exports = router;
