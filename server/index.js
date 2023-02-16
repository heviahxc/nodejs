const productsRouter = require('../routes/products.js');
const usersRoute = require('../routes/users.js');
const express = require('express');
const { route } = require('../routes/products.js');

//Asignar rutas
function apiRouter(app){
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/products', productsRouter);
    router.use('/users', usersRoute);
}

module.exports = apiRouter;