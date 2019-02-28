const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
  emp_no: {type: Number, required: true},
  emp_name: {type: String, required: true},
  emp_designation: {type: String, required: true}
});

module.exports = mongoose.model('Emp', empSchema);
