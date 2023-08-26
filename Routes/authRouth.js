import express from 'express'
import {register,login} from '../Controllers/AuthContoller.js'

const authrouth = express.Router()

authrouth.post('/register',register)
authrouth.post('/login',login)


export default authrouth