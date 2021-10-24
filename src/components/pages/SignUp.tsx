import headerImg from "../../assets/images/header.jpg";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signup-login-route">
      <main>
        <header>
          <img src={headerImg} alt="header_image" />
        </header>
        <div>Please enter your signup credentials</div>
        <form action="" method="post">
          <h1>Sign Up</h1>
          <div>
            <label htmlFor="name">name </label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="username">username </label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="email">email </label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">password </label>
            <input type="password" id="password" />
          </div>
          <div>
            <label htmlFor="password">re-type password </label>
            <input type="password" id="re-typed-password" />
          </div>
          Already have an account?
          <Link to="/LogIn">Log In</Link>
          <br />
          <button type="submit">Sign up</button>
          <br />
        </form>
      </main>
    </div>
  );
}
