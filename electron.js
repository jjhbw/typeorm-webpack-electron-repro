
const electron = require('electron')
const { app } = electron

let mainWindow

const isEnvSet = 'ELECTRON_IS_DEV' in process.env
const isDev = isEnvSet ? parseInt(process.env.ELECTRON_IS_DEV, 10) === 1 : !app.isPackaged

function createWindow() {
    mainWindow = new electron.BrowserWindow({
        // Hide the window until maximize() is called
        width: 1600,
        height: 900,
        frame: false,
        show: false
    })

    mainWindow.on('closed', () => (mainWindow = null))

    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
    if (isDev) {
        // Open the DevTools.
        mainWindow.webContents.openDevTools()
    }

    mainWindow.show()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit()
})

app.on('activate', () => {
    // only relevant on macOS
    if (mainWindow === null) {
        createWindow()
    }
})