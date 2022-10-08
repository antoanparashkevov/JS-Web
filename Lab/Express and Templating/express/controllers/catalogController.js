const {Router} = require('express')
const dataService = require('../services/productService')
const router = Router()

//we can call Router also as a constructor
// const router = new Router()

router.get('/',(req,res)=>{
    const products = dataService.getList()
    res.render('pages/catalog', {products})
})

router.get('/:productId',(req,res)=>{
    const productId = req.params.productId;
    const product = dataService.getById(productId)
   res.render('pages/details',product)
})


module.exports=router