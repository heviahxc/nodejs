const express = require('express');
const productsServices = require('../services/servicesProducts')
const router = express.Router();

router.get('/', async (req,res)=>{
    const products = await productsServices.getAllProducts(req,res);
    
    res.json(products)
});

router.post('/', async (req,res)=>{
    await productsServices.createnewProduct(req,res)
});

router.patch('/:id', async (req,res)=>{
   const updateProduct = await productsServices.updateProduct(req,res)
   res.json(updateProduct)
});

router.delete('/:id', async (req,res)=>{
  await productsServices.deleteServices(req,res)
});

router.get('/:id', async (req,res) => {
   await productsServices.getOneProduct(req,res)
});

module.exports = router;