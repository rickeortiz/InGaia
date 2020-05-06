const express = require('express');

const musicController = require('./controller/musicController');
const logController = require('./controller/logController');
const parameterController = require('./controller/parameterController');

const routes = express.Router();

routes.get('/getTempByCity', musicController.getTempByCity);

routes.get('/getLog', logController.getLog);
routes.get('/getLogCount', logController.getCount);
routes.get('/getLogQuartil', logController.getQuartil);

routes.get('/getParametersString', parameterController.getParametersString);
routes.get('/getParametersInteger', parameterController.getParametersInteger);

routes.get('/', function (req, res) {
    return res.sendFile(__dirname + '/index.html');
});

module.exports = routes;