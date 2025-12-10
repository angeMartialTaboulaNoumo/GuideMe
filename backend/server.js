require("dotenv").config();
const app = require("./src/app.js");

const port  = Process.env.PORT || 3000;

const server = app.createServer(app);
server.listen(port, () => {
    console.log('Server running on port: {$port} ');
});