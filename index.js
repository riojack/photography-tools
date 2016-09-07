const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({width: 1600, height: 900, frame: false});
  win.loadURL(`file://${__dirname}/index.html`);

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);