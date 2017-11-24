const express = require('express');
const app = express();
const path = require('path');

const middleware = require('./middleware');
const controller = require('./controller');

const buildPath = path.join(__dirname + '/../build');
const port = process.env.PORT || 8000;

app.use(middleware.bodyParser.json());
app.use(middleware.bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.use(express.static(buildPath));

// Data endpoints
app.get('/api/audios', controller.audio.getAudio);

app.listen(port, () => console.log('Ready to accept connections on port', port));