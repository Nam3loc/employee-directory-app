import EmployeeListItem from "./EmployeeListItem"
import dataArr from '../data';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function EmployeeList(props) {
  const [info, setInfo] = useState(null);

  const data = dataArr.map((ele, idx) => {
    return (
      <Link to={`/employee/${idx}`} style={{textDecoration:"none"}}><EmployeeListItem key={idx} {...ele} /></Link>
    )
  })

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
    <main>
      <Header />
			<SearchBar />
      <section className="emList">{data}</section>
    </main>
  )
}