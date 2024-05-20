import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Customers from "./Components/Customers/Customers";
import Customer from "./Components/Customer/Customer";
import Transfer from "./Components/Transfer/Transfer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/customer/:id" element={<Customer />}></Route>
          <Route path="/transfer/:id" element={<Transfer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
