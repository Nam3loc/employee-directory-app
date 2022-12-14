import { Link } from 'react-router-dom';
import EmployeeListItem from "./EmployeeListItem";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataArr from '../data';
import EmployeeList from "./EmployeeList";

export default function EmployeePage(props) {
    const [employee, setEmployee] = useState(null);

    const loaded = () => {
        return (
            <div className="employeePage">
                <h1>Employee</h1>
    
                <div className="employeePageHeader">
                    <img src={employee.img} alt={employee.name} />
                    <div className="emText">
                        <h3>{employee.name}</h3>
                        <br />
                        <p>{employee.title}</p>
                    </div>
                </div>
    
                <div className="officeNumber">
                    <h4>Call Office</h4>
                    <br />
                    <p>{employee.officeNumber}</p>
                </div>
    
                <div className="mobileNumber">
                    <h4>Call Mobile</h4>
                    <br />
                    <p>{employee.mobileNumber}</p>
                </div>
    
                <div className="sms">
                    <h4>SMS</h4>
                    <br />
                    <p>{employee.sms}</p>
                </div>
    
                <div className="email">
                    <h4>Email</h4>
                    <br />
                    <p>{employee.email}</p>
                </div>
            </div>
        )
    }
    
    const loading = () => {
        <h1>Loading...</h1>
    }

    return employee ? loaded : loading
}