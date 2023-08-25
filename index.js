import express from 'express'
import authrouth from './Routes/authRouth.js'
import profileRouth from './Routes/ProfileRouth.js'
import mongoose from 'mongoose'

let Mongo_Url = 'mongodb+srv://syedhaseeb123:syedhaseeb1@mymongodb.m7inx8j.mongodb.net/'

const app = express()

const port = 8000;

app.use(express.json())

const connectDB = ()=>{
    mongoose.connect(Mongo_Url)
    .then(()=>{
        console.log('Connected data');
    }).catch((err)=>{
        throw err;
    })
}






app.use((req,res,next)=>{
    req.body.date = new Date()
    console.log(req.body.date);
    next()
})



app.use('/auth',authrouth)
app.use('/profile',profileRouth)

app.listen(port,()=>{
    connectDB()
    console.log(`server chal raha hy at port number ${port}`);
})