import React, { useEffect, useState } from "react";
import "./Transfer.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
const Transfer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({});
  const [customers, setCustomers] = useState([]);
  const [amount, setAmount] = useState(""); // Initialize as an empty string
  const [option, setOption] = useState(""); // Initialize as an empty string

  useEffect(() => {
    fetch(`http://localhost:5000/transfer/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data.customer);
        setCustomers(data.customers);
      })
      .catch((err) => console.error("Failed to fetch customer data", err));
  }, [id]);

  const handle_To_Submit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/transfer/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        receiverId: parseInt(option),
        amount: parseFloat(amount),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
          navigate("/customers");
        }
      })
      .catch((err) => console.error("Failed to perform transfer", err));
  };

  return (
    <div className="Transfer_container">
      <div className="Transfer">
        <h1>
          Hello <span style={{ color: "#0049B7" }}>"{customer.name}"</span>
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <AccountBalanceIcon style={{ color: "green" }} />
          <h3>Welcome to ABCD Bank</h3>
        </div>
        <form onSubmit={handle_To_Submit} className="formElement">
          <label>Enter Amount For Transfer :-</label>
          <input
            type="number"
            name="amount"
            placeholder="Ex: 1000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-input"
          />
          <label>Transfer To :-</label>
          <select
            name="receiver_id"
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="custom-select"
          >
            <option value="">Select Receiver</option>
            {customers.map((customer, index) => (
              <option key={index} value={customer.id}>
                {customer.id}. {customer.name}
              </option>
            ))}
          </select>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              style={{
                backgroundColor: "rgb(28, 28, 186)",
                color: "white",
                fontWeight: "600",
                width: "30%",

                padding: "10px",
                borderRadius: "25px",
              }}
            >
              Transfer
            </Button>
            <Link to="/customers">
              <Button
                style={{
                  backgroundColor: "rgb(28, 28, 186)",
                  color: "white",
                  fontWeight: "600",
                  width: "200px",

                  padding: "10px",
                  borderRadius: "25px",
                }}
              >
                Back
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transfer;
