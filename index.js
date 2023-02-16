const express = require('express');
const { errorLogs, handlerError } = require('./middlewares/error.handler');
const validatorHandler = require('./middlewares/validator.handler');
const apiRouter = require('./server');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req,res) => {
    res.send('hola mundo desde ruta raiz')
});

apiRouter(app);


//errores
app.use(handlerError)
app.use(errorLogs)
app.use(validatorHandler);


app.listen(port,(req,res)=>{
    console.log(`Escuchando en el puerto ${port}`);
})