const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');


const app = express();
const liveReloadServer = livereload.createServer();

app.use(connectLivereload());


// Liveload watch "public" folder
liveReloadServer.watch(path.join(__dirname, 'public'));


app.use(express.static('public'));


app.listen(3001, () => {
    console.log(`Server is running on port 3001 http://localhost:3001/`);
});
