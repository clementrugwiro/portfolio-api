import { Router } from "express"
import { usersget, userget, userpost, userpatch, userdelete } from "../controllers/users.js"
import authenticate from "../middleware/authenticate.js"
const users = Router()
import authrole from "../middleware/authrole.js"


users.get("/users", authenticate, authrole,  usersget)

users.get("/users/:id", userget)

users.post("/add-users", userpost)

users.patch("/ip-users/:id", userpatch)

users.delete("/del-users/:id", userdelete)


export default  users