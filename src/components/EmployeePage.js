import { Link } from 'react-router-dom';
import EmployeeListItem from "./EmployeeListItem";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataArr from '../data';
import EmployeeList from "./EmployeeList";

const data = dataArr.map((ele, idx) => {
    return (
      <EmployeeList key={idx} {...ele} />
    )
  })

export default function EmployeePage(props) {
    const { symbol } = useParams();

    const [employee, setEmployee] = useState(null);

    const getEmployee = async () => {
        try {
            const clickedEmployee = await fetch(data.idx)
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getEmployee()
    }, [])

    const loaded = () => {
        return (
            <div className="employeePage">
                <h1>Employee</h1>
    
                <Link to='/EmplyeePage:symbol'>
                    <div className="employeePageHeader">
                        <img src={props.img} alt={props.name} />
                        <div className="emText">
                            <h3>{props.name}</h3>
                            <p>{props.title}</p>
                        </div>
                    </div>
                </Link>
    
                <Link to='/EmplyeePage:symbol'>
                    <div className="officeNumber">
                        <h4>Call Office</h4>
                        <p>{props.officeNumber}</p>
                    </div>
                </Link>
    
                <Link to='/EmplyeePage:symbol'>
                    <div className="mobileNumber">
                        <h4>Call Mobile</h4>
                        <p>{props.mobileNumber}</p>
                    </div>
                </Link>
    
                <Link to='/EmplyeePage:symbol'>
                    <div className="sms">
                        <h4>SMS</h4>
                        <p>{props.sms}</p>
                    </div>
                </Link>
    
                <Link to='/EmplyeePage:symbol'>
                    <div className="email">
                        <h4>Email</h4>
                        <p>{props.email}</p>
                    </div>
                </Link>
            </div>
        )
    }
    
    const loading = () => {
        <h1>Loading...</h1>
    }
}