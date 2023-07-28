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
import UserProfile from "./pages/userprofile/userprofile";

function App() {
  const [navSelected, setNavSelected] = React.useState("dashboard");
  return (
    <div className="App bg-light">
      <div className="container-fluid">
        <div className="row">
          <NavContext.Provider value={{ navSelected, setNavSelected }}>
            <div className="col-2 position-fixed z-3">
              <SideBar />
            </div>
            <div className="col-2"></div>
            <div className="col w-100">
              <div className="overflow-x-auto overflow-y-hidden">
                <Routes>
                  <Route path="/" element={<Dashboard />}></Route>
                  <Route path="/dashboard" element={<Dashboard />}></Route>
                  <Route path="/ride" element={<Rides />}></Route>
                  <Route path="/payment" element={<Payments />}></Route>
                  <Route path="/report" element={<Reports />}></Route>
                  <Route
                    path="/notification"
                    element={<Notification />}
                  ></Route>
                  <Route path="/calendar" element={<Calendar />}></Route>
                  <Route path="/user/1" element={<UserProfile />}></Route>
                </Routes>
              </div>
            </div>
          </NavContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
