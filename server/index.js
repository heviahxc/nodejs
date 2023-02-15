const productsRouter = require('../routes/products.js');
const usersRoute = require('../routes/users.js');

function apiRouter(app){
    app.use('/products', productsRouter);
    app.use('/users', usersRoute);
}

module.exports = apiRouter;