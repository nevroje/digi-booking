import React from "react";
import { NavLink }from "react-router-dom";

const Navigation = () => {
	return (
			<header className="header">
				<h1>Candidates</h1>
				<div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
						Candidates
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Candidates
        </NavLink>
      </div>
			</header>
	)
}

export default Navigation;
