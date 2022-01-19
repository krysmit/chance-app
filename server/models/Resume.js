const { Schema } = require('mongoose');


// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `SavedResume` array in User.js
const resumeSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
    education: {
        type: String,
        required: true,
        unique: true,
    },
    pastJobs: {
        type: String,
        required: true,
    },
  
  skills: {
    type: String,
    required: true,
  },
});

module.exports = resumeSchema;
