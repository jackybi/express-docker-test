const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const test = new mongoose.Schema({
  test_key1:{
    type: String,
    required: true,
  },
  update_time:{
    type: Date,
    default: Date.now,
    required: true,
  }
})

test.pre("save", async (next) => {
  this.update_time = Date.now()
  next()
})

module.exports = mongoose.model('test', test);