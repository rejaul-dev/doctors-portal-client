import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const { logOutUser } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate()

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        navigate('/login')
      })
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
