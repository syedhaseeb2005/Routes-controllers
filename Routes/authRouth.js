import express from 'express'
import {register,login} from '../Controllers/AuthContoller.js'

const authrouth = express.Router()

authrouth.get('/register',register)
authrouth.get('/login',login)


export default authrouth