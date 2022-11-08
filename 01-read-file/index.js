const fs = require('fs');
const path = require('path');

// Вариант с fs.readFile
// const name = path.join(__dirname, 'text.txt');
// fs.readFile(name, 'utf8', (error, data) => {
//     if (error) {
//         throw error;
//     }
//     console.log(data);
// });

const nameStream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
let data = '';
nameStream.on('data', chunk => data += chunk);
nameStream.on('end', () => console.log('', data));
nameStream.on('error', error => console.log('Error', error.message));