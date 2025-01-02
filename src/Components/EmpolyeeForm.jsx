import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const EmployeeForm = ({ employee, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    salary: '',
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name,
        position: employee.position,
        salary: employee.salary,
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ name: '', position: '', salary: '' });
  };

  return (
    <Container>
      <h2 className="my-4 text-center">{employee ? 'Update' : 'Add'} Employee</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPosition" className="mt-3">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Enter position"
            required
          />
        </Form.Group>

        <Form.Group controlId="formSalary" className="mt-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Enter salary"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          {employee ? 'Update' : 'Add'} Employee
        </Button>
      </Form>
    </Container>
  );
};

export default EmployeeForm;
