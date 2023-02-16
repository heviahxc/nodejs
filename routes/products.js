const express = require('express');
const productsServices = require('../services/servicesProducts')
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const {schemaProductCreate,schemaProductUpdate,getProductSchema} = ('../schema/schemaProducts.js')

router.get('/', async (req,res, next)=>{
    try {
      const products = await productsServices.getAllProducts(req,res);
    
    res.json(products)
    } catch (error) {
      next(error)
    }
});

router.post('/', validatorHandler(schemaProductCreate, 'body'), async (req,res)=>{
    await productsServices.createnewProduct(req,res)
});

router.patch('/:id', 
validatorHandler(getProductSchema, 'params'),
validatorHandler(schemaProductUpdate, 'body'),
async (req,res)=>{
   const updateProduct = await productsServices.updateProduct(req,res)
   res.json(updateProduct)
});

router.delete('/:id', async (req,res)=>{
  await productsServices.deleteServices(req,res)
});

router.get('/:id', validatorHandler(getProductSchema,'params'), async (req,res) => {
  const getProduct = await productsServices.getOneProduct(req,res)
  return getProduct;
});

module.exports = router;