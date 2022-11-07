const fs = require('fs');
const path = require('path');

// console.log('Название файла: ', path.basename(__filename));
// console.log('Название файла: ', path.dirname(__filename));
// console.log(path.join(__dirname, '01-read-file', 'text.txt'));

const name = path.join(__dirname, 'text.txt');

fs.readFile(name, 'utf8', (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data);
});