const express = require('express');
const {productsServices} = require('../services/servicesProducts')
const router = express.Router();

router.get('/', (req,res)=>{
    const products = productsServices.getAllProducts(req,res);
    res.json(products)
});

router.post('/', (req,res)=>{
    productsServices.createnewProduct(req,res)
});

router.patch('/:id', (req,res)=>{
   const updateProduct = productsServices.updateProduct(req,res)
   res.json(updateProduct)
});

router.delete('/:id', (req,res)=>{
   productsServices.deleteServices(req,res)
});

router.get('/:id',(req,res) => {
   productsServices.getOneProduct(req,res)
});

module.exports = router;