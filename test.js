const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('request made');
})

Server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});