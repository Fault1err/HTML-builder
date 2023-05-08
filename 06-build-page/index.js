const path = require('path');
const fs = require('fs');

fs.mkdir(path.join(__dirname, 'project-dist'), {recursive: true}, err => {
  if (err) throw err;
});

const newFolder = path.join(__dirname, 'project-dist');

fs.mkdir(path.join(newFolder, 'assets'), {recursive: true}, err => {
  if (err) throw err;
});

const copiedFolderFonts = path.join(__dirname, 'assets', 'fonts');
const newFolderFonts = path.join(__dirname, 'project-dist', 'assets', 'fonts');

function copyDirFonts() {
  fs.readdir(copiedFolderFonts, {withFileTypes: true}, (err, items) => {
    if (err) throw err;
    items.forEach(item => {
      const newFile = path.join(newFolderFonts, item.name);
      const copiedFile = path.join(copiedFolderFonts, item.name);
      fs.copyFile(copiedFile, newFile, function(err) {
        if (err) throw err;
      });
    });
  });
}

fs.mkdir(newFolderFonts, {recursive: true}, (error) => {
  if (error) throw error;
  fs.readdir(newFolderFonts, (err, items) => {
    if (err) throw err;
    for (let item of items) {
      fs.unlink(path.join(newFolderFonts, item), err => {
        if (err) throw err;
      });
    }
  });
  copyDirFonts();
  console.log('Copied folder Fonts is created!');
});

const copiedFolderImg = path.join(__dirname, 'assets', 'img');
const newFolderImg = path.join(__dirname, 'project-dist', 'assets', 'img');

function copyDirImg() {
  fs.readdir(copiedFolderImg, {withFileTypes: true}, (err, items) => {
    if (err) throw err;
    items.forEach(item => {
      const newFile = path.join(newFolderImg, item.name);
      const copiedFile = path.join(copiedFolderImg, item.name);
      fs.copyFile(copiedFile, newFile, function(err) {
        if (err) throw err;
      });
    });
  });
}

fs.mkdir(newFolderImg, {recursive: true}, (error) => {
  if (error) throw error;
  fs.readdir(newFolderImg, (err, items) => {
    if (err) throw err;
    for (let item of items) {
      fs.unlink(path.join(newFolderImg, item), err => {
        if (err) throw err;
      });
    }
  });
  copyDirImg();
  console.log('Copied folder Img is created!');
});

const copiedFolderSvg = path.join(__dirname, 'assets', 'svg');
const newFolderSvg = path.join(__dirname, 'project-dist', 'assets', 'svg');

function copyDirSvg() {
  fs.readdir(copiedFolderSvg, {withFileTypes: true}, (err, items) => {
    if (err) throw err;
    items.forEach(item => {
      const newFile = path.join(newFolderSvg, item.name);
      const copiedFile = path.join(copiedFolderSvg, item.name);
      fs.copyFile(copiedFile, newFile, function(err) {
        if (err) throw err;
      });
    });
  });
}

fs.mkdir(newFolderSvg, {recursive: true}, (error) => {
  if (error) throw error;
  fs.readdir(newFolderSvg, (err, items) => {
    if (err) throw err;
    for (let item of items) {
      fs.unlink(path.join(newFolderSvg, item), err => {
        if (err) throw err;
      });
    }
  });
  copyDirSvg();
  console.log('Copied folder SVG is created!');
});

const stylesFolder = path.join(__dirname, 'styles');
const fileBundle = path.join(__dirname, 'project-dist', 'style.css');

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

const componentsFolder = path.join(__dirname, 'components');

function createFromTemplate() {
  const indexHtml = path.join(newFolder, 'index.html');

  fs.readFile(indexHtml, {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    fs.readdir(componentsFolder, (err, items) => {
      if (err) throw err;
      items.forEach(item => {
        let res = item.split('.')[0];
        fs.readFile(path.join(componentsFolder, item), {encoding: 'utf-8'}, (err, t) => {
          if (err) throw err;
          data = data.replace(`{{${res}}}`, t);
          fs.writeFile(indexHtml, data, err => {
            if (err) throw err;
          });
        });
      });
    });
    if (err) throw err;
  });
}

fs.writeFile(path.join(newFolder, 'index.html'), '', (err) => {
  if (err) throw err;
  fs.copyFile(path.join(__dirname, 'template.html'), path.join(newFolder, 'index.html'), (err) => {
    if (err) throw err;
    createFromTemplate();
  });
});