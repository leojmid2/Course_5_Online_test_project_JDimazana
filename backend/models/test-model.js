const mongoose  = require('mongoose');

const testSchema = mongoose.Schema({

  question:{ type:String, required:true },
  choice1:{ type:String, required:true },
  choice2:{ type:String, required:true },
  choice3:{ type:String, required:true },
  choice4:{ type:String, required:true }
});

module.exports = mongoose.model('test', testSchema );
