import "./style.scss";

export function Table({ header, users }) {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          {header.map((element, index) => (
            <th key={index}>
              {element}
              <div>
                <i className="fa-solid fa-caret-up"></i>
                <i className="fa-solid fa-caret-down"></i>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((employee, rowIndex) => (
          <tr key={rowIndex}>
            <td>{employee.FirstName}</td>
            <td>{employee.LastName}</td>
            <td>{employee.StartDate}</td>
            <td>{employee.Department}</td>
            <td>{employee.DateOfBirth}</td>
            <td>{employee.Street}</td>
            <td>{employee.City}</td>
            <td>{employee.State}</td>
            <td>{employee.ZipCode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
