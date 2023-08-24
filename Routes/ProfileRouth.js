import express from 'express'
import {getProfile, UpdateProfile} from '../Controllers/ProfileController.js'

const profileRouth = express.Router()

profileRouth.get('/:id', getProfile)
profileRouth.put('/:id', UpdateProfile)



export default profileRouth