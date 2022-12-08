import React from "react";

function Header() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.gravatar.com/avatar/91d7005b68783b104617102f6874a018"
            alt="Logo"
            width="30"
            className="d-inline-block align-text-top rounded"
          />
          <strong className="ml-4">Dog Ceo Challenge</strong>
        </a>
      </div>
    </nav>
  );
}

export default Header;
