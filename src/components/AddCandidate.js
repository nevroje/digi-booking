import React from "react";
import CandidateForm from "./CandidateForm";
import {useNavigate} from "react-router-dom"

const AddCandidate = ({candidates, setCandidates }) => {
	const navigate = useNavigate();
  const handleOnSubmit = (candidate) => {
    setCandidates([candidate, ...candidates]);
    navigate("/");
  };

  return (
    <>
      <CandidateForm handleOnSubmit={handleOnSubmit} />
    </>
  );
};

export default AddCandidate;
