import "./rides.css";
import { useContext, useState } from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { CalendarMonth, NotificationAdd } from "@mui/icons-material";
import SearchBox from "../../components/searchbox/searchbox";
import {
  DashboardTableRows,
  RidesTableRows as ridesTableRows,
} from "../../utils/constants/uiconstants";
import { NavContext } from "../../context/navcontext";
import { useNavigate } from "react-router-dom";
import BikeRideImg from "../../assets/graphics/images/rides_imgs/delivery-bike-rides-bicycle-img.png";
import trolley_img from "../../assets/graphics/images/rides_imgs/trolley_full_details.png";
import { DefaultButton } from "../../components/common/defaultbtn";
import { CustomTableRow } from "../../components/common/tablerow";

function Rides() {
  //User Defined
  //Navigation
  const navigate = useNavigate();
  const { setNavSelected } = useContext(NavContext);
  const handleNavChange = (params) => {
    navigate(`/${params.key}`);
    setNavSelected(params.key);
  };

  //Tab Panel
  const [selectedTab, setSelectedTab] = useState("requested");
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  //Tables
  //set the selected Row on Requested Table Selected Row
  const [requestedTableSelectedRow, setRequestedTableSelectedRow] = useState(0);
  const handleRequestedTableSelectedRow = (row, rowIndex) => {
    setRequestedTableSelectedRow(rowIndex);
  };

  //Set the selected row on ongoing table selected Row
  const [ongoingTableSelectedRow, setOngoingTableSelectedRow] = useState(0);
  const handleOngoingTableSelectedRow = (row, rowIndex) => {
    setOngoingTableSelectedRow(rowIndex);
  };

  //Set the selected row on completed table in selected row
  const [completedTableSelectedRow, setCompletedTableSelectedRow] = useState(0);
  const handleCompletedTableSelectedRow = (row, rowIndex) => {
    setCompletedTableSelectedRow(rowIndex);
  };

  //About Deliery Location
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const handleDeliveryLocationChanged = (event) => {
    setDeliveryLocation(event.target.value);
  };

  return (
    <div className="min-vh-100">
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
                handleNavChange({
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
                handleNavChange({
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
          <div className="row bg-white mb-3 ms-4 py-3 rounded">
            <div className="h4 secondary-color fw-bolder">
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
                      maxHeight: 360,
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <Table aria-label="simple table" size="small" stickyHeader>
                      <TableHead>
                        <TableRow
                          selected={requestedTableSelectedRow === 0}
                          onClick={() => handleRequestedTableSelectedRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell style={{ paddingTop: 0 }}>
                            Order Id
                          </TableCell>
                          <TableCell align="right">Product</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Distance</TableCell>
                          <TableCell align="right">Req Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {ridesTableRows.map((row, index) => (
                          <CustomTableRow
                            key={row.id}
                            selected={requestedTableSelectedRow === index + 1}
                            onClick={() =>
                              handleRequestedTableSelectedRow(row, index + 1)
                            }
                            hover
                            style={{
                              borderRadius: "30px",
                              marginBottom: "8px",
                            }}
                          >
                            <TableCell
                              sx={{
                                borderTopLeftRadius: "15px",
                                borderBottomLeftRadius: "15px",
                                color: "inherit",
                              }}
                              component="th"
                              scope="row"
                            >
                              {row.avatar}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.orderId}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.product}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.qty}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.status}
                            </TableCell>
                            <TableCell
                              sx={{
                                borderTopRightRadius: "15px",
                                borderBottomRightRadius: "15px",
                                color: "inherit",
                              }}
                              align="right"
                            >
                              {row.date}
                            </TableCell>
                          </CustomTableRow>
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
                      maxHeight: 360,
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <Table aria-label="simple table" size="small" stickyHeader>
                      <TableHead>
                        <TableRow
                          selected={ongoingTableSelectedRow === 0}
                          onClick={() => handleOngoingTableSelectedRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell style={{ paddingTop: 0 }}>
                            Order Id
                          </TableCell>
                          <TableCell align="right">Product</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Distance</TableCell>
                          <TableCell align="right">Req Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {ridesTableRows.map((row, index) => (
                          <CustomTableRow
                            key={row.id}
                            selected={ongoingTableSelectedRow === index + 1}
                            onClick={() =>
                              handleOngoingTableSelectedRow(row, index + 1)
                            }
                            hover
                            style={{
                              borderRadius: "30px",
                              marginBottom: "8px",
                            }}
                          >
                            <TableCell
                              sx={{
                                borderTopLeftRadius: "15px",
                                borderBottomLeftRadius: "15px",
                                color: "inherit",
                              }}
                              component="th"
                              scope="row"
                            >
                              {row.avatar}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.orderId}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.product}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.qty}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.status}
                            </TableCell>
                            <TableCell
                              sx={{
                                borderTopRightRadius: "15px",
                                borderBottomRightRadius: "15px",
                                color: "inherit",
                              }}
                              align="right"
                            >
                              {row.date}
                            </TableCell>
                          </CustomTableRow>
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
                      maxHeight: 360,
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <Table aria-label="simple table" size="small" stickyHeader>
                      <TableHead>
                        <TableRow
                          selected={completedTableSelectedRow === 0}
                          onClick={() => handleCompletedTableSelectedRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell style={{ paddingTop: 0 }}>
                            Order Id
                          </TableCell>
                          <TableCell align="right">Product</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Distance</TableCell>
                          <TableCell align="right">Req Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {ridesTableRows.map((row, index) => (
                          <CustomTableRow
                            key={row.id}
                            selected={completedTableSelectedRow === index + 1}
                            onClick={() =>
                              handleCompletedTableSelectedRow(row, index + 1)
                            }
                            hover
                            style={{
                              borderRadius: "30px",
                              marginBottom: "8px",
                            }}
                          >
                            <TableCell
                              sx={{
                                borderTopLeftRadius: "15px",
                                borderBottomLeftRadius: "15px",
                                color: "inherit",
                              }}
                              component="th"
                              scope="row"
                            >
                              {row.avatar}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.orderId}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.product}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.qty}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.status}
                            </TableCell>
                            <TableCell
                              sx={{
                                borderTopRightRadius: "15px",
                                borderBottomRightRadius: "15px",
                                color: "inherit",
                              }}
                              align="right"
                            >
                              {row.date}
                            </TableCell>
                          </CustomTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
              </TabContext>
            </div>
            <div className="row rides-table-empty"></div>
          </div>
        </div>

        {/* Full Details Tab */}
        <div className="col-4">
          <div className="bg-white rounded ms-2 me-2 mt-0 p-2 mb-2">
            {/* Full Detials Header */}
            <div className="clearfix mt-3 mb-2">
              <div className="h5 float-start fw-medium secondary-color">
                Order Info
              </div>
              <div className="float-end fw-medium secondary-color">
                {(requestedTableSelectedRow > 0 ||
                  ongoingTableSelectedRow > 0 ||
                  completedTableSelectedRow > 0) &&
                  "2023-07-05"}
              </div>
            </div>

            {/* Full Details Section */}
            {(requestedTableSelectedRow > 0 ||
              ongoingTableSelectedRow > 0 ||
              completedTableSelectedRow > 0) && (
              <Box
                sx={{
                  maxHeight: 505,
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": { display: "none" },
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#9797971a",
                    borderRadius: 8,
                    padding: "32px 16px",
                  }}
                >
                  {/* Order Title */}
                  <div className="row mb-3">
                    <div className="col-auto">
                      <img src={trolley_img} alt="trolley" />
                    </div>
                    <div className="col-auto fw-bolder">
                      ORDER ID - 187828665488
                    </div>
                  </div>

                  {/* Order Info */}
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Customer Name</div>
                      <div className="fw-bold h6">@imalsah48_3289_</div>
                    </div>
                    <div className="col">
                      <div className="fw-lighter h6">Mobile</div>
                      <div className="fw-bold h6">+94719876543</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Item Requested</div>
                      <div className="fw-bold h6">Carrot</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Quantity</div>
                      <div className="fw-bold h6">115 kg</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Quantity</div>
                      <div className="fw-bold h6">115 kg</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Delivery Location</div>
                      <div className="fw-bold h6">4/b, Temple Road, Galle.</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Distance</div>
                      <div className="fw-bold h6">42 km</div>
                    </div>
                  </div>
                </Box>

                {/* Farmers Info */}
                <div className="clearfix mt-3 mb-2">
                  <div className="fw-medium secondary-color">Farmer Info</div>
                </div>
                <Box
                  sx={{
                    backgroundColor: "#9797971a",
                    borderRadius: 8,
                    padding: "32px 16px",
                  }}
                >
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Farmer Name</div>
                      <div className="fw-bold h6">@sunil_3289_</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Mobile</div>
                      <div className="fw-bold h6">+94771234567</div>
                    </div>
                    <div className="col">
                      <div className="fw-lighter h6">Mobile</div>
                      <div className="fw-bold h6">+94719876543</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="fw-lighter h6">Pickup Location</div>
                    <div className="fw-bold h6">
                      165/52, Milcasalwatta, Anuradhapura.
                    </div>
                  </div>
                </Box>

                {/* Delivery Info */}
                <div className="clearfix mt-3 mb-2">
                  <div className="fw-medium secondary-color">Delivery Info</div>
                </div>

                <Box
                  sx={{
                    backgroundColor: "#9797971a",
                    borderRadius: 8,
                    padding: "32px 16px",
                    marginBottom: "32px",
                  }}
                >
                  <div className="row">
                    <div className="fw-lighter h6 mb-2">Rider Name</div>
                    <div className="">
                      <TextField
                        id="rider-name"
                        label="Name"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%", marginBottom: "16px" }}
                        InputProps={{ style: { borderRadius: 15 } }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="fw-lighter h6 mb-3">Delivery Method</div>
                    <div className="">
                      <FormControl
                        sx={{
                          minWidth: "100%",
                          marginBottom: "16px",
                        }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Location
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={deliveryLocation}
                          label="Location"
                          onChange={handleDeliveryLocationChanged}
                          sx={{ borderRadius: 15 }}
                        >
                          <MenuItem value={"location1"}>Location 1</MenuItem>
                          <MenuItem value={"location2"}>Location 2</MenuItem>
                          <MenuItem value={"location3"}>Location 3</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                  <div className="row">
                    <div className="fw-lighter h6 mb-2">Rider Mobile</div>
                    <div className="">
                      <TextField
                        id="rider-mobile"
                        label="Mobile"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%", marginBottom: "16px" }}
                        InputProps={{ style: { borderRadius: 15 } }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="fw-lighter h6 mb-2">Vehicle No</div>
                    <div className="">
                      <TextField
                        id="rider-vehicle-no"
                        label="Vehicle No"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%", marginBottom: "16px" }}
                        InputProps={{ style: { borderRadius: 15 } }}
                      />
                    </div>
                  </div>
                </Box>

                {/* Action Button */}
                <div className="row mb-2">
                  <div className="col">
                    <DefaultButton sx={{ width: "100%", padding: "10px 15px" }}>
                      Assign
                    </DefaultButton>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col">
                    <DefaultButton
                      sx={{
                        width: "100%",
                        padding: "10px 15px",
                        color: "#2196F3",
                        border: "1px solid #2196F3",
                        backgroundColor: "#FFF",
                        "&:hover": {
                          color: "#FFF",
                        },
                      }}
                    >
                      Cancel
                    </DefaultButton>
                  </div>
                </div>
              </Box>
            )}
            <div className="row rides-fullinfo-empty"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rides;
