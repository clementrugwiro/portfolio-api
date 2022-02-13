import { Router } from "express"
import { AllArticlesget, articlesget, articleget, articlepost, articlepatch, articledelete, articlelike } from "../controllers/articles.js"
const articles = Router()
import authenticate from "../middleware/authenticate.js"




articles.get("/aarticles", AllArticlesget)
articles.get("/articles", authenticate, articlesget)
articles.post("/articles-like/:id",authenticate, articlelike)
articles.get("/articles/:id", articleget)
articles.post("/add-articles", authenticate, articlepost)
articles.patch("/up-articles/:id", articlepatch)
articles.delete("/del-articles/:id", articledelete)







export default articles

