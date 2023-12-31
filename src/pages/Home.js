import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { ButtonPrimary } from "../components/buttons/buttonPrimary";
import { Input } from "../components/input/Input";
import { Select } from "../components/select/Select";
import { states } from "../datas/States";
import { Title } from "../components/title/Title";

import { setEmployees, getEmployees } from "../localstorage/Localstorage";
import { useState } from "react";

import "./Home.scss";

export function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [startdate, setStartdate] = useState("");
  const [department, setDepartment] = useState("Sales");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState([]);

  let storage = [];
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
      if (flag !== 0) {
        return flag;
      } else {
        return flag;
      }
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

      return flag;
    }

    // Handle the case when typeControl is neither "1" nor "2"
    errors[4] = false;
    return false;
  }

  function saveEmployee() {
    errors = [];

    errors[0] = syntaxeControle(firstname, "1");
    errors[1] = syntaxeControle(lastname, "1");
    errors[2] = syntaxeControle(street, "2");
    errors[3] = syntaxeControle(city, "1");

    console.log("11111111");
    const updatedStorage = getEmployees();
    console.log(storage);
    storage.push(updatedStorage);
    storage.push(
      [3],
      [
        firstname,
        lastname,
        startdate,
        department,
        dateofbirth,
        street,
        city,
        state,
        zipcode,
      ]
    );
    //let data=[firstname,lastname,startdate,department,dateofbirth,street,city,state,zipcode]
    console.log(storage[1]);
    setEmployees(storage);

    setError(errors);
  }

  return (
    <>
      <Header />
      <main>
        <div class="title">
          <Title type={"h2"} content={"Create Employee"} />
        </div>
        <div class="createmployee">
          <div class="createmployee_who">
            <Input
              association={"first-name"}
              text={"First Name (saisie 'a-z')"}
              type={"text"}
              onChange={setFirstname}
            />
            {console.log("errors[0] in code" + error[0])}
            {error[0] === 1 ? <span>Taille insuffisante</span> : null}
            {error[0] === 2 ? <span>Saisie erronée</span> : null}
            {error[0] === 3 ? (
              <span>Taille insuffisante et saisie erronée</span>
            ) : null}
            <Input
              association={"last-name"}
              text={"Last Name (saisie 'a-z')"}
              type={"text"}
              onChange={setLastname}
            />
            {error[1] === 1 ? <span>Taille insuffisante</span> : null}
            {error[1] === 2 ? <span>Saisie erronée</span> : null}
            {error[1] === 3 ? (
              <span>Taille insuffisante et saisie erronée</span>
            ) : null}
            <Input
              association={"date-of-birth"}
              text={"Date of Birth"}
              type={"text"}
              onChange={setDateofbirth}
            />

            <Input
              association={"start-date"}
              text={"Start Date"}
              type={"text"}
              onChange={setStartdate}
            />

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
          <fieldset class="createmployee_where">
            <legend>Address</legend>

            <Input
              association={"street"}
              text={"Street (saisie 'alphanumérique')"}
              type={"text"}
              onChange={setStreet}
            />

            {error[2] === 1 ? <span>Taille insuffisante</span> : null}
            {error[2] === 2 ? <span>Saisie erronée</span> : null}
            {error[2] === 3 ? (
              <span>Taille insuffisante et saisie erronée</span>
            ) : null}

            <Input
              association={"city"}
              text={"City  (saisie 'a-z')"}
              type={"text"}
              onChange={setCity}
            />
            {error[3] === 1 ? <span>Taille insuffisante</span> : null}
            {error[3] === 2 ? <span>Saisie erronée</span> : null}
            {error[3] === 3 ? (
              <span>Taille insuffisante et saisie erronée</span>
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
