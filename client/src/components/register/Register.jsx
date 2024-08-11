import styles from "./register.module.css";
export default function Register() {
  return (
    <div className={styles["register-wrap"]} >
      <div className="col-lg-5">
        <div className="bg-primary py-5 px-5 px-sm-5">
          <form className="py-5">
            <div className="form-group">
              <input
                type="text"
                name="username"
                className="form-control border-0 p-4"
                id="username"
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
            <div className="form-group">
              <input
                type="password"
                name="rePass"
                className="form-control border-0 p-4"
                id="rePass"
                placeholder="Repeat Password"
                required="required"
              />
            </div>
          
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
    //        <section id="register-page" className="content auth">
    //        <form id="register">
    //            <div className="container">
    //                <div className="brand-logo">Logo</div>
    //                <h1>Register</h1>

    //                <label htmlFor="email">Email:</label>
    //                <input type="email" id="email" name="email" placeholder="maria@email.com"/>

    //                <label htmlFor="pass">Password:</label>
    //                <input type="password" name="password" id="register-password"/>

    //                <label htmlFor="con-pass">Confirm Password:</label>
    //                <input type="password" name="confirm-password" id="confirm-password"/>

    //                <input className="btn submit" type="submit" value="Register"/>

    //                <p className="field">
    //                    <span>If you already have profile click <a href="#">here</a></span>
    //                </p>
    //            </div>
    //        </form>
    //    </section>
  );
}
