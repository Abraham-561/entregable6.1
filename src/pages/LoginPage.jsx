import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import "./slices/css/LoginPage.css";

const LoginPage = () => {
  const { handleSubmit, register, reset } = useForm();

  const { loginUser } = useAuth();

  const submit = (data) => {
    loginUser(data);
    reset({
      email: "",
      password: "",
    });
  };
  return (
    <div className="login_container">
      <div className="login_container_img">
        <img src="./imagenes/hotel2.jpg" alt="" />
      </div>

      <div className="container_form_info">
        <form className="login_form" onSubmit={handleSubmit(submit)}>
          <h2 className="login_title">Login User</h2>
          <div className="login_info">
            <label className="login_label">
              <span className="login_span">Email</span>
              <input
                className="login_input"
                {...register("email")}
                type="email"
              />
            </label>
            <label className="login_label">
              <span className="login_span">Password</span>
              <input
                className="login_input"
                {...register("password")}
                type="password"
              />
            </label>
          </div>
          <button className="login_button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
