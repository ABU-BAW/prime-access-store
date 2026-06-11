const upload = require('../../middleware/multer');

const { 
    get_all_products,
    get_single_product, 
    create_product, 
    delete_product, 
    update_product 
} = require('../../controllers/products/productcontroller');
const express = require('express');


const router = express.Router();


router.get('/', get_all_products);
 
router.get('/:id', get_single_product)

router.post('/', upload.single('image'), create_product);

router.delete('/:id', delete_product)

router.put('/:id',upload.single('image'), update_product)

module.exports = router;