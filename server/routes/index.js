let express = require('express');
let router = express.Router();
const fs = require('fs');

router.get('/', function (req, res) {
    fs.readFile('/Users/mac/hw2/server/serverContents', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.send({ data })
     })
});

module.exports = router;