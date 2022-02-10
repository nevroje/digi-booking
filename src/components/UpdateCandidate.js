import React from "react";
import CandidateForm from "./CandidateForm";
import { useParams, useNavigate } from "react-router-dom";

const UpdateCandidate = ({candidates, setCandidates}) => {
	const navigate = useNavigate();
  const { id } = useParams();
  const candidateEdit = candidates.find((candidate) => candidate.id === id);

  const handleOnSubmit = (candidate) => {
    const filterCandidates = candidates.filter((candidate) => candidate.id !== id);

    setCandidates([candidate, ...filterCandidates]);
    navigate("/");
  };

  return (
    <div>
      <CandidateForm
        candidate={candidateEdit}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
};

export default UpdateCandidate;
