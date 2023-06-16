import { useState } from "react";
import { data } from "./emplyees";
import { ReusableComp } from "./ReusableComponent";

export function Table2() {
  const [sorted, setSorted] = useState("ascending");
  const [search, setSearch] = useState("");

  const [datas, setDatas] = useState(data);

  let sortingarray = ["employeeId", "firstName", "lastName", "email"];

  let sorting = (column) => {
    if (sorted === "ascending") {
      const sort = [...datas].sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      );
      setDatas(sort);
      setSorted("descending");
    }
    if (sorted === "descending") {
      const sort = [...datas].sort((a, b) =>
        a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      );
      setDatas(sort);
      setSorted("ascending");
    }
  };

  const keys = ["employeeId", "firstName", "lastName", "email"];
  function find(employee) {
    return employee.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(search))
    );
  }

  return (
    <div>
      <h1 className="text">Table 2</h1>
      SORT:{" "}
      <select className="select" onChange={(e) => sorting(e.target.value)}>
        {sortingarray.map((item, index) => (
          <option className="options" key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button className="select" onClick={()=>window.location.reload()}>REFRESH</button>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                className="search"
                placeholder="Id"
                onChange={(e) => setSearch(e.target.value)}
              />{" "}
            </td>
            <td>
              <input
                className="search"
                placeholder="FirstName"
                onChange={(e) => setSearch(e.target.value)}
              />{" "}
            </td>
            <td>
              <input
                className="search"
                placeholder="LastName"
                onChange={(e) => setSearch(e.target.value)}
              />{" "}
            </td>
            <td>
              <input
                className="search"
                placeholder="Email"
                onChange={(e) => setSearch(e.target.value)}
              />{" "}
            </td>
          </tr>
        </tbody>
      </table>
      <ReusableComp data={find(datas)} />
    </div>
  );
}
