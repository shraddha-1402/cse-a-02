import { useEffect, useState } from "react";
import NavBar from "./components/navBar/NavBar";
import ModifyProjectDetails from "./components/pages/ModifyProjectDetails";
import UploadProjectDetails from "./components/pages/UploadProjectDetails";
import ViewProjectDetails from "./components/pages/ViewProjectDetails";
import ViewProjectStatus from "./components/pages/ViewProjectStatus";
import { projectDataPreset, user } from "./constants/preset";
import { ProjectData } from "./types/main";

function App() {
  const [pageBody, setPageBody] = useState("ModifyProjectDetails");
  // const [user, setUser] = useState({ name: "userName" });

  const [projectData, setProjectData] =
    useState<ProjectData>(projectDataPreset);
  useEffect(() => {
    // setUser({ name: "userName" });
    // console.log(projectData);
    return () => {};
  }, [projectData]);
  return (
    <>
      <NavBar
        pageBody={pageBody}
        setPageBody={setPageBody}
        username={user.name}
      />
      {pageBody === "ModifyProjectDetails" && (
        <ModifyProjectDetails
          title={"Modify Project Details"}
          projectData={projectData}
          setProjectData={setProjectData}
        />
      )}
      {pageBody === "UploadProjectDetails" && (
        <UploadProjectDetails
          title="Upload Project Details"
          setProjectData={setProjectData}
        />
      )}
      {pageBody === "ViewProjectDetails" && (
        <ViewProjectDetails
          title={"View Project Details"}
          projectData={projectData}
        />
      )}
      {pageBody === "ViewProjectStatus" && (
        <ViewProjectStatus
          title={"View Project Status"}
          projectData={projectData}
        />
      )}
      {/* <ViewProjectDetails username={projectData.name} /> */}
    </>
  );
}

export default App;

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   NavLink,
// } from "react-router-dom";
// import { HomePage } from "./components/FeedPage";
// import { ProfilePage } from "./components/ProfilePage";
// import { ProfileDetailPage } from "./components/ProfileDetailPage";
// import { FeedPage } from "./components/FeedPage";
// function App() {
//   const name = "name_of_student";
//   const title = `Welcome ${name}`;
//   return (
//     <div>
//       <Router>
//         <div className="AppBar">
//           <h1>{title}</h1>
//           <ul>
//             <li>
//               <NavLink exact activeClassName="active" to="/">
//                 To Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink activeClassName="active" to="/profile">
//                 To Profile
//               </NavLink>
//             </li>
//             <li>
//               <NavLink activeClassName="active" to="/profile/andrew">
//                 {/* <NavLink to="/profile/andrew" exact> */}
//                 To Andrew's Profile
//               </NavLink>
//             </li>
//             <li>
//               <NavLink activeClassName="active" to="/feed">
//                 To Feed
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route exact path="/profile" component={ProfilePage} />
//           <Route path="/profile/:username" component={ProfileDetailPage} />
//           <Route path="/feed" component={FeedPage} />
//         </Switch>
//       </Router>
//     </div>
//   );
// }
// export default App;
