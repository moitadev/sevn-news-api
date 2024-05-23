import express from 'express'
import { articles } from '../data/articles'

const router = express.Router()

router.get('/main-articles', (req, res) => {
  res.json(articles.main)
})

router.get('/secondary-articles', (req, res) => {
  res.json(articles.secondary)
})

export default router
