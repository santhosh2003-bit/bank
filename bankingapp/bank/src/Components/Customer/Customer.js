import React, { useEffect, useState } from "react";
import "./Customer.css";
import { Link, useParams } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Button } from "@mui/material";
const Customer = () => {
  const [customerData, setCustomerData] = useState({});
  const { id } = useParams();
  //   console.log("Customer", id);
  useEffect(() => {
    fetch(`http://localhost:5000/customers/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCustomerData(data);
      });
  }, [id]);
  //   console.log(customerData);
  return (
    <div className="customer_container">
      <div className="customer">
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(0,0,0,0.3)",
            paddingBottom: "10px",
          }}
        >
          <PersonIcon style={{ fontSize: "50px" }} />
          <MoreVertIcon style={{ fontSize: "50px" }} className="moreIcon" />
        </div>
        <h3>Customer Name :- {customerData.name}</h3>
        <h3>Customer Email :- {customerData.email}</h3>

        <h3 style={{ display: "flex", alignItems: "center" }}>
          Customer Bank Balance :-
          <CurrencyRupeeIcon
            style={{ color: "green", fontSize: "30px" }}
          />{" "}
          {customerData.balance}
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "10px",
          }}
        >
          <Link to={`/transfer/${customerData.id}`}>
            <Button
              style={{
                backgroundColor: "rgb(28, 28, 186)",
                color: "white",
                fontWeight: "600",
              }}
            >
              Transfer
            </Button>
          </Link>
          <Link to="/">
            <Button
              style={{
                backgroundColor: "rgb(28, 28, 186)",
                color: "white",
                fontWeight: "600",
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/customers">
            <Button
              style={{
                backgroundColor: "rgb(28, 28, 186)",
                color: "white",
                fontWeight: "600",
              }}
            >
              Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Customer;
