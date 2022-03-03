import { ProjectData } from "../../types/main";
import "./index.css";
import headerImg from "../../assets/images/header.jpg";
import { Link } from "react-router-dom";

export default function LogIn(props: {
  title: string;
  projectData: ProjectData;
}) {
  return (
    <div className="signup-login-route">
      <main>
        <header>
          <img src={headerImg} alt="header_image" />
        </header>
        <div>Please enter your login and password</div>
        <form action="" method="post">
          <h1>Log in</h1>
          <div>
            <label htmlFor="username">Username </label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input type="text" id="password" />
          </div>
          Don't have an account?
          <Link to="/SignUp">Sign Up</Link>
          <br />
          <button type="submit">Log in</button>
          <br />
        </form>
      </main>
    </div>
  );
}
