const { User } = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//GENERATE JWT TOKEN
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

const registerUser = async (req, res) => {
    try {
        console.log('Registration attempt:', { name: req.body.name, email: req.body.email });
        
        // Check if MongoDB is connected
        const mongoose = require('mongoose');
        if (mongoose.connection.readyState !== 1) {
            console.error('MongoDB not connected! State:', mongoose.connection.readyState);
            return res.status(503).json({ 
                message: "Database connection unavailable. Please check MongoDB Atlas network access settings.",
                hint: "Whitelist 0.0.0.0/0 in MongoDB Atlas Network Access"
            });
        }
        
        const { name, email, password } = req.body;

        //CHECK IF USER ALREADY EXISTS
        const userExists = await User.findOne({ email });
        if (userExists) {
            console.log('User already exists:', email);
            return res.status(400).json({ message: "User already exists" });
        }
        if(password.length < 8){
            console.log('Password too short:', password.length);
            return res.status(400).json({ message: "Password must be at least 8 characters long" });
        }

        //HASHING PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //CREATE USER
        const user = await User.create({
        name, 
        email, 
        password: hashedPassword
        })
        
        console.log('User created successfully:', user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            message: "Server error",
            error: error.message
        });
    }
};
//LOGIN FUNCTION
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user ) {
            return res.status(401).json({ message: "Invalid email or password" });
        }   

        //COMPARE PASSWORDS
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })

    }   catch (error) {
        res.status(500).json({ 
            message: "Server error",
            error: error.message
        });
    }
}

//GET USER PROFILE FUNCTION
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }   
        res.status(200).json(user);
    }   catch (error) {
        res.status(500).json({ 
            message: "Server error",
            error: error.message
        });
    }   
}

module.exports = { registerUser, loginUser, getUserProfile };

