const productController = require("../controllers/productController");

const router = require("express").Router();

router.post("/addProduct", productController.addProduct);

router.get("/allProducts", productController.getAllProducts);

router.get("/published", productController.getPublishedProduct);

router.get("/:id", productController.getOneProduct);

router.put("/updateProduct", productController.updateProduct);

router.delete("/deleteProduct", productController.deleteProduct);


