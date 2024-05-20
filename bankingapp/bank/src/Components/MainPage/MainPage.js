import React from "react";
import "./MainPage.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TouchAppIcon from "@mui/icons-material/TouchApp";
const MainPage = () => {
  return (
    <div className="Main-Container">
      <div className="Container-welcome">
        <AccountBalanceIcon style={{ fontSize: "250px", color: "blue" }} />
        <h1>Welcome to Customer Transfer App</h1>
        <a href="customers" className="view-link-type">
          View all Customers
        </a>
        <TouchAppIcon style={{ fontSize: "30px", color: "white" }} />
      </div>
    </div>
  );
};

export default MainPage;
