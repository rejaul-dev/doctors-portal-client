import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import AuthProvider from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const { logOutUser } = useContext(AuthProvider);
  const error = useRouteError();

  const handleLogout = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <p className="text-red-500">Something went wrong!!!</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h2>
        Please <button onClick={handleLogout}>Sign Out</button> and log back in
      </h2>
    </div>
  );
};

export default DisplayError;
