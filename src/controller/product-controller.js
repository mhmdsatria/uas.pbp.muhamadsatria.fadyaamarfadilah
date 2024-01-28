// productController.js

import productService from "../service/product-service.js";

const createProduct = async (req, res, next) => {
    try {
        const result = await productService.createProduct(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getProduct = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const result = await productService.getProduct(productId);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const request = req.body;

        const result = await productService.updateProduct(productId, request);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        await productService.deleteProduct(productId);
        res.status(200).json({
            data: "OK"
        });
    } catch (e) {
        next(e);
    }
}

export default {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}
