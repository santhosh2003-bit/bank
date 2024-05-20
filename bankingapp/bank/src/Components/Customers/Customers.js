import React, { useEffect, useState } from "react";
import "./Customers.css";
import GroupIcon from "@mui/icons-material/Group";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import PaidIcon from "@mui/icons-material/Paid";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/customers", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  return (
    <div className="customers_container">
      <div className="customers">
        <div className="customer_headers">
          <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
            <h1>Customers</h1>
            <GroupIcon style={{ fontSize: "35px", color: "white" }} />
          </div>
          <Link to="/">
            <MenuIcon style={{ color: "white" }} />
          </Link>
        </div>
        <table
          border="1px solid"
          style={{ borderCollapse: "collapse", border: "1px solid white" }}
        >
          <thead>
            <tr>
              <th>
                <div className="table-headers">S.No</div>
              </th>
              <th>
                <div className="table-headers">
                  Name
                  <AccountBoxIcon style={{ fontSize: "35px" }} />
                </div>
              </th>
              <th>
                <div className="table-headers">
                  Email
                  <EmailIcon style={{ fontSize: "35px" }} />
                </div>
              </th>
              <th>
                <div className="table-headers">
                  Balance
                  <PaidIcon style={{ fontSize: "35px" }} />
                </div>
              </th>
              <th>
                <div className="table-headers">
                  <AdsClickIcon style={{ fontSize: "35px" }} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    {customer.id}
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "20px",
                    }}
                  >
                    {customer.name}
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "20px",
                    }}
                  >
                    {customer.email}
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "20px",
                    }}
                  >
                    {customer.balance}
                    <CurrencyRupeeIcon style={{ color: "white" }} />
                  </div>
                </td>
                <td>
                  <Link
                    to={`/customer/${customer.id}`}
                    style={{
                      fontSize: "15px",
                      textDecoration: "underline",
                      color: "yellow",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Click
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
