(function(){
    var application = require('app'),
        BrowserWindow = require('browser-window');
    application.on('ready', function() {
        var mainWindow = new BrowserWindow({
            width: 600,
            height: 300,
            frame:true,
            center:true,
            resizable:false,
            icon:"image/favicon.png",
            title:"Hello Browser Window",
            preload: __dirname + "/js/preloadScript.js"
        });
        mainWindow.toggleDevTools();
        mainWindow.loadUrl('file://' + __dirname + '/main.html');

        var myWebContent = mainWindow.webContents;
        myWebContent.on('did-finish-load', function() {
            myWebContent.insertCSS("h1{color:red}");
        });
        mainWindow.on('closed', function() {
            mainWindow = null;
        });
    });
})();