import "./navBar.css";
import logo from "../../assets/images/logo.jpg";
import Tab from "./Tab";
import { useState } from "react";

function NavBar(props: {
  pageBody: string;
  username: string;
  setPageBody: { (arg0: any): void; (arg0: any): void; (arg0: any): void };
  tabsList: string[];
}) {
  return (
    <div className="navBar">
      <div className="AppBar_TitleBar">
        <img src={logo} alt="asd" />
        <h1>Welcome {props.username}</h1>
      </div>
      <div className="tabBar">
        <div className="tabs-list">
          {props.tabsList.map((name) => (
            <Tab
              key={name}
              pageBody={props.pageBody}
              tabName={name}
              setPageBody={props.setPageBody}
            />
          ))}
        </div>
        <UserAvatar>
          <button className="dropdown">Log Out</button>
        </UserAvatar>
      </div>
    </div>
  );
}
function UserAvatar(params: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-item">
      <button className="dropdown-trigger" onClick={() => setOpen(!open)}>
        <span>SN</span>
      </button>
      {open && params.children}
      {/* {params.children} */}
    </div>
  );
}
export default NavBar;
