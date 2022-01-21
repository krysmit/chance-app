const { Schema, model } = require('mongoose');

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

const Resume = model('Resume', resumeSchema);
module.exports = Resume;
