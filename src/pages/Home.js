import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { ButtonPrimary } from "../components/buttons/buttonPrimary";
import { Input } from "../components/input/Input";
import { Select } from "../components/select/Select";
import { states } from "../datas/States";
import { Title } from "../components/title/Title";
import { Inputcalendar } from "../components/inputcalendar/inputcalendar";

import { setEmployees, getEmployees } from "../localstorage/Localstorage";
import { useState } from "react";

import { toastSuccess, toastError, Toast } from "../components/toast/toast";

import "./Home.scss";

export function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [startdate, setStartdate] = useState("");
  const [department, setDepartment] = useState("Sales");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState([]);

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
      if (element.name === state) {
        ab = element.abbreviation;
      }
    });
    return ab;
  }

  function saveEmployee() {
    errors = [];
    errors[4] = 0;
    errors[0] = syntaxeControle(firstname, "1");
    errors[1] = syntaxeControle(lastname, "1");
    errors[2] = syntaxeControle(street, "2");
    errors[3] = syntaxeControle(city, "1");
    errors[5] = syntaxeControle(DateOfBirth, "3");
    errors[6] = syntaxeControle(startdate, "3");
    if (errors[4] === 1) toastError("Saisie incorrecte");

    if (errors[4] === 0) {
      const updatedStorage = getEmployees();

      const stateAbbreviation = searchAbbreviationState();
      let employeeData = {
        FirstName: firstname,
        LastName: lastname,
        StartDate: startdate,
        Department: department,
        DateOfBirth: DateOfBirth,
        Street: street,
        City: city,
        State: stateAbbreviation,
        ZipCode: zipcode,
      };

      updatedStorage.push(employeeData);

      console.log(updatedStorage);
      setEmployees(updatedStorage);

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
              association={"first-name"}
              text={"First Name (saisie 'a-z')"}
              type={"text"}
              onChange={setFirstname}
            />

            {error[0] === 1 ? (
              <span aria-label="Taille insuffisante">Taille insuffisante</span>
            ) : null}
            {error[0] === 2 ? (
              <span aria-label="Saisie erronée">Saisie erronée</span>
            ) : null}
            {error[0] === 3 ? (
              <span aria-label="Taille insuffisante et saisie erronée">
                Taille insuffisante et saisie erronée
              </span>
            ) : null}
            <Input
              association={"last-name"}
              text={"Last Name (saisie 'a-z')"}
              type={"text"}
              onChange={setLastname}
            />
            {error[1] === 1 ? (
              <span aria-label="Taille insuffisante">Taille insuffisante</span>
            ) : null}
            {error[1] === 2 ? (
              <span aria-label="Saisie erronée">Saisie erronée</span>
            ) : null}
            {error[1] === 3 ? (
              <span aria-label="Taille insuffisante et saisie erronée">
                Taille insuffisante et saisie erronée
              </span>
            ) : null}

            <label>Date of Birth</label>
            <Inputcalendar onChange={setDateOfBirth} />
            {error[5] === 1 ? (
              <span>Veuillez sellectionner une date</span>
            ) : null}
            <Toast />
            <label>Start Date</label>
            <Inputcalendar onChange={setStartdate} />
            {error[6] === 1 ? (
              <span aria-label="Veuillez sellectionner une date">
                Veuillez sellectionner une date
              </span>
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
              onChange={setDepartment}
            />
          </div>
          <fieldset className="createmployee_where">
            <legend>Address</legend>

            <Input
              association={"street"}
              text={"Street (saisie 'alphanumérique')"}
              type={"text"}
              onChange={setStreet}
            />

            {error[2] === 1 ? (
              <span aria-label="Taille insuffisante">Taille insuffisante</span>
            ) : null}
            {error[2] === 2 ? (
              <span aria-label="Saisie erronée">Saisie erronée</span>
            ) : null}
            {error[2] === 3 ? (
              <span aria-label="Taille insuffisante et saisie erronée">
                Taille insuffisante et saisie erronée
              </span>
            ) : null}

            <Input
              association={"city"}
              text={"City  (saisie 'a-z')"}
              type={"text"}
              onChange={setCity}
            />
            {error[3] === 1 ? (
              <span aria-label="Taille insuffisante">Taille insuffisante</span>
            ) : null}
            {error[3] === 2 ? (
              <span aria-label="Saisie erronée">Saisie erronée</span>
            ) : null}
            {error[3] === 3 ? (
              <span aria-label="Taille insuffisante et saisie erronée">
                Taille insuffisante et saisie erronée
              </span>
            ) : null}
            <Select
              association={"state"}
              text={"State"}
              options={states.map((element) => element.name)}
              onChange={setState}
            />

            <Input
              association={"zip-code"}
              text={"zip-code"}
              type={"number"}
              onChange={setZipcode}
            />
          </fieldset>
        </div>

        <ButtonPrimary
          children={"Save"}
          handleClick={saveEmployee}
          type={"button"}
        />
      </main>

      <Footer />
    </>
  );
}
