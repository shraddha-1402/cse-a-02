import {
  ReactElement,
  JSXElementConstructor,
  ReactNodeArray,
  ReactPortal,
} from "react";
import "./NavBar.css";

import Tab from "./Tab";

function NavBar(props: {
  username:
    | string
    | number
    | boolean
    | {}
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactNodeArray
    | ReactPortal
    | null
    | undefined;
  setPageBody: { (arg0: any): void; (arg0: any): void; (arg0: any): void };
}) {
  return (
    <>
      <div className="AppBar_TitleBar">
        <img src="logo.png" alt="" />
        <h1>Welcome {props.username}</h1>
      </div>
      <Tab tabName={"ModifyProjectDetails"} setPageBody={props.setPageBody} />
      <Tab tabName={"UploadProjectDetails"} setPageBody={props.setPageBody} />
      <Tab tabName={"ViewProjectDetails"} setPageBody={props.setPageBody} />
      <Tab tabName={"ViewProjectStatus"} setPageBody={props.setPageBody} />
    </>
  );
}
export default NavBar;
