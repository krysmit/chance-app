const { Schema, model } = require('mongoose');

var userSchema = new Schema({
    User:  { type: String, required: true },
    FirstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: String,required: true,unique: true, match: [/.+@.+\..+/, 'Must match an email address!']},
    password: { type: String, required: true, minlength: 5 }
    
});
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = model('User', userSchema);
  
  module.exports = User;