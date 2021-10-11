const fs = require('fs');
const { join } = require('path')

module.exports = (req, res) => {

    const { name = 'demo.html' } = req.query;

    fs.readFile(join(__dirname, '_files', name), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        res.status(200).send(`${data}!`);
    });

}