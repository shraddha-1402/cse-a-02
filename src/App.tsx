import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.css";
import { Student } from "./components/routes/Student";
import SignIn from "./components/pages/SignIn";
import { projectDataPreset } from "./constants/preset";
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
            <LinkTo path="/login-signin"></LinkTo>
          </Route>
          <Route path="/student">
            <Student />
          </Route>
          <Route path="/login-signin">
            <SignIn title={""} projectData={projectDataPreset}></SignIn>
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
