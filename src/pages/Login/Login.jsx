import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <section className="main">
        <article className="login-cont">
          <form action="">
            <h2>LogIn</h2>
            <input type="text" placeholder="USER" />
            <input type="password" placeholder="PASSWORD" />
            <button>Login</button>
          </form>
        </article>
        <article className="signup-cont">
          <h2>SignUp</h2>
          <form action="signup-cont">
            <input type="text" placeholder="USER" />
            <input type="password" placeholder="PASSWORD" />
            <button>Login</button>
          </form>
        </article>
      </section>
    </>
  );
}

export default Login;
