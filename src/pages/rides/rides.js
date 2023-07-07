import "./rides.css";
import { useState } from "react";
import {
  Box,
  IconButton,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  CalendarMonth,
  NotificationAdd,
  TabUnselected,
} from "@mui/icons-material";
import SearchBox from "../../components/searchbox/searchbox";
import { LOGO_X64 } from "../../utils/constants/configconstants";
import { DashboardTableRows } from "../../utils/constants/uiconstants";

function Rides() {
  const [value, setValue] = useState("requested");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="row">
      <div className="row">
        <div className="row ms-2 my-3 py-3 h3 fw-bolder primary-color">
          {/* Heading title */}
          <div className="d-inline-block col-auto my-1 align-self-center">
            <div className="d-block main-header fw-bold">Rides</div>
            <div className="d-block secondary-color sub-header fw-normal">
              Fast, Effcient and always on time
            </div>
          </div>
          {/* search bar and the icon set*/}
          <div className="d-flex col-6 my-1 justify-content-center align-self-center">
            <SearchBox className="w-auto" />
          </div>
          <div className="d-inline-block col-auto my-1">
            <IconButton>
              <CalendarMonth />
            </IconButton>
            <IconButton>
              <NotificationAdd />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Rides Tab Sections */}
        <div className="col-8">
          {/* All Your Activities Tab */}
          <div className="row bg-light ms-4 py-3 rounded">
            <div className="h2 secondary-color fw-bolder">
              All Your Activities
              <div className="d-block float-end">
                <img
                  className="top-head-image ms-3"
                  src={LOGO_X64}
                  alt="Tempory"
                />
              </div>
            </div>
            {/* Rides Tab Section */}
            <div>
              <Box></Box>
              <TabContext
                value={value}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <TabList onChange={handleChange}>
                  <Tab value="requested" label="Requested" />
                  <Tab value="ongoing" label="Ongoing" />
                  <Tab value="completed" label="Completed" />
                </TabList>
                {/* Requested Table */}
                <TabPanel value="requested">
                  <TableContainer
                    component={Paper}
                    sx={{
                      maxHeight: 400,
                      overflowY: "scroll",
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Dessert (100g serving)</TableCell>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                          <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {DashboardTableRows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                {/* Ongoing Table */}
                <TabPanel value="ongoing">
                  <TableContainer
                    component={Paper}
                    sx={{
                      maxHeight: 400,
                      overflowY: "scroll",
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Dessert (100g serving)</TableCell>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                          <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {DashboardTableRows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                {/* Completed Table */}
                <TabPanel value="completed">
                  {" "}
                  <TableContainer
                    component={Paper}
                    sx={{
                      maxHeight: 400,
                      overflowY: "scroll",
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Dessert (100g serving)</TableCell>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                          <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {DashboardTableRows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
              </TabContext>
            </div>
          </div>
        </div>
        {/* Full Details Tab */}
        <div className="col-4">
          <div className="bg-light rounded ms-3 me-2 mt-3 p-2 mb-2">
            {/* Full Detials Header */}
            <div className="clearfix mt-3 mb-2">
              <div className="float-start fw-medium secondary-color">
                Full Details
              </div>
              <div className="float-end fw-medium secondary-color">
                {"2023-07-05"}
              </div>
            </div>
            {/* Full Details Section */}
            <Box
              sx={{
                maxHeight: 500,
                overflowY: "scroll",
                "&::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>{" "}
              <div className="bg-white rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
              <div className="bg-info rounded">
                <div className="row">
                  <div className="col"></div>
                  <div className="col fw-bold secondary-color">
                    Order ID: 123456789
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rides;
