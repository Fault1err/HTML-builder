const path = require('path');
const fs = require('fs');


const newFolder = path.join(__dirname, 'files-copy');
const copiedFolder = path.join(__dirname, 'files');

function toCopyFolder() {
    fs.readdir(copiedFolder, {withFileTypes: true}, (err, items) => {
     items.forEach(item => {
        const newFile = path.join(newFolder, item.name);
        const copiedFile = path.join(copiedFolder, item.name);
        fs.copyFile(copiedFile, newFile, function(err) {
            if (err) throw err;
        });
    });
})
};

fs.mkdir(newFolder, {recursive: true}, err => {
        if (err) throw err;
    toCopyFolder();
    console.log('Copied folder is created!');
    });
