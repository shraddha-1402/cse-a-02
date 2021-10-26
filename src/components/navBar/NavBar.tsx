import "./navBar.css";
import logo from "../../assets/images/logo.jpg";
import TabBar from "./TabBar";
import UserAvatar from "./UserAvatar";

export default function NavBar(props: {
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
        <TabBar
          tabsList={props.tabsList}
          pageBody={props.pageBody}
          setPageBody={props.setPageBody}
        />
        <UserAvatar>
          <button className="dropdown">Log Out</button>
        </UserAvatar>
      </div>
    </div>
  );
}
