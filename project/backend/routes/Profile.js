const express= require('express');
const router = express.Router();
const User=require('../models/User');

const authMiddleware = require('../middleware/auth');
router.get('/profile', authMiddleware, async (req, res) => {
    try{
        const user=await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({message: 'User not found'});
        res.json(user);


    }catch(err){
        console.error('Error', err.message);
        res.status(500).json({message: 'Server error'});
    }
});

module.exports = router;
