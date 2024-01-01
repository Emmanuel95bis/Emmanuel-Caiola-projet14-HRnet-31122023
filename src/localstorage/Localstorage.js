export const setEmployees = (datas) => {
  //localStorage.removeItem("Employees");
  localStorage.setItem("Employees", JSON.stringify(datas));
  //localStorage.setItem("Employees", datas);
};

export const getEmployees = () => {
  const storedEmployees = localStorage.getItem("Employees");
  // Parse the stored data to convert it into an array
  const employeesArray = JSON.parse(storedEmployees) || [];

  return employeesArray;
};
