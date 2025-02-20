const { error } = require('console');
const fs = require('fs');
const path = require('path');
const { exit, stdin } = require('process');

const fileCreate = path.join(__dirname, 'text.txt');
const textWrite = fs.createWriteStream(fileCreate);

function exitApp() {
  console.log('Thank you, bye!');
  exit();
}

fs.writeFile(fileCreate, '', err => {
  if (err) {
    throw error;
  }

  console.log('Please write something!');
});

stdin.on('data', data => {
  if (data.toString().trim() == 'exit') {
    exitApp();
  }
  textWrite.write(data);
});

process.on('SIGINT', exitApp);