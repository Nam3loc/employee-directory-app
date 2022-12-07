export default function EmployeeListItem(props) {
    return (
        <div className="employeeBox">
            <h3>{props.name}</h3>
            <p>{props.title}</p>
        </div>
    )
}