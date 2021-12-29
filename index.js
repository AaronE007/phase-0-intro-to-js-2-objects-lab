const employee = {
    name: "Jim",
    streetAdress: "1725 Slough Avenue",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
  
   newEmployee[key] = value;
  
    return newEmployee;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee };
    
    delete newObj[key];
    
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    delete employee.streetAdress
    return employee
}