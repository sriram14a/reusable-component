

export function ReusableComp({ data }) {

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th className="thead">Emp Id</th>
            <th className="thead">FirstName</th>
            <th className="thead">FirstName</th>
            <th className="thead">Email</th>
          </tr>
          {data.map((item) => (
            <tr key={item.firstName}>
              <td className="tdata">{item.employeeId}</td>
              <td className="tdata">{item.firstName}</td>
              <td className="tdata">{item.lastName}</td>
              <td className="tdata">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
