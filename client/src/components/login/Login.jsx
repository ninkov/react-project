import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

import styles from "./login.module.css";
import { useState } from "react";

const initialValue = { email: "", password: "" };

export default function Login() {
  const login = useLogin();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const loginHandler = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const { values, changeHandler, submitHandler } = useForm(
    initialValue,
    loginHandler
  );

  return (
    <div className={styles["login-wrap"]}>
      <div className="col-lg-5">
        <div className="bg-primary py-5 px-5 px-sm-5">
          <form className="py-5" onSubmit={submitHandler}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control border-0 p-4"
                id="email"
                value={values.email}
                onChange={changeHandler}
                placeholder="Your Email"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control border-0 p-4"
                id="password"
                value={values.password}
                onChange={changeHandler}
                placeholder="Password"
                required="required"
              />
            </div>
            {error && (
              <p>
                <span
                  style={{
                    fontSize: "16px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {error}
                </span>
              </p>
            )}
            <div>
              <button
                className="btn btn-dark btn-block border-0 py-3"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
