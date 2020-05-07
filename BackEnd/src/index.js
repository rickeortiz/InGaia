const express = require('express');
const swaggerUi = require('swagger-ui-express');

const routes = require('./routes');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(routes);

app.listen(process.env.PORT || 3333);