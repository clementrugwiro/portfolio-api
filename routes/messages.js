import { Router } from "express"
import { messageget, messagepost, messagedelete } from "../controllers/message.js"
import authenticate from "../middleware/authenticate.js"
const messages = Router()


messages.get("/messages",authenticate,messageget)

messages.post("/messages", messagepost)

messages.delete("/messages/:id",messagedelete)
export default messages