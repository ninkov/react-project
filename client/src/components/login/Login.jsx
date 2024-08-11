import styles from './login.module.css'
export default function Login() {
  return (
    <div className={styles["login-wrap"]}>
      <div className="col-lg-5">
        <div className="bg-primary py-5 px-5 px-sm-5">
          <form className="py-5">
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control border-0 p-4"
                id="email"
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
                placeholder="Password"
                required="required"
              />
            </div>

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
