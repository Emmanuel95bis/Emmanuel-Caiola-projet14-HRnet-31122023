import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { ButtonPrimary } from "../components/buttons/buttonPrimary";
import { Input } from "../components/input/Inputv2po";
import { Select } from "../components/select/Selectv2po";
import { states } from "../datas/States";
import { Title } from "../components/title/Title";
import { Inputcalendar } from "../components/inputcalendar/inputcalendar";
import { addEmployee } from "../reducer/employeesReducer";
import { useDispatch } from "react-redux";

//import { setEmployees, getEmployees } from "../localstorage/Localstorage";
import { useEffect, useState } from "react";

import { toastSuccess, toastError, Toast } from "../components/toast/toast";

import "./Home.scss";

export function Home() {
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [startdate, setStartdate] = useState("");

  const [error, setError] = useState([]);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(e);
    console.log(id, value);
    setUser({ ...user, [id]: value });
  };
  useEffect(() => {
    console.log(user.firstName);
  }, [user]);

  let errors = [];

  function syntaxeControle(varControl, typeControl) {
    let flag = 0;

    if (typeControl === "2") {
      if (varControl.length < 3) flag = 1;
      for (let i = 0; i < varControl.length; ++i) {
        if (
          (varControl[i] < "0" || varControl[i] > "9") &&
          (varControl[i] < "a" || varControl[i] > "z") &&
          (varControl[i] < "A" || varControl[i] > "Z") &&
          varControl[i] !== " "
        ) {
          flag === 1 ? (flag = 3) : (flag = 2);
        }
      }
      if (flag !== 0) errors[4] = 1;
      return flag;
    }

    flag = 0;

    if (typeControl === "1") {
      if (varControl.length < 3) flag = 1;
      for (let i = 0; i < varControl.length; ++i) {
        if (
          (varControl[i] < "a" || varControl[i] > "z") &&
          (varControl[i] < "A" || varControl[i] > "Z") &&
          varControl[i] !== " "
        ) {
          flag === 1 ? (flag = 3) : (flag = 2);
        }
      }
      if (flag !== 0) errors[4] = 1;
      return flag;
    }

    flag = 0;

    if (typeControl === "3") {
      if (varControl === "") flag = 1;

      if (flag !== 0) errors[4] = 1;
      return flag;
    }
  }

  function searchAbbreviationState() {
    let ab = "";
    states.forEach((element) => {
      if (element.name === user.state) {
        ab = element.abbreviation;
      }
    });
    return ab;
  }

  function saveEmployee() {
    errors = [];
    errors[4] = 0;
    errors[0] = syntaxeControle(user.firstName, "1");
    errors[1] = syntaxeControle(user.lastName, "1");
    errors[2] = syntaxeControle(user.street, "2");
    errors[3] = syntaxeControle(user.city, "1");
    errors[5] = syntaxeControle(DateOfBirth, "3");
    errors[6] = syntaxeControle(startdate, "3");
    if (errors[4] === 1) toastError("Saisie incorrecte");

    if (errors[4] === 0) {
      //const updatedStorage = getEmployees();

      const stateAbbreviation = searchAbbreviationState();
      let employeeData = {
        FirstName: user.firstName,
        LastName: user.lastName,
        StartDate: startdate,
        Department: user.department,
        DateOfBirth: DateOfBirth,
        Street: user.street,
        City: user.city,
        State: stateAbbreviation,
        ZipCode: user.zipcode,
      };

      //updatedStorage.push(employeeData);

      //console.log(updatedStorage);
      //setEmployees(updatedStorage);
      dispatch(addEmployee(employeeData));

      toastSuccess("Félicitation,vous êtes entré dans la base de HRnet");
    }
    setError(errors);
  }

  return (
    <>
      <Header />
      <main>
        <div className="title">
          <Title type={"h2"} content={"Create Employee"} />
        </div>
        <div className="createmployee">
          <div className="createmployee_who">
            <Input
              association={"firstName"}
              text={"First Name (saisie 'a-z')"}
              type={"text"}
              onChange={handleChange}
              aria="First Name"
            />

            {error[0] === 1 ? (
              <span role="alert">Taille insuffisante</span>
            ) : null}
            {error[0] === 2 ? <span role="alert">Saisie erronée</span> : null}
            {error[0] === 3 ? (
              <span role="alert">Taille insuffisante et saisie erronée</span>
            ) : null}
            <Input
              association={"lastName"}
              text={"Last Name (saisie 'a-z')"}
              type={"text"}
              onChange={handleChange}
              aria="Last Name"
            />
            {error[1] === 1 ? (
              <span role="alert">Taille insuffisante</span>
            ) : null}
            {error[1] === 2 ? <span role="alert">Saisie erronée</span> : null}
            {error[1] === 3 ? (
              <span role="alert">Taille insuffisante et saisie erronée</span>
            ) : null}

            <label>Date of Birth</label>
            <Inputcalendar
              onChange={setDateOfBirth}
              aria-label="Select Date of Birth"
            />
            {error[5] === 1 ? (
              <span role="alert">Veuillez sellectionner une date</span>
            ) : null}
            <Toast />
            <label>Start Date</label>
            <Inputcalendar
              onChange={setStartdate}
              aria-label="Select Start Date"
            />
            {error[6] === 1 ? (
              <span role="alert">Veuillez sellectionner une date</span>
            ) : null}

            <Select
              association={"department"}
              text={"Department"}
              options={[
                "Sales",
                "Marketing",
                "Engineering",
                "Human Resources",
                "Legal",
              ]}
              onChange={handleChange}
              aria="Department"
            />
          </div>
          <fieldset className="createmployee_where">
            <legend>Address</legend>

            <Input
              association={"street"}
              text={"Street (saisie 'alphanumérique')"}
              type={"text"}
              onChange={handleChange}
              aria="Street"
            />

            {error[2] === 1 ? (
              <span role="alert">Taille insuffisante</span>
            ) : null}
            {error[2] === 2 ? <span role="alert">Saisie erronée</span> : null}
            {error[2] === 3 ? (
              <span role="alert">Taille insuffisante et saisie erronée</span>
            ) : null}

            <Input
              association={"city"}
              text={"City  (saisie 'a-z')"}
              type={"text"}
              onChange={handleChange}
              aria="City"
            />
            {error[3] === 1 ? (
              <span role="alert">Taille insuffisante</span>
            ) : null}
            {error[3] === 2 ? <span role="alert">Saisie erronée</span> : null}
            {error[3] === 3 ? (
              <span role="alert">Taille insuffisante et saisie erronée</span>
            ) : null}
            <Select
              association={"state"}
              text={"State"}
              options={states.map((element) => element.name)}
              onChange={handleChange}
              aria="State"
            />

            <Input
              association={"zipcode"}
              text={"zip-code"}
              type={"number"}
              onChange={handleChange}
              aria="zip code"
            />
          </fieldset>
        </div>

        <ButtonPrimary
          children={"Save"}
          handleClick={saveEmployee}
          type={"button"}
          aria="Save Employee"
        />
      </main>

      <Footer />
    </>
  );
}
