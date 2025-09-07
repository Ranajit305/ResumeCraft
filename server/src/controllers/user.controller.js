import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import 'dotenv/config'

const generateToken = (userId, res) => {
    try {
        const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY, {
            expiresIn: '7d'
        });

        res.cookie('jwt', token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production'
        })
    } catch (error) {
        console.log(`Error in generating Token: ${error.message}`);
    }
}

export const checkAuth = async (req, res) => {
  try {
    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format'});
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email or Username already in use" });
    }

    if (password.length < 5) {
        return res.status(400).json({ success: false, message: 'Weak Password'});
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    generateToken(user._id, res);

    const userDoc = user.toObject();
    delete userDoc.password;

    res.status(201).json({ success: true, message: "User created successfully", user: userDoc });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User doesn't exists" });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    generateToken(user, res);

    const userDoc = user.toObject();
    delete userDoc.password;

    res.status(200).json({ success: true, message: "Login successful", user: userDoc });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.status(200).json({ success: true, message: 'Logout successful'});
    } catch (error) {
        console.log(`Error in Logout: ${error.message}`);
    }
}