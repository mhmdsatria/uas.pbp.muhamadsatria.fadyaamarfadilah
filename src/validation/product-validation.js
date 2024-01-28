import Joi from "joi";

const createProductValidation = Joi.object({
    namaProduct: Joi.string().max(100).required(),
    deskripsi: Joi.string().max(255).optional(),
    harga: Joi.number().required(),
    stok: Joi.number().integer().required(),
    warna: Joi.string().max(50).optional(),
    categori: Joi.string().max(50).optional()
});

const getProductValidation = Joi.number().positive().required();

const updateProductValidation = Joi.object({
    id: Joi.number().positive().required(),
    namaProduct: Joi.string().max(100).required(),
    deskripsi: Joi.string().max(255).optional(),
    harga: Joi.number().required(),
    stok: Joi.number().integer().required(),
    warna: Joi.string().max(50).optional(),
    categori: Joi.string().max(50).optional()
});

export {
    createProductValidation,
    getProductValidation,
    updateProductValidation
};
