import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import styles from "./register.module.css";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

const initialValue = { username: "", email: "", password: "", rePass: "" };

export default function Register() {
  const [error, setError] = useState("");
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    if (values.password !== values.rePass) {
      setError(`Password mis match!`);
      return;
    }
    try {
      await register(values.email, values.password);
      navigate("/");
    } catch (err) {
      setError(err.message)
      
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValue,
    registerHandler
  );

  return (
    <div className={styles["register-wrap"]}>
      <div className="col-lg-5">
        <div className="bg-primary py-5 px-5 px-sm-5">
          <form className="py-5" onSubmit={submitHandler}>
            <div className="form-group">
              <input
                type="text"
                name="username"
                className="form-control border-0 p-4"
                id="username"
                value={values.username}
                onChange={changeHandler}
                placeholder="Name"
                required="required"
              />
            </div>
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
            <div className="form-group">
              <input
                type="password"
                name="rePass"
                className="form-control border-0 p-4"
                id="rePass"
                value={values.rePass}
                onChange={changeHandler}
                placeholder="Repeat Password"
                required="required"
              />
            </div>
            {error && (
              <p>
                <span style={{fontSize: '16px', color:'white',textAlign:'center'}}>{error}</span>
              </p>
            )}
            <div>
              <button
                className="btn btn-dark btn-block border-0 py-3"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
