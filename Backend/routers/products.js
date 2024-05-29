const router = require('express').Router();
const auth = require('../middleware/auth');

const { getProducts, addProduct, getProductByCategory, getFeaturedProducts } = require('../controllers/products');

//GET INITIAL PRODUTCTS
router.get('/', getProducts);

//ADD PRODUCTS
router.post('/new', addProduct);

// GET PRODUCTS BY CATEGORY
router.post('/category', getProductByCategory)

// GET FEATURED PRODUCTS
router.get('/featured', getFeaturedProducts)

module.exports = router;
