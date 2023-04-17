import { Router } from "express";
import userController from "../controller/userController.js";
import product_categoryController from "../controller/product_categoryController.js";
const router = Router();

// router.post("/user", userController.CreateUser);
router.get("/user", userController.findAllrows);
router.put("/user/:id", userController.UpdateUser);
router.delete("/user", userController.DeleteUser);
router.post("/user", userController.CreateUserSP);

router.get("/product", product_categoryController.findAllrowsPC);
router.post("/product", product_categoryController.CreatePC);

// router.get("/", (req, res) => {
//   res.send("Selamat belajar backend");
// });

// router.get("/user", (req, res) => {
//   res.send("Menampikan data user");
// }); //endpoint port untuk mengakses API

export default router;
