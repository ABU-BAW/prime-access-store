const Product = require("../../models/product");
const mongoose =require('mongoose')



const get_all_products = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success : true,
            products
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'cannot find contacts!!',
            error : error.message
        }) 
    }
}

const get_single_product = async (req, res) => {
    const id  = req.params.id;

    try {
        const product = await Product.findById(id);

        if(!product) return res.status(404).json({
            success : false,
            message : 'product not found!!',
        })

        res.status(200).json({
            success : true,
            product
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'error getting products',
            error : error.message
        })
    }
}


const create_product = async (req, res) => {
    const image = req.file;
    try {
        if (!image){
            return res.status(400).json({
                success : false,
                message : "no file uploaded"
            })
        }

        const imageUrl = req.file.path;
        const product = await new Product({...req.body, imageUrl}).save()
        res.status(200).json({
            success : true,
            message : 'product successfully uploaded',
            product
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'product upload failed',
            error : error.message
        })
    }
}


const delete_product = async(req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ 
            success: false, 
            message: 'product not found' 
        })
    }

    try {
        const product = await Product.findByIdAndDelete(id)

        if(!product) return res.status(404).json({
            success : false,
            message : 'cannot find contact!!'
        })        

        res.status(200).json({
            success: true,
            message: 'product deleted successfully'
        })
        
    } catch (error) {
         res.status(500).json({
            success : false,
            message : 'error deleting product',
        })
    }
}
  

const update_product = async (req, res) => {
    const id  = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ 
            success: false, 
            message: 'product not found' 
        })
    }


    try { 
        const product = await Product.findById(id);

        if(!product) return res.status(404).json({
            success : false,
            message : 'product not found!!',
        })

        const updatedProduct = await Product.findByIdAndUpdate(id, { $set : {...req.body, imageUrl : req.file?.path}}, {new : true})
        res.status(200).json({
            success : true,
            updatedProduct
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'error updating product',
        })
    }
}

module.exports = { 
    get_all_products,
    get_single_product,
    create_product,
    delete_product,
    update_product
}