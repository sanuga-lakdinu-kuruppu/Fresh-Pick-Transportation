import React from "react";
import "./App.css";
import SideBar from "./components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavContext } from "./context/navcontext";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Rides from "./pages/rides";
import Payments from "./pages/payments";
import Reports from "./pages/reports";
import Notification from "./pages/notifications";
import Calendar from "./pages/calendar";

function App() {
  const [navSelected, setNavSelected] = React.useState("dashboard");
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <NavContext.Provider value={{ navSelected, setNavSelected }}>
            <SideBar />
            <div className="col w-100">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/ride" element={<Rides />}></Route>
                <Route path="/payment" element={<Payments />}></Route>
                <Route path="/report" element={<Reports />}></Route>
                <Route path="/notification" element={<Notification />}></Route>
                <Route path="/calendar" element={<Calendar />}></Route>
              </Routes>
            </div>
          </NavContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
