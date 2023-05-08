const path = require('path');
const fs = require('fs');

const stylesFolder = path.join(__dirname, 'styles');
const fileBundle = path.join(__dirname, 'project-dist', 'bundle.css');


fs.writeFile(fileBundle, '', (err) => {
  if (err) throw err;
});

fs.readdir(stylesFolder, (err, items) => {
  items.forEach(item => {
    if (path.extname(item) == '.css') {
      fs.readFile(path.join(stylesFolder, item), 'utf-8', (err, data) => {
        fs.appendFile(fileBundle, data, err => {
          if (err) throw err;
        });
        if (err) throw err;
      });
    }
  });
  if (err) throw err;
});
