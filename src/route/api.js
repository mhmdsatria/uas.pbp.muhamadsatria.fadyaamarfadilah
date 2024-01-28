import express from "express";
import userController from "../controller/user-controller.js";
import productController from "../controller/product-controller.js";
import {authMiddleware} from "../middleware/auth-middleware.js";


const userRouter = new express.Router();
const productRouter = new express.Router();
userRouter.use(authMiddleware);
productRouter.use(authMiddleware);

// User API
userRouter.get('/api/users/current', userController.get);
userRouter.patch('/api/users/current', userController.update);
userRouter.delete('/api/users/logout', userController.logout);

// Product API
productRouter.post('/api/products', productController.createProduct);
productRouter.get('/api/products/:productId', productController.getProduct);
productRouter.patch('/api/products/:productId', productController.updateProduct);
productRouter.delete('/api/products/:productId', productController.deleteProduct);

export {
    userRouter,
    productRouter
}
