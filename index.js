import express from 'express'
import authrouth from './Routes/authRouth.js'
import profileRouth from './Routes/ProfileRouth.js'



const app = express()

const port = 8000;

app.use(express.json())


app.use((req,res,next)=>{
    req.body.date = new Date()
    console.log(req.body.date);
    next()
})



app.use('/auth',authrouth)
app.use('/profile',profileRouth)

app.listen(port,()=>{
    console.log(`server chal raha hy at port number ${port}`);
})