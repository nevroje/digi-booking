import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddCandidate from "../components/AddCandidate";
import Navigation from "../components/Navigation";
import CandidateList from "../components/CandidateList";
import LocalStorage from "../hooks/LocalStorage";
import UpdateCandidate from "../components/UpdateCandidate";

const AppRouter = () => {
  const [candidates, setCandidates] = LocalStorage("candidates", []);

  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <div className="main-wrapper">
          <Routes>
            <Route
              element={
                <CandidateList
                  candidates={candidates}
                  setCandidates={setCandidates}
                />
              }
              path="/"
            />
            <Route
              element={
                <AddCandidate
                  candidates={candidates}
                  setCandidates={setCandidates}
                />
              }
              path="/add"
            />
            <Route
              element={
                <UpdateCandidate
                  candidates={candidates}
                  setCandidates={setCandidates}
                />
              }
              path="/edit/:id"
            />
            <Route element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
