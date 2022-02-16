import { Router } from "express"
import { AllArticlesget, articlesget, articleget, articlepost, articlepatch, articledelete, articlelike, articlecomment,articledislike, Alldislikesget, Alllikesget, Allcommentsget } from "../controllers/articles.js"
const articles = Router()
import authenticate from "../middleware/authenticate.js"




articles.get("/aarticles", AllArticlesget)
articles.get("/alikes",authenticate, Alllikesget)
articles.get("/adislikes",authenticate, Alldislikesget)
articles.get("/acomment",authenticate, Allcommentsget)
articles.get("/articles", authenticate, articlesget)
articles.post("/articles-like/:id", authenticate, articlelike)
articles.post("/articles-comment/:id", authenticate, articlecomment)
articles.post("/articles-dislike/:id", authenticate, articledislike)
articles.get("/articles/:id", articleget)
articles.post("/add-articles", authenticate, articlepost)
articles.patch("/up-articles/:id", authenticate, articlepatch)
articles.delete("/del-articles/:id", authenticate, articledelete)

export default articles

