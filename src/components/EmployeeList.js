import EmployeeListItem from "./EmployeeListItem"
import dataArr from '../data';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function EmployeeList(props) {
  const [info, setInfo] = useState(null);

  const data = dataArr.map((ele, idx) => {
    return (
      <EmployeeListItem key={idx} {...ele} />
    )
  })

  const { id } = useParams();

  const getInfo = async () => {
    try {
      const getDataId = data.find(element => element.id);

      setInfo(getDataId);

    } catch (err) {
      console.error(err);
    }
  } 

  useEffect(() => {
    getInfo()
  }, []);

  return (
    <Link to={`/${id}`} style={{textDecoration:"none"}}><section className="emList">{data}</section></Link>
  )
}