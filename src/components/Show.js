import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/employee/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.employee.name}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Employee List</Link></h4>
            <dl>
              <dt>Employee ID:</dt>
              <dd>{this.state.employee.emp_id}</dd>
              <dt>Department:</dt>
              <dd>{this.state.employee.department}</dd>
              <dt>Role:</dt>
              <dd>{this.state.employee.role}</dd>
              <dt>Base Salary:</dt>
              <dd>{this.state.employee.baseSalary}</dd>
              <dt>Deductions:</dt>
              <dd>{this.state.employee.deductions}</dd>
              <dt>Take Home Salary:</dt>
              <dd>{this.state.employee.takeHomeSal}</dd>
            </dl>
            <Link to={`/edit/${this.state.employee._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.employee._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;