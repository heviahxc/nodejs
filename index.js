const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('hola mundo desde ruta raiz')
});

app.get('/api/v1/help',(req,res) => {
   res.status(200).send('Hola desde help')
});

app.get('/products',(req,res) => {
    res.json({
        'name': 'teclado',
        'price': 2000,
        'category': 'tecnology'
    })
});

app.listen(port,(req,res)=>{
    console.log(`Escuchando en el puerto ${port}`);
})