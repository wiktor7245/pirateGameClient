const {app, BrowserWindow} = require('electron')
  const path = require('path')
  const url = require('url')
  
  function createWindow () {
    //Stworzenie okna o wymiarach 800x600
    win = new BrowserWindow({width: 800, height: 600})
  
    // Ładowanie z pliku index.html
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }
  
  app.on('ready', createWindow)