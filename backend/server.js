import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js' 

// initialize express app
const app = express()

// connect to MongoDB       
await connectDB() 
// middleware
app.use(cors())
app.use(express.json())     
// routes
app.get('/', (req, res) => 
  res.send('Welcome to the backend server!'))
//port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
// export default app

