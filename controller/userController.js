import bcrypt from "bcrypt";
import models from "../models/init-models.js";

const findAllrows = async (req, res) => {
  try {
    const result = await models.users.findAll();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

const CreateUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passHash = await bcrypt.hash(req.body.password, salt);
    const result = await models.users.create({
      user_name: req.body.username,
      password: passHash,
    });
    res.status(202).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
};

const UpdateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { user_name } = req.body;
    const result = await models.users.update(
      { user_name },
      {
        where: { id: id },
      }
    );
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

const DeleteUser = async (req, res) => {
  try {
    const result = await models.users.destroy({
      where: {
        user_name: req.body,
      },
    });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

export default { CreateUser, findAllrows, UpdateUser, DeleteUser };
