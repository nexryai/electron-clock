// パッケージのインポート
const electron = require("electron");
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

// 全ウィンドウのクローズ時に呼ばれる
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// 初期化完了時に呼ばれる
app.on('ready', function() {
  // ウィンドウの生成
  let mainWindow = new BrowserWindow({width: 840, height: 620});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // ウィンドウのクローズ時に呼ばれる
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
