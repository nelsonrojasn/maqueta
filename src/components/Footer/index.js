import React from "react";

function Footer() {
  return (
    <footer className="text-center mt-2 pt-2 pb-2">
      <hr />
      Dog CEO Challenge - {new Date().getFullYear()} - Por Nelson Rojas
      &nbsp;
      <img
        src="https://www.gravatar.com/avatar/91d7005b68783b104617102f6874a018"
        alt=""
        width="30"
        className="align-text-middle rounded"
      />
    </footer>
  );
}

export default Footer;
