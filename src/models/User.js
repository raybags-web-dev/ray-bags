const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 1024
  },
  token: {
    type: String,
    maxlength: 500,
    minlength: 3
  }
})

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    process.env.MY_SECRET
  )
  return token
}

const User = new mongoose.model('User', userSchema)

module.exports = {
  User
}
