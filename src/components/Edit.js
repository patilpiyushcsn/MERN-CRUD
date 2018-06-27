import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        employee: {}
    };
  }

  componentDidMount() {
    axios.get('/api/employee/'+this.props.match.params.id)
      .then(res => {
        this.setState({ employee: res.data });
        console.log(this.state.employee);
      });
  }

  onChange = (e) => {
    const state = this.state.employee
    state[e.target.name] = e.target.value;
    this.setState({employee:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description, published_year, publisher } = this.state.employee;

    axios.put('/api/employee/'+this.props.match.params.id, { isbn, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT EMPLOYEE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.employee._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Employee List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="emp_id">Employee ID:</label>
                <input type="text" class="form-control" name="emp_id" value={this.state.employee.emp_id} onChange={this.onChange} placeholder="Employee ID" />
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.employee.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="department">Department:</label>
                <input type="text" class="form-control" name="department" value={this.state.employee.department} onChange={this.onChange} placeholder="Department" />
              </div>
              <div class="form-group">
                <label for="role">Role:</label>
                <input type="text" class="form-control" name="role" value={this.state.employee.role} onChange={this.onChange} placeholder="Role" />
              </div>
              <div class="form-group">
                <label for="baseSalary">Base Salary:</label>
                <input type="text" class="form-control" name="baseSalary" value={this.state.employee.baseSalary} onChange={this.onChange} placeholder="Base Salary" />
              </div>
              <div class="form-group">
                <label for="deductions">Deductions:</label>
                <input type="text" class="form-control" name="deductions" value={this.state.employee.deductions} onChange={this.onChange} placeholder="Deductions" />
              </div>
              <div class="form-group">
                <label for="takeHomeSal">Take Home Salary:</label>
                <input type="text" class="form-control" name="takeHomeSal" value={this.state.employee.takeHomeSal} onChange={this.onChange} placeholder="Take Home Salary" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;