import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EmployeeItem = ({ employee, onEdit, onDelete }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{employee.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{employee.position}</Card.Subtitle>
        <Card.Text>Salary: ${employee.salary}</Card.Text>
        <Button variant="warning" onClick={() => onEdit(employee)} className="me-2">
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(employee.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EmployeeItem;
