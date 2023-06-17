import { useState } from "react";
import { data } from "./emplyees";
import { ReusableComp } from "./ReusableComponent";
import { Table2 } from "./Table2";

export function Table1() {
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentpage] = useState(1);
  const employeePerPage = 5;
  const lastInd = currentPage * employeePerPage;
  const firstInd = lastInd - employeePerPage;

  const employees = data.slice(firstInd, lastInd);
  const pages = Math.ceil(data.length / employeePerPage);
  const num = [...Array(pages + 1).keys()].slice(1);

  function previous() {
    if (currentPage !== 1) {
      setCurrentpage(currentPage - 1);
    }
  }
  function changePage(id) {
    setCurrentpage(id);
  }
  function nextpage() {
    if (currentPage !== pages) {
      setCurrentpage(currentPage + 1);
    }
  }

  const keys = ["employeeId", "firstName", "lastName", "email"];
  function find(employee) {
    return employee.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(search))
    );
  }

  <Table2 data={data} />;
  return (
    <div className="app">
      <h1 className="text">Table 1</h1>
      <div className="input">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
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
      <ReusableComp data={find(employees)} />
      <div className="pagination-container">
        <ul className="pagination">
          <li className="list-items">
            <a href="#" className="pagelink " onClick={previous}>
              PREV
            </a>
          </li>
          {num.map((e, i) => (
            <li className={`list-items ${currentPage === e ? "active" : ""}`}>
              <a
                key={i}
                href="#"
                className="pagelink "
                onClick={() => changePage(e)}
              >
                {e}
              </a>
            </li>
          ))}
          <li className="list-items">
            <a href="#" className="pagelink " onClick={nextpage}>
              NEXT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
