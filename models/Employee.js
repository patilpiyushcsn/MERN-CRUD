var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    emp_id: String,
    name: String,
    department: String,
    role: String,
    baseSalary: String,
    deductions: String,
    takeHomeSal: String,
    updated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Employee', EmployeeSchema);