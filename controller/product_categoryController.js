import models, { sequelize } from "../models/init-models.js";
import product_category from "../models/product_category.js";
import messageHelper from "../messageError/messageError.js";

const findAllrowsPC = async (req, res) => {
  try {
    const result = await models.product_category.findAll();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

const CreatePC = async (req, res) => {
  try {
    const result = await product_category.create({
      name: req.body,
      description: req.body,
    });
    res.send(messageHelper(result, 200, "sukses"));
  } catch (err) {
    res.send(messageHelper(err.message, 400, "coba lagi"));
  }
};

export default { findAllrowsPC, CreatePC };
