import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Candidate = ({
  id,
  candidatename,
  candidateage,
  candidateemail,
  candidateaddress,
  candidatestage,
  handleRemoveCandidate,
}) => {
  const navigate = useNavigate();

  return (
    <Row style={{ width: "30rem" }} className="grid-cards">
      <Col>
        <Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title className="card-title">{candidatename}</Card.Title>
            <Card.Text>
              <div>candidates age: {candidateage}</div>
              <div>candidates email: {candidateemail}</div>
              <div>candidates address: {candidateaddress}</div>
              <div>candidates stage: {candidatestage}</div>
            </Card.Text>
            <Button className="card-buttons" onClick={() => navigate(`/edit/${id}`)}>
              Edit
            </Button>{" "}
            <Button className="card-buttons" onClick={() => handleRemoveCandidate(id)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Candidate;
