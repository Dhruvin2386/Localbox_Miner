import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import EmployeeItem from './EmpolyeeItems';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <Row>
      {employees.map((employee) => (
        <Col sm={12} md={6} lg={4} key={employee.id} className="mb-4">
          <EmployeeItem
            employee={employee}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </Col>
      ))}
    </Row>
  );
};

export default EmployeeList;
