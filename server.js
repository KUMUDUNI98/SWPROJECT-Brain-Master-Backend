const http = require('http');//use http protocol
const app = require('./app');//import app.js
const port = process.env.PORT || 5000;//port

const server = http.createServer(app);//start server

app.listen(port, () => {
    console.log('Server Started and listening on: ' + port );
});