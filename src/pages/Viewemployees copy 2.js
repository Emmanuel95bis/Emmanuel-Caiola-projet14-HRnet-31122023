import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Table } from "../components/table/Table";
import { employees } from "../datas/Employees";
import { Input } from "../components/input/Input";
import { Select } from "../components/select/Select";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

import { useState, useEffect } from "react";

import "./Viewemployees.scss";

export function Viewemployees() {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState("10");
  const [nbpages, setNbpages] = useState(0);
  const [displaypage, setDisplaypage] = useState(1);

  const [displayedEntries, setDisplayedEntries] = useState([]);
  /*
  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );
*/
  function filter(table) {
    const filteredEmployees = table.filter((employee) =>
      Object.values(employee).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    );

    return filteredEmployees;
  }

  //const displayedEmployees = search === "" ? employees : filteredEmployees;

  const displayedEmployees =
    displayedEntries.length !== 0
      ? filter(displayedEntries)
      : search === ""
      ? employees
      : filter(employees);

  console.log("search" + search);
  console.log(displayedEmployees);

  const displayedEmployeesLength = displayedEmployees.length;

  // Use this useEffect to update nbpages when displayedEmployees or entries change
  useEffect(() => {
    let q = Math.floor(displayedEmployees.length / entries);
    let r = displayedEmployees.length % entries;
    const newNbPages = r === 0 ? q : q + 1;
    setNbpages(newNbPages);
  }, [displayedEmployees, entries]);

  const startIndex = (displaypage - 1) * Number(entries);
  const endIndex = startIndex + Number(entries);
  const entriesEmployees = displayedEmployees.slice(startIndex, endIndex);

  function changeData(action) {
    switch (action) {
      case "previous":
        setDisplaypage((prevPage) => Math.max(1, prevPage - 1));
        break;
      case "next":
        setDisplaypage((prevPage) => Math.min(nbpages, prevPage + 1));
        break;
      default:
        setDisplaypage(action);
        break;
    }
  }

  function sortOut(headerConcern, incdec) {
    const sortedEmployees = [...displayedEmployees];
    const sortOrder = incdec === "up" ? 1 : -1;

    sortedEmployees.sort((a, b) => {
      const aValue = a[headerConcern];
      const bValue = b[headerConcern];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return (aValue - bValue) * sortOrder;
      } else {
        const lowerA = String(aValue).toLowerCase();
        const lowerB = String(bValue).toLowerCase();

        return lowerA.localeCompare(lowerB) * sortOrder;
      }
    });

    // Update the state with the sorted array
    setDisplayedEntries(sortedEmployees);
  }

  return (
    <>
      <Header />
      <main>
        <div className="entries_search">
          <div className="entries">
            Show
            <Select
              association={""}
              text={""}
              options={["10", "25", "50", "100"]}
              onChange={setEntries}
            />
            entries
          </div>
          <div className="search">
            Search
            <Input
              association={""}
              text={""}
              type={"text"}
              onChange={setSearch}
            />
          </div>
        </div>
        <Table
          header={[
            <span className="tableHeader">
              First Name{" "}
              <div className="facret">
                <FaCaretUp
                  onClick={() => {
                    sortOut("FirstName", "up");
                  }}
                />{" "}
                <FaCaretDown
                  onClick={() => {
                    sortOut("FirstName", "down");
                  }}
                />
              </div>
            </span>,
            <span className="tableHeader">
              Last Name
              <div className="facret">
                <FaCaretUp
                  onClick={() => {
                    sortOut("LastName", "up");
                  }}
                />{" "}
                <FaCaretDown
                  onClick={() => {
                    sortOut("LastName", "down");
                  }}
                />
              </div>
            </span>,
            <span className="tableHeader">
              Start Date
              <div className="facret">
                <FaCaretUp
                  onClick={() => {
                    sortOut("StartDate", "up");
                  }}
                />{" "}
                <FaCaretDown
                  onClick={() => {
                    sortOut("StartDate", "down");
                  }}
                />
              </div>
            </span>,
            <span className="tableHeader">
              Department
              <div className="facret">
                <FaCaretUp
                  onClick={() => {
                    sortOut("Department", "up");
                  }}
                />{" "}
                <FaCaretDown
                  onClick={() => {
                    sortOut("Department", "down");
                  }}
                />
              </div>
            </span>,
            <span className="tableHeader">
              Date of birth
              <div className="facret">
                <FaCaretUp
                  onClick={() => {
                    sortOut("Dateofbirth", "up");
                  }}
                />{" "}
                <FaCaretDown
                  onClick={() => {
                    sortOut("Dateofbirth", "down");
                  }}
                />
              </div>
            </span>,
            <span className="tableHeader">
              Street
              <div className="facret">
                <FaCaretUp
                  onClick={() => {
                    sortOut("Street", "up");
                  }}
                />{" "}
                <FaCaretDown
                  onClick={() => {
                    sortOut("Street", "down");
                  }}
                />
              </div>
            </span>,
            <span className="tableHeader">
              City
              <div className="facret">
                <FaCaretUp
                  onClick={() => {
                    sortOut("City", "up");
                  }}
                />{" "}
                <FaCaretDown
                  onClick={() => {
                    sortOut("City", "down");
                  }}
                />
              </div>
            </span>,
            <span className="tableHeader">
              State
              <div className="facret">
                <FaCaretUp
                  onClick={() => {
                    sortOut("State", "up");
                  }}
                />{" "}
                <FaCaretDown
                  onClick={() => {
                    sortOut("State", "down");
                  }}
                />
              </div>
            </span>,
            <span className="tableHeader">
              Zip Code
              <div className="facret">
                <FaCaretUp
                  onClick={() => {
                    sortOut("ZipCode", "up");
                  }}
                />
                <FaCaretDown
                  onClick={() => {
                    sortOut("ZipCode", "down");
                  }}
                />
              </div>
            </span>,
          ]}
          users={displayedEmployees}
        />
        <div className="basTableau">
          {entries < displayedEmployeesLength
            ? `Showing 1 to ${entries} of ${displayedEmployeesLength} entries`
            : `Showing 1 to ${displayedEmployeesLength} of ${displayedEmployeesLength} entries`}
          <div className="basTableau_previousNext">
            <span onClick={() => changeData("previous")}>Previous </span>
            {Array.from({ length: nbpages }, (_, index) => (
              <span
                key={index}
                className="span_pages"
                onClick={() => changeData(index + 1)}
              >
                {index + 1}
              </span>
            ))}
            <span onClick={() => changeData("next")}>Next</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
