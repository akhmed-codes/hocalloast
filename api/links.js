const fs = require('fs');
const { join } = require('path')

module.exports = (req, res) => {

    let fileArr = [];
    fs.readdir(join(__dirname, '_files'), (err, files) => {
        files.forEach(file => {
        //   console.log(file);
          fileArr.push(file)
        });
        res.json({
            [files]: [fileArr]
        });
      });
}

// const testFolder = './_files/';
// const fs = require('fs');

// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });