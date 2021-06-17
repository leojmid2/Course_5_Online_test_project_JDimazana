const mongoose  = require('mongoose');

const answerSchema = mongoose.Schema({

  option:{ type:String, required:true },
  answer:{ type:String, required:true }
});

module.exports = mongoose.model('answer', answerSchema );
