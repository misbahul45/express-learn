import express  from "express";
import { v4 as uuidv4 } from 'uuid';
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users";

const userRouter=express.Router()



userRouter.get("/",getUsers);

userRouter.post('/',createUser)

userRouter.get("/:id",getUser)

userRouter.delete("/:id",deleteUser)

userRouter.patch("/:id",updateUser)


export default userRouter