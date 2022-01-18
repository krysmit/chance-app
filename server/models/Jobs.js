const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `SavedResume` array in User.js
const jobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  employer: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  
  jobId: {
    type: String,
    required: true,
  },
  HourlyPay: {
    type: String,
    required: true,
  },
});

module.exports = jobSchema;
