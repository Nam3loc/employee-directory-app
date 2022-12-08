import EmployeeListItem from "./EmployeeListItem"
import dataArr from '../data';

const data = dataArr.map((ele, idx) => {
  return (
    <EmployeeListItem key={idx} {...ele} />
  )
})

export default function EmployeeList(props) {
    return (
        <section className="emList">{data}</section>
    )
}