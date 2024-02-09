
    // Using template literals and object destructuring

    var Employeedetails = [
        { Employeename: "John", Employeeaddress: "Doe ", Employeenumber: 1234567, Employeesalary: 900000, department: "Marketing" },
        { Employeename: "Jane", Employeeaddress: "Doe ", Employeenumber: 1234568, Employeesalary: 800000, department: "Sales" },
        { Employeename: "Gwen", Employeeaddress: "stacy", Employeenumber: 123445, Employeesalary: 12000, department: "sales"},
        { Employeename: "Peter", Employeeaddress: "Doe ", Employeenumber: 1234569, Employeesalary: 750000, department: "Engineering" },
    ];
  
  
  
  
    //using template & obj
    var getfulldetails = Employeedetails.map(({ Employeename, Employeeaddress, Employeenumber, Employeesalary, department }) => {
        return `${Employeename}${Employeeaddress} - ${Employeenumber} - ${Employeesalary} - ${department}`;
    });
  
    console.log(getfulldetails);
  
  
  
  
    var totalSalary = Employeedetails.reduce((prev, { Employeesalary }) => prev + Employeesalary, 0);
    console.log(totalSalary);
  
  
  
  function filterEmployees() {
  const departmentInput = document.getElementById("departmentInput");
  const filteredEmployees = document.getElementById("filteredEmployees");
  const department = departmentInput.value.toLowerCase();
  
  filteredEmployees.innerHTML = ""; 
  
  
  const filteredList = Employeedetails.filter(employee => employee.department.toLowerCase() === department);
  
  
  if (filteredList.length > 0) {
    filteredEmployees.innerHTML = "<h2>Employees in " + department.toUpperCase() + " department:</h2>";
    filteredList.forEach(employee => {
      filteredEmployees.innerHTML += `<p>${employee.Employeename} - ${employee.department}</p>`;
    });
  } else {
    filteredEmployees.innerHTML = "No employees found in that department.";
  }
  }
  
  function addEmployee() {
    const newEmployeename = document.getElementById("newEmployeename").value;
    const newEmployeeaddress = document.getElementById("newEmployeeaddress").value;
    const newEmployeenumber = parseInt(document.getElementById("newEmployeenumber").value);
    const newEmployeesalary = parseInt(document.getElementById("newEmployeesalary").value);
    const newDepartment = document.getElementById("newDepartment").value;
  
    // Add new employee object to Employeedetails array
    Employeedetails.push({
      Employeename: newEmployeename,
      Employeeaddress: newEmployeeaddress,
      Employeenumber: newEmployeenumber,
      Employeesalary: newEmployeesalary,
      department: newDepartment
    });
    updateEmployeeTable();
  }
  
  
  function updateEmployeeTable() {
    const employeeTable = document.getElementById("employeeTable");
    const tbody = employeeTable.querySelector("tbody");
  
  
    tbody.innerHTML = "";
  
  
    Employeedetails.forEach(employee => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${employee.Employeename}</td>
        <td>${employee.Employeeaddress}</td>
        <td>${employee.Employeenumber}</td>
        <td>${employee.Employeesalary}</td>
        <td>${employee.department}</td>
      `;
      tbody.appendChild(newRow);
    });
  }
  
  updateEmployeeTable();
  
