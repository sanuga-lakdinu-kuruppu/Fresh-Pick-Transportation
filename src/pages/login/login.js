import React, { useState } from "react";
import { LOGO_X64 } from "../../utils/constants/configconstants";
import {
  Alert,
  AlertTitle,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { DefaultButton } from "../../components/common/defaultbtn";
import { UserAuth } from "../../context/authcontext";
import { useNavigate } from "react-router-dom";

function Login({ setUserLog }) {
  //For the passowrd
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //For the login process
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      alert("Login Success.!");
      setUserLog(true);
      navigate("/");
    } catch (error) {
      setError(error.message);
      alert("Invalid Username or Password.");
    }
  };

  return (
    <div className="min-vh-100">
      <div className="row">
        {/* Login Page Logo */}
        <div className="col float-start">
          {/* Application Logo */}
          <a
            href="http://localhost:3000/"
            target="_parent"
            className="text-decoration-none d-flex justify-content-center align-items-center py-5 mb-5"
          >
            <div className="col d-flex">
              <img
                className="side-bar-logo"
                src={LOGO_X64}
                alt="Project Logo"
              />
              <div className="ms-2 me-4">
                <div className="ms-2 mw-100  fw-bolder primary-color">
                  FreshPick
                </div>
                <div className="ms-2 side-bar-description secondary-color">
                  Where farming meets retails
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col h-100">
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="bg-white py-5 px-3"
              style={{
                borderRadius: 20,
                boxShadow: "0px 6px 20px 0px rgba(0,0,0,0.69",
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="row mt-2 mb-4 mx-3 h5 fw-medium">
                  <div className="col"></div>
                  <div className="col-auto primary-color fs-4"> Sign In</div>
                  <div className="col"></div>
                </div>
                <div className="row">
                  <div className="col mx-3">
                    <div className="row mt-2 mb-4">
                      <TextField
                        id="rider-name"
                        label="Email Address"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%" }}
                        InputProps={{ style: { borderRadius: 15 } }}
                        type="email"
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                    </div>
                    <div className="row mb-4">
                      <FormControl variant="standard">
                        <InputLabel
                          sx={{
                            marginTop: "-11px",
                            marginLeft: "15px",
                            width: "25ch",
                          }}
                          htmlFor="user-password"
                        >
                          Password
                        </InputLabel>
                        <OutlinedInput
                          id="user-password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          sx={{
                            minWidth: "100%",
                            borderRadius: 15,
                          }}
                          size="small"
                          label="Password"
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                        />
                      </FormControl>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col ms-2 mt-2 mb-3 primary-color">
                    Forgot your password?
                  </div>
                </div>
                <div className="row">
                  <div className="col w-100">
                    <DefaultButton type="submit" sx={{ minWidth: "100%" }}>
                      Login
                    </DefaultButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
