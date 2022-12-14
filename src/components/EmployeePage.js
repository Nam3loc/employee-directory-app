import { Link } from 'react-router-dom';
import EmployeeListItem from "./EmployeeListItem";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataArr from '../data';
import EmployeeList from "./EmployeeList";

export default function EmployeePage(props) {
    const [employee, setEmployee] = useState(null);
    console.log(employee);

    const { id } = useParams();
    // console.log(id);

    const loaded = () => {
        return (
            <div className="employeePage">
                <h1>Employee</h1>
    
                <div className="employeePageHeader">
                    <img src={dataArr[id].img} alt={dataArr[id].name} />
                    <div className="emText">
                        <h3>{dataArr[id].name}</h3>
                        <br />
                        <p>{dataArr[id].title}</p>
                    </div>
                </div>
    
                <div className="officeNumber">
                    <h4>Call Office</h4>
                    <br />
                    <p>{dataArr[id].officeNumber}</p>
                </div>
    
                <div className="mobileNumber">
                    <h4>Call Mobile</h4>
                    <br />
                    <p>{dataArr[id].mobileNumber}</p>
                </div>
    
                <div className="sms">
                    <h4>SMS</h4>
                    <br />
                    <p>{dataArr[id].sms}</p>
                </div>
    
                <div className="email">
                    <h4>Email</h4>
                    <br />
                    <p>{dataArr[id].email}</p>
                </div>
            </div>
        )
    }
    
    const loading = () => {
        <h1>Loading...</h1>
    }

    return id ? loaded() : loading()
}