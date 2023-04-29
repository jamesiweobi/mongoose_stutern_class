const mongoose = require('mongoose');



const validateEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
  },
  currency:{
    type: String,
    required: true,
    enum: ['USD', 'EUR', 'NGN']
  },
  firstName:{
    type: String,
    trim: true,
  },
  lastName:{
    type: String,
    trim: true,
  },
  relatives: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tutor",
  },
  // learners:[
  //   {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Learner"
  //   },
  // ],
  fullName: String,
  age: Number,
  address: {
    street: {
      type: String
    },
    lga: {
      type: String
    },
    houseNumber: Number,
    country: {
      type: String
    },
  },
  hobbies: [{
    type: String
  }],
  email: {
    type: String,
    trim: true,
    required: true,
    lowerCase: true,
    validate: [validateEmail, 'Your email does not match a valid email pattern'],
    // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  count: {
    type: Number,
    default: 0
  },
  password: {
    type: String
  },
  isMale: {
    type: Boolean,
  },
  isFemale: {
    type: Boolean,
  },
},
{
timestamps: true
})

UserSchema.pre('save', function(next){
  this.fullName = this.firstName + ' ' + this.lastName //find
  next()
})

module.exports = mongoose.model('User', UserSchema)