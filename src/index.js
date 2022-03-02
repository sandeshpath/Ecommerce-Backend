import express from 'express'
import dotenv from 'dotenv'
import connectDB from './services/mongodb/connectDB'
dotenv.config()
const app=express()

connectDB()
const port=process.env.PORT || 3000

app.listen(port,(req,res)=>{
  console.log(`Server listening at Port ${port}`)
})