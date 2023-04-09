const db = require('../models')

// create main model
const Product = db.products
const Review = db.reviews

// Main work


//1. Create product

const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.decription,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product);
}

//2. Get all products

const getAllProducts = async(req, res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}

//3. Get single products

const getOneProduct = async(req, res) => {
    let id = req.params.id
    let products = await Product.findOne({ where: {id: id}})
    res.status(200).send(products)
}


//4. update products

const updateProduct = async(req, res) => {
    let id = req.params.id
    const Product = await Product.update(req.body, { where: {id: id}})
    res.status(200).send(Product)
}