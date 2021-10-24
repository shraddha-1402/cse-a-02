import { ProjectData } from "../../types/main";
import "./../../styles/routes/login-signup/index.css";
import headerImg from "../../assets/images/header.jpg";

export default function SignIn(props: {
  title: string;
  projectData: ProjectData;
}) {
  return (
    <div className="signup-login-route">
      <main>
        <header>
          {/* <!-- <img src="./images/logo.jpg" alt=""> */}
          {/* <h2 id="projectName">Project Approval System</h2> */}
          {/* <h3 id="tagling">Get approved right now</h3> --> */}
          <img src={headerImg} alt="" />
        </header>
        <div>Please enter your login and password</div>
        <form action="" method="post">
          <h1>Log in</h1>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" />
          </div>
          <a href="/forgotPassword.html" target="_blank">
            Forgot password?
          </a>
          <br />
          <button type="submit">Log in</button>
          <br />
        </form>
      </main>
    </div>
  );
}
