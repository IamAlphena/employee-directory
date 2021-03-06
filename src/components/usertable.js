import React from "react";
import API from '../utils/fetch'
import "./style.css"

class UserTable extends React.Component {
    state = {
        employees: [],
        inputValue: ""
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = async () => {
        const { data } = await API.getUsers();
        const employees = data.results.map(data => ({
            name: `${data.name.last}, ${data.name.first}`,
            email: data.email,
            phone: data.cell,
            dob: data.dob.date,
            image: data.picture.thumbnail,
        }));
        this.setState({ employees });
    };

    handleSearchChange = (e) => {
        e.preventDefault();
        this.setState({ inputValue: e.target.value })
    }

    // filterEmployees = () => {
    //     this.state.employees.filter(employee => {
    //         return employee.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
    //     })
    // }

    render() {

        const filterEmployees = this.state.employees.filter(employee =>{
            return employee.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })

        return <div>
            <form>
                <input
                    placeholder="Search"
                    ref={input => {this.search = input}}
                    onChange={this.handleSearchChange}
                />
            </form>
            <table>
            <thead>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </thead>
            <tbody>
               {filterEmployees.length === 0 ? (<h2>No Employees!</h2>) :
                    (filterEmployees.map((employee) => (
                            <tr>
                                <td>
                                    <img src={employee.image} />
                                </td>
                                <td>{employee.name}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                <td>{new Date(employee.dob).toDateString()}</td>
                            </tr>))
                    )}
            </tbody>
        </table>
        </div>

    }

}

export default UserTable;

