const { createServer } = require('http');
const PORT = 4500;
const host = "127.0.0.8";
const app = require("./express");
const ConnectDB = require('./Model/DBConnection');

function RunServer() {
    const server = createServer(app)

    server.listen(PORT, host, async () => {

        await ConnectDB();

        console.log(`Server started at http://${host}:${PORT}`);
    });
}

RunServer();
