import express from 'express'
import dotenv from 'dotenv'
import Colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()


export const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Api is runing.....")
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))