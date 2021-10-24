import "./../../styles/App.css";
import logo from "../../assets/images/logo.jpg";
import Tab from "./Tab";

function NavBar(props: {
  pageBody: string;
  username: string;
  setPageBody: { (arg0: any): void; (arg0: any): void; (arg0: any): void };
}) {
  // console.log(props.pageBody);
  return (
    <div className="navBar">
      <div className="AppBar_TitleBar">
        <img src={logo} alt="asd" />
        <h1>Welcome {props.username}</h1>
      </div>
      <div className="tabBar">
        <div className="tabs-list">
          <Tab
            pageBody={props.pageBody}
            tabName={"ModifyProjectDetails"}
            setPageBody={props.setPageBody}
          />
          <Tab
            pageBody={props.pageBody}
            tabName={"UploadProjectDetails"}
            setPageBody={props.setPageBody}
          />
          <Tab
            pageBody={props.pageBody}
            tabName={"ViewProjectDetails"}
            setPageBody={props.setPageBody}
          />
          <Tab
            pageBody={props.pageBody}
            tabName={"ViewProjectStatus"}
            setPageBody={props.setPageBody}
          />
        </div>
        <div className="userAvatar">SN</div>
      </div>
    </div>
  );
}
export default NavBar;
