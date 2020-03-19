const express=require('express');
const router=express.Router();

// const User=require('../models/user');
const UserController=require('../controllers/users');
const checkAuth=require('../middleware/check-auth');

router.post('/signup', UserController.user_signup);

router.post('/login', UserController.user_login);

router.delete('/:userId', UserController.user_delete);

module.exports=router;