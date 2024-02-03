require('dotenv').config()
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
exports.signin = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(422).json({ error: "Please provide a valid username and password" });
    }
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(422).json({ error: "Invalid username or password" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (isMatch) {
        const secretKey = process.env.JWT_SECRET_KEY || 'yourDefaultSecretKey';
        const token = jwt.sign({ _id: user.id }, secretKey);
  
        return res.status(200).json({
          message: "Login successful",
          token,
        });
      } else {
        return res.status(404).json({ error: "Invalid Credentials!!!" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  
  exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      console.log('Please add all the fields');
      return res.status(422).json({ error: "Please add all the fields" });
    }
  
    try {
      const existingUser = await User.findOne({ email: email });
  
      if (existingUser) {
        console.log('User already exists! with that username or email');
        return res.status(422).json({ error: "User already exists! with that username or email" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        username,
        email,
        password: hashedPassword
      });
  
      user.save().then(async user => {
        return res.json({
          message: "Registered Successfully",
          token: await user.generateToken(),
          userId: user._id.toString(),
        });
      })
        .catch(err => {
          console.log(err);
          return res.status(500).json({ error: "Internal server error" });
        });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  exports.user = async (req, res) => {
    try {
      const userData = req.User;
      console.log(userData);
      res.status(200).json({ userData })
    } catch (error) {
      console.log(error)
    }
  }