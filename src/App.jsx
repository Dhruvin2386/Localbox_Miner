import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import EmployeeForm from './Components/EmpolyeeForm';
import EmployeeList from './Components/EmployeeLists';
import { FaPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const saveEmployee = (employeeData) => {
    let updatedEmployees = [...employees];
    if (selectedEmployee) {
      updatedEmployees = updatedEmployees.map((employee) =>
        employee.id === selectedEmployee.id ? { ...employee, ...employeeData } : employee
      );
    } else {
      const newEmployee = { ...employeeData, id: Date.now() };
      updatedEmployees.push(newEmployee);
    }

    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setSelectedEmployee(null);
  };

  const editEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <Container>
      <h1 className="my-4 text-center">Employee Management System</h1>

      <EmployeeForm employee={selectedEmployee} onSave={saveEmployee} />

      <h2 className="my-4">Employee List</h2>
      <EmployeeList employees={employees} onEdit={editEmployee} onDelete={deleteEmployee} />
    </Container>
  );
};

export default App;
