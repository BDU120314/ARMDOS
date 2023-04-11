import React from "react";
import "./App.css";
import Headere from "./component/header";
import Main from "./component/main";
import RightSideBar from "./component/right_side_bar";
import Footers from "./component/footer";
import LeftSide from "./component/leftSide";

function App() {
  return (
    <div className="body">
      <Headere />
      <Main />
      <LeftSide
        home="Home"
        dashboard="Dashboard"
        appointment="Appointment"
        settings="Settings"
        help="Help"
        about="About"
      />
      <RightSideBar />
      <Footers />
    </div>
  );
}

export default App;
