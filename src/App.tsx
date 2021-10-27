import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Student } from "./modules/student/Student";
import LoginSignup from "./modules/LoginSignup";
import LogIn from "./modules/login/LogIn";
import { projectDataPreset } from "./constants/preset";
import SignUp from "./modules/login/SignUp";
import Admin from "./modules/admin/Admin";
import "./App.css";
export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/goto">
            <LinkTo path="/goto"></LinkTo>
            <LinkTo path="/student"></LinkTo>
            <LinkTo path="/admin"></LinkTo>
            <LinkTo path="/projectInCharge"></LinkTo>
            <LinkTo path="/login-signup"></LinkTo>
          </Route>
          <Route path="/student">
            <Student />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login-signup">
            <LoginSignup />
          </Route>
          <Route path="/LogIn">
            <LogIn title={""} projectData={projectDataPreset} />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function LinkTo(params: { path: string }) {
  return (
    <>
      <Link to={params.path}>{params.path}</Link>
      <br />
    </>
  );
}
