const electron = require("electron");

const {app, BrowserWindow, Menu, ipcMain,} = electron;

let kasirWindow;
let laptopWindow;
let periferalWindow;
let komponenWindow;

app.on("ready", ()=>{
    kasirWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration: true
        },
        title: "Kasir Komputer"
    });

    kasirWindow.loadURL(`file://${__dirname}/kasir.html`);
    kasirWindow.on("closed", () =>{

        app.quit();
        kasirWindow = null;
    });

    // const mainMenu = Menu.buildFromTemplate(menuTemplate);
    // Menu.setApplicationMenu(mainMenu);
});

const LaptopWindowCreator = () => {
    laptopWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true
        },
        width: 300,
        height: 600,
        title: "Transaksi Laptop"
    });

    laptopWindow.setMenu(null);
    laptopWindow.loadURL(`file://${__dirname}/laptop.html`);
    laptopWindow.on("closed", () => (laptopWindow = null));
};

const PeriferalWindowCreator = () => {
    periferalWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true
        },
        width: 600,
        height: 400,
        title: "Transaksi Periferal"
    });

    periferalWindow.setMenu(null);
    periferalWindow.loadURL(`file://${__dirname}/periferal.html`);
    periferalWindow.on("closed", () => (periferalWindow = null));
};

const KomponenWindowCreator = () => {
    komponenWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true
        },
        width: 600,
        height: 400,
        title: "Transaksi Periferal"
    });

    komponenWindow.setMenu(null);
    komponenWindow.loadURL(`file://${__dirname}/komponenpc.html`);
    komponenWindow.on("closed", () => (periferalWindow = null));
};



ipcMain.on("menu1", function(){
    LaptopWindowCreator()
})

ipcMain.on("menu2", function(){
    PeriferalWindowCreator()
})

ipcMain.on("menu3", function(){
    KomponenWindowCreator()
})

