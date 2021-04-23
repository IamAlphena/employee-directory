
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import API from './utils/fetch';
// import './App.css';

class App extends React.Component {
  state = {
    employees: [],
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    const employees = data.results.map(item => ({
      name: `${item.name.first} ${item.name.last}`,
      email: item.email,
      phone: item.cell,
      dob: item.dob.date,
      image: item.picture.thumbnail,
    }));
    this.setState({ employees });
  };

  render() {
    const { employees } = this.state;
    // console.log(this.state);
    return <table>
      <thead>
        <th>Image</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>DOB</th>
      </thead>
      <tbody>
        {employees.length === 0 ? (<h2>No Employees!</h2>) :
          (employees.map((employee) => (
            <tr>
              <td>
                <img src={employee.image} />
              </td>
              <td>{employee.name}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.dob}</td>
            </tr>))
          )}

      </tbody>
    </table>
  }

}


export default App;
