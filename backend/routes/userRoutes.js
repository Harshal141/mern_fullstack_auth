import express from 'express';
// import api request handlers from userController.js
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
const router = express.Router();

router.post('/auth',authUser)
router.post('/',registerUser)
router.post('/logout',logoutUser)

// ONELINER: router.route('/profile').get(getUserProfile).put(updateUserProfile)
// router.get('/profile',getUserProfile)
// router.put('/profile',updateUserProfile)
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router;
