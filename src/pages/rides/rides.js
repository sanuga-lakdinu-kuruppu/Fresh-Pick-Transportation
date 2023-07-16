import "./rides.css";
import { useContext, useState } from "react";
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
import { RidesTableRows as ridesTableRows } from "../../utils/constants/uiconstants";
import { NavContext } from "../../context/navcontext";
import { useNavigate } from "react-router-dom";
import BikeRideImg from "../../assets/graphics/images/rides_imgs/delivery-bike-rides-bicycle-img.png";

function Rides() {
  //User Defined
  //Navigation
  const navigate = useNavigate();
  const { navSelected, setNavSelected } = useContext(NavContext);
  const handleNavToggleChange = (params) => {
    navigate(`/${params.key}`);
    setNavSelected(params.key);
  };

  //Tab Panel
  const [selectedTab, setSelectedTab] = useState("requested");
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  //Tables
  //set the selected Row
  const [selectedRow, setSelectedRow] = useState(0);
  const handleSelectRow = (row, rowIndex) => {
    setSelectedRow(rowIndex);
    console.log(row);
  };

  return (
    <div className="row">
      <div className="row">
        <div className="row ms-2 my-3 py-3 h3 fw-bolder primary-color">
          {/* Heading title */}
          <div className="d-inline-block col-auto my-1 align-self-center">
            <div className="d-block main-header fw-bold">Rides</div>
            <div className="d-block secondary-color sub-header fw-normal">
              Fast, efficient, and always on time
            </div>
          </div>
          {/* search bar and the icon set*/}
          <div className="d-flex col-6 my-1 justify-content-center align-self-center">
            <SearchBox className="w-auto" />
          </div>
          <div className="d-inline-block col-auto my-1">
            <IconButton
              onClick={() =>
                handleNavToggleChange({
                  id: 6,
                  key: "calendar",
                  icon: <CalendarMonth />,
                  item: "Calendar",
                })
              }
            >
              <CalendarMonth />
            </IconButton>
            <IconButton
              onClick={() =>
                handleNavToggleChange({
                  id: 5,
                  key: "notification",
                  icon: <NotificationAdd />,
                  item: "Notification",
                })
              }
            >
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
            <div className="h2 secondary-color fw-bolder text-black">
              All Your Activities
              <div className="d-block float-end">
                <img
                  className="top-head-image ms-3"
                  src={BikeRideImg}
                  alt="Tempory"
                />
              </div>
            </div>
            {/* Rides Tab Section */}
            <div>
              <Box></Box>
              <TabContext
                value={selectedTab}
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
                      overflowY: "scroll",
                      maxHeight: 350,
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <Table aria-label="simple table" size="small" stickyHeader>
                      <TableHead>
                        <TableRow
                          selected={selectedRow === 0}
                          onClick={() => handleSelectRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell style={{ paddingTop: 0 }}>
                            Order Id
                          </TableCell>
                          <TableCell align="right">Product</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Status</TableCell>
                          <TableCell align="right">Time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {ridesTableRows.map((row, index) => (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedRow === index + 1}
                            onClick={() => handleSelectRow(row, index + 1)}
                            hover
                          >
                            <TableCell component="th" scope="row">
                              {row.avatar}
                            </TableCell>
                            <TableCell align="right">{row.orderId}</TableCell>
                            <TableCell align="right">{row.product}</TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
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
                      overflowY: "scroll",
                      maxHeight: 350,
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <Table aria-label="simple table" size="small" stickyHeader>
                      <TableHead>
                        <TableRow
                          selected={selectedRow === 0}
                          onClick={() => handleSelectRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell style={{ paddingTop: 0 }}>
                            Order Id
                          </TableCell>
                          <TableCell align="right">Product</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Status</TableCell>
                          <TableCell align="right">Time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {ridesTableRows.map((row, index) => (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedRow === index + 1}
                            onClick={() => handleSelectRow(row, index + 1)}
                            hover
                          >
                            <TableCell component="th" scope="row">
                              {row.avatar}
                            </TableCell>
                            <TableCell align="right">{row.orderId}</TableCell>
                            <TableCell align="right">{row.product}</TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                {/* Completed Table */}
                <TabPanel value="completed">
                  <TableContainer
                    component={Paper}
                    sx={{
                      overflowY: "scroll",
                      maxHeight: 350,
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <Table aria-label="simple table" size="small" stickyHeader>
                      <TableHead>
                        <TableRow
                          selected={selectedRow === 0}
                          onClick={() => handleSelectRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell style={{ paddingTop: 0 }}>
                            Order Id
                          </TableCell>
                          <TableCell align="right">Product</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Status</TableCell>
                          <TableCell align="right">Time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {ridesTableRows.map((row, index) => (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedRow === index + 1}
                            onClick={() => handleSelectRow(row, index + 1)}
                            hover
                          >
                            <TableCell component="th" scope="row">
                              {row.avatar}
                            </TableCell>
                            <TableCell align="right">{row.orderId}</TableCell>
                            <TableCell align="right">{row.product}</TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
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
          <div className="bg-light rounded ms-3 me-2 mt-0 p-2 mb-2">
            {/* Full Detials Header */}
            <div className="clearfix mt-3 mb-2">
              <div className="float-start fw-medium text-black">
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
