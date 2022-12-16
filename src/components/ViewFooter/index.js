import React from "react";

export default function ViewFooter() {
  return (
    <footer className="text-center mt-2 pt-2 pb-2">
      <hr />
      Dog CEO Challenge - {new Date().getFullYear()} - Nelson Rojas
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