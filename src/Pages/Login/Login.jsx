import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    // to reset error
    setLoginError();
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginEmail(data.email);
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "Email Address is required" })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              <Link>
                <span className="label-text">Forget Password</span>
              </Link>
            </label>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
          <input
            className="btn btn-accent w-full"
            type="submit"
            value="Login"
          />
          <div>{loginError && <p>{loginError}</p>}</div>
        </form>
        <p>
          New to doctors portal?{" "}
          <Link className="text-secondary" to="/signup">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
