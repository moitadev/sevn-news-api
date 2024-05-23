import express from 'express'
import cors from 'cors'
import homeRoutes from '../routes/home'
import newsRoutes from '../routes/news'

export const app = express()

app.use(cors())

app.use('/home', homeRoutes);
app.use('/news', newsRoutes);

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
