import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.css";
import { Student } from "./components/routes/Student";
import LoginSignup from "./components/routes/LoginSignup";
import LogIn from "./components/pages/LogIn";
import { projectDataPreset } from "./constants/preset";
import SignUp from "./components/pages/SignUp";
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
