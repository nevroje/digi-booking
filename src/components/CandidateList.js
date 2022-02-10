import React from "react";
import _ from "lodash";
import Candidate from "./Candidate";

const CandidateList = ({ candidates, setCandidates }) => {
  const handleRemoveCandidate = (id) => {
    setCandidates(candidates.filter((candidate) => candidate.id !== id));
  };

  return (
    <>
      <div className="candidate-list">
        {/* lodash !_. checks if the values inside(candidates) are empty or not */}
        {!_.isEmpty(candidates) ? (
          candidates.map((candidate) => (
            <Candidate
              key={candidate.id}
              {...candidate}
              handleRemoveCandidate={handleRemoveCandidate}
            />
          ))
        ) : (
          <p className="message">no Candidates added, please add a candidate</p>
        )}
      </div>
    </>
  );
};

export default CandidateList;
