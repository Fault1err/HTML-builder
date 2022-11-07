const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;

const secretFolder = path.join(__dirname, 'secret-folder');

fsPromises.readdir(secretFolder, {withFileTypes: true}).then(results => {
    results.forEach(result => {
        if (result.isFile()) {
            const secretPath = path.join(__dirname, 'secret-folder', result.name);
            const secretName = path.basename(secretPath, path.extname(secretPath));
            const secretType = path.extname(secretPath);
            fsPromises
            .stat(secretPath)
            .then(result => {
                console.log(`${secretName} - ${secretType} - ${result.size}`);
            });
        }
    });
});
