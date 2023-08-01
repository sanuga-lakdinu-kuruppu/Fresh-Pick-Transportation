import React, { useState } from "react";
import "./App.css";
import "./assets/styles/gloablestyles.css";
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
import Login from "./pages/login";
import { AuthContextProvider, UserAuth } from "./context/authcontext";
import ProtectedRoute from "./components/protectedroute/protectedroute";

function App() {
  const [userLog, setUserLog] = useState(false);
  const [navSelected, setNavSelected] = React.useState("dashboard");
  const { user } = UserAuth();
  return (
    <div className="App bg-light">
      <div className="container-fluid">
        <div className="row">
          <NavContext.Provider value={{ navSelected, setNavSelected }}>
            {user && (
              <div className="col-2 z-3 min-vh-100">
                <SideBar />
              </div>
            )}
            <div className="col w-100">
              <div className="overflow-x-auto overflow-y-hidden">
                <Routes>
                  {user !== null ? (
                    <>
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
                    </>
                  ) : (
                    <Route
                      path="/login"
                      element={
                        <Login userLog={userLog} setUserLog={setUserLog} />
                      }
                    ></Route>
                  )}
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
