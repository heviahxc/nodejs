const express = require('express');
const cors = require('cors');
const { errorLogs, handlerError } = require('./middlewares/error.handler');
const validatorHandler = require('./middlewares/validator.handler');
const apiRouter = require('./server');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send('hola mundo')
});

apiRouter(app);


//errores
app.use(handlerError)
app.use(errorLogs)
app.use(validatorHandler);


app.listen(port,(req,res)=>{
    console.log(`Escuchando en el puerto ${port}`);
})