const fs = require('fs');
const { join } = require('path')

module.exports = (req, res) => {

    let html_head = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>🤖 LocalHoast</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>`;
    
    let html_body = `
        <script src="index.js"></script>
        </body>
    </html>`

    const { name = 'demo.html' } = req.query;

    fs.readFile(join(__dirname, '_files', `${name}.html`), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        res.status(200).send(`${html_head} ${data} ${html_body}`);
    });

}