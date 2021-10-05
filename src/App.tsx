import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { HomePage } from "./components/FeedPage";
import { ProfilePage } from "./components/ProfilePage";
import { ProfileDetailPage } from "./components/ProfileDetailPage";
import { FeedPage } from "./components/FeedPage";
function App() {
  const name = "name_of_student";
  const title = `Welcome ${name}`;
  return (
    <div>
      <Router>
        <div className="AppBar">
          <h1>{title}</h1>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">
                To Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/profile">
                To Profile
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/profile/andrew">
                {/* <NavLink to="/profile/andrew" exact> */}
                To Andrew's Profile
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/feed">
                To Feed
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route path="/profile/:username" component={ProfileDetailPage} />
          <Route path="/feed" component={FeedPage} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
