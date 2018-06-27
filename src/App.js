import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios.get('/api/employee')
      .then(res => {
        this.setState({ employees: res.data });
        console.log(this.state.employees);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EMPLOYEE CATALOG
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Employee</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map(employee =>
                  <tr>
                    <td><Link to={`/show/${employee._id}`}>{employee.emp_id}</Link></td>
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;