var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email:{
    type: String,
    required:true,
    minLength:6,
    trim: true
  }
})

module.exports = {User};
