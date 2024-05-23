import express from 'express'
import { articles } from '../data/articles'

const router = express.Router()

router.get('/article/:id', (req, res) => {
  const articleId = parseInt(req.params.id)
  const allArticles = [...articles.main, ...articles.secondary]
  const article = allArticles.find((a) => a.id === articleId)

  if (article) {
    res.json(article)
  } else {
    res.status(404).json({ error: 'Artigo não encontrado' })
  }
})

export default router
