const {BrowserWindow,app} = require("electron");

app.on("ready", () => {
    const main = new BrowserWindow({
        width: 400,
        height: 600,
        autoHideMenuBar: true,
        show: false,
    });
    main.loadFile("app.html");
    main.once("ready-to-show", () => {
        main.show();
    });
    
})