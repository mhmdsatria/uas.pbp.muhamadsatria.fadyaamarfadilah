// product-service.js
import { validate } from "../validation/validation.js";
import {
    createProductValidation,
    getProductValidation,
    updateProductValidation
} from "../validation/product-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

const createProduct = async (user, request) => {
    const product = validate(createProductValidation, request);
    product.username = user.username;

    return prismaClient.product.create({
        data: product,
        select: {
            id: true,
            namaProduct: true,
            deskripsi: true,
            harga: true,
            stok: true,
            warna: true,
            categori: true
        }
    });
}

const getProduct = async (user, productId) => {
    productId = validate(getProductValidation, productId);

    const product = await prismaClient.product.findFirst({
        where: {
            username: user.username,
            id: productId
        },
        select: {
            id: true,
            namaProduct: true,
            deskripsi: true,
            harga: true,
            stok: true,
            warna: true,
            categori: true
        }
    });

    if (!product) {
        throw new ResponseError(404, "Product is not found");
    }

    return product;
}

const updateProduct = async (user, productId, request) => {
    const product = validate(updateProductValidation, request);

    const totalProductInDatabase = await prismaClient.product.count({
        where: {
            username: user.username,
            id: productId
        }
    });

    if (totalProductInDatabase !== 1) {
        throw new ResponseError(404, "Product is not found");
    }

    return prismaClient.product.update({
        where: {
            id: productId
        },
        data: {
            namaProduct: product.namaProduct,
            deskripsi: product.deskripsi,
            harga: product.harga,
            stok: product.stok,
            warna: product.warna,
            categori: product.categori
        },
        select: {
            id: true,
            namaProduct: true,
            deskripsi: true,
            harga: true,
            stok: true,
            warna: true,
            categori: true
        }
    });
}

const deleteProduct = async (user, productId) => {
    productId = validate(getProductValidation, productId);

    const totalInDatabase = await prismaClient.product.count({
        where: {
            username: user.username,
            id: productId
        }
    });

    if (totalInDatabase !== 1) {
        throw new ResponseError(404, "Product is not found");
    }

    return prismaClient.product.delete({
        where: {
            id: productId
        }
    });
}

export default {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}
