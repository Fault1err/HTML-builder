const path = require('path');
const fs = require('fs');


const newFolder = path.join(__dirname, 'files-copy');
const copiedFolder = path.join(__dirname, 'files');

function copyDir() {
  fs.readdir(copiedFolder, {withFileTypes: true}, (err, items) => {
    items.forEach(item => {
      const newFile = path.join(newFolder, item.name);
      const copiedFile = path.join(copiedFolder, item.name);
      fs.copyFile(copiedFile, newFile, function(err) {
        if (err) throw err;
      });
    });
  });
}

fs.mkdir(newFolder, {recursive: true}, error => {
  if (error) throw error;
  fs.readdir(newFolder, (err, items) => {
    if (err) throw err;
    for (let item of items) {
      fs.unlink(path.join(newFolder, item), err => {
        if (err) throw err;
      });
    }
  });
  copyDir();
  console.log('Copied folder is created!');
});

