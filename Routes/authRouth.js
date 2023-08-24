import express from 'express'
import {register,login} from '../Controllers/AuthContoller.js'

const authrouth = express.Router()

authrouth.route('/register',register)
authrouth.route('/login',login)


export default authrouth