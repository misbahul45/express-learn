import express  from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js";

const userRouter=express.Router()



userRouter.get("/",getUsers);

userRouter.post('/',createUser)

userRouter.get("/:id",getUser)

userRouter.delete("/:id",deleteUser)

userRouter.patch("/:id",updateUser)


export default userRouter