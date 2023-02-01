import express from "express";
import createHttpError from "http-errors";
import ProductModel from "./model.js";

const productRouter = express.Router();

productRouter.post("/", async (req, res, next) => {
  try {
    const { id } = await ProductModel.create(req.body);
    res.status(201).send({ id });
  } catch (error) {
    next(error);
  }
});
productRouter.get("/", async (req, res, next) => {
  try {
    const products = await ProductModel.findAll({});
    res.send(products);
  } catch (error) {
    next(error);
  }
});
productRouter.get("/:productId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
productRouter.put("/:productId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
productRouter.delete("/:productId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default productRouter;
