import React from "react";
const ErrorMessage = ({ message }) => {
  return (
    <div className="alert alert-danger alert-dismissible" role="alert">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>No Good!</strong> {message}
    </div>
  );
};

export default ErrorMessage;
