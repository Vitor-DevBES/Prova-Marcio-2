const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const produtoRoutes = require('./routes/produtoRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado...'))
    .catch(err => console.error('Erro ao conectar no MongoDB', err));

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', produtoRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
