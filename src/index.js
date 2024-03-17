import dotenv from 'dotenv'

import mongoose from 'mongoose'
import { DB_NAME } from './constants.js'
import  connectDB  from './db/index.js'
import {app} from './app.js'

const port = process.env.PORT || 8000
dotenv.config({
    path:'./env'
})

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed ::",err)
    })



    /*
    import express from "express"
    const app=express()
    ;(async ()=>{
    try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on('error',(error)=>{
        console.error('error',error))}
        throw error
    })
    app.listen(port,()=>{console.log(`Server running on port ${port}`)})
    catch(error){
        console.error("MongoDB connection failed ::",error)
    }
    })()

    */