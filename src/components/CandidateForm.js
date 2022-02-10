import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const CandidateForm = (props) => {
  // useState hook with all data
  const [candidate, setCandidate] = useState({
    candidatename: props.candidate ? props.candidate.candidatename : "",
    candidateage: props.candidate ? props.candidate.candidateage : "",
    candidateemail: props.candidate ? props.candidate.candidateemail : "",
    candidateaddress: props.candidate ? props.candidate.candidateaddress : "",
    candidatestage: props.candidate ? props.candidate.candidatestage : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const {
    candidatename,
    candidateage,
    candidateemail,
    candidateaddress,
    candidatestage,
  } = candidate;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [
      candidatename,
      candidateage,
      candidateemail,
      candidateaddress,
      candidatestage,
    ];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const candidate = {
        id: uuidv4(),
        candidatename,
        candidateage,
        candidateemail,
        candidateaddress,
        candidatestage,
      };
      props.handleOnSubmit(candidate);
    } else {
      errorMsg = "Required field";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "candidatename":
        {
          setCandidate((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "candidateage":
        if (value === "" || parseInt(value) === +value) {
          setCandidate((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "candidateemail":
        {
          setCandidate((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "candidateaddress":
        {
          setCandidate((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "candidatestage":
        {
          setCandidate((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setCandidate((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };
  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Candidate name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="candidatename"
            value={candidatename}
            placeholder="Candidates Name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Candidate Age</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="candidateage"
            value={candidateage}
            placeholder="Candidates Age"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Candidate Email</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="candidateemail"
            value={candidateemail}
            placeholder="Candidates Email"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Candidate Address</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="candidateaddress"
            value={candidateaddress}
            placeholder="Candidates Address"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="stage">
          <Form.Label>Candidate Status</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="candidatestage"
            value={candidatestage}
            placeholder="Candidates Status"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CandidateForm;
