const faker = require('faker');
const boom = require('@hapi/boom');
const getAllProducts = (req, res)=>{
    const products = [];
    try {
       
        const {size} = req.query
        const limit = size ?? 5
        for (let index = 0; index < limit; index++) {
            products.push({
                name:faker.commerce.productName(),
                price:parseInt(faker.commerce.price(), 10),
                image:faker.image.imageUrl()
            })
            
        }
        
    } catch (error) {
        console.log(error)
    }
    return products
}

const createnewProduct = (req,res)=>{
    try {
        const body = req.body;
        res.json({
            ok:true,
            data:body
        })
    } catch (error) {
        console.log(error)
    }
   

}

const updateProduct = (req,res)=>{
    try {
        const {id} = req.params
    const body = req.body
    res.json({
            message:'success',
            products:body,
            id
    })
    } catch (error) {
        console.log(error)
    }
}

const deleteProduct = (req,res)=>{
    try {
        const {id} = req.params
        res.json({
            message:'delete',
            id
        })
    } catch (error) {
        console.log(error)
    }
   
}

const getOneProduct = (req,res)=>{
    try {
        const {id} = req.params;
    res.json({
        'id': id,
        'name': 'teclado',
        'price': 2000,
        'category': 'tecnology'
    })
    } catch (error) {
        console.log(error)
    }
}



module.exports ={
    getAllProducts,
    createnewProduct,
    updateProduct,
    deleteProduct,
    getOneProduct
} 