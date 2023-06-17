import { useState } from "react";
import { data } from "./emplyees";
import { ReusableComp } from "./ReusableComponent";
import { useNavigate } from "react-router-dom";

export function Table2() {
  const [sorted, setSorted] = useState("ascending");
  const [search, setSearch] = useState("");

  const [datas, setDatas] = useState(data);
  const navigate = useNavigate();
  let sortingarray = ["employeeId", "firstName", "lastName", "email"];

  let numsorting = (column) => {
    if (sorted === "ascending") {
      const sort = [...datas].sort((a, b) => a[column] - b[column]);
      setDatas(sort);
      setSorted("descending");
    }
    if (sorted === "descending") {
      const sort = [...datas].sort((a, b) => b[column] - a[column]);
      setDatas(sort);
      setSorted("ascending");
    }
  };

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

      <button className="select" onClick={() => navigate(-1)}>
        REFRESH
      </button>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                className="search1"
                placeholder="Id"
                onChange={(e) => setSearch(e.target.value)}
              />{" "}
              <button className="sort" onClick={() => numsorting("employeeId")}>
                sort
              </button>
            </td>
            <td>
              <input
                className="search1"
                placeholder="FirstName"
                onChange={(e) => setSearch(e.target.value)}
              />{" "}
              <button className="sort" onClick={() => sorting("firstName")}>
                sort
              </button>
            </td>
            <td>
              <input
                className="search1"
                placeholder="LastName"
                onChange={(e) => setSearch(e.target.value)}
              />{" "}
              <button className="sort" onClick={() => sorting("lastName")}>
                sort
              </button>
            </td>
            <td>
              <input
                className="search1"
                placeholder="Email"
                onChange={(e) => setSearch(e.target.value)}
              />{" "}
              <button className="sort" onClick={() => sorting("email")}>
                sort
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <ReusableComp data={find(datas)} />
    </div>
  );
}
