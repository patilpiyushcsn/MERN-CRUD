import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      emp_id: '',
      name: '',
      department: '',
      role: '',
      baseSalary: '',
      deductions: '',
      takeHomeSal: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { emp_id, name, department, role, baseSalary, deductions, takeHomeSal } = this.state;

    axios.post('/api/employee', { emp_id, name, department, role, baseSalary, deductions, takeHomeSal })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { emp_id, name, department, role, baseSalary, deductions, takeHomeSal } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD EMPLOYEE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Employee List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="emp_id">Employee ID:</label>
                <input type="text" class="form-control" name="emp_id" value={emp_id} onChange={this.onChange} placeholder="Employee ID" />
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="department">Department:</label>
                <input type="text" class="form-control" name="department" value={department} onChange={this.onChange} placeholder="Department" />
              </div>
              <div class="form-group">
                <label for="role">Role:</label>
                <input type="text" class="form-control" name="role" value={role} onChange={this.onChange} placeholder="Role" />
              </div>
              <div class="form-group">
                <label for="baseSalary">Base Salary:</label>
                <input type="text" class="form-control" name="baseSalary" value={baseSalary} onChange={this.onChange} placeholder="Base Salary" />
              </div>
              <div class="form-group">
                <label for="deductions">Deductions:</label>
                <input type="text" class="form-control" name="deductions" value={deductions} onChange={this.onChange} placeholder="Deductions" />
              </div>
              <div class="form-group">
                <label for="takeHomeSal">Take Home Salary:</label>
                <input type="text" class="form-control" name="takeHomeSal" value={takeHomeSal} onChange={this.onChange} placeholder="Take Home Salary" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;