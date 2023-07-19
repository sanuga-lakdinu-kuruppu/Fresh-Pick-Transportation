import React, { useContext, useEffect, useState } from "react";
import "../../assets/styles/gloablestyles.css";
import "./dashboard.css";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { CalendarMonth, NotificationAdd } from "@mui/icons-material";
import SearchBox from "../../components/searchbox";
import AnalyticCard from "../../components/common/analyticscard";
import {
  DashboardTableRows as dashboardTableRows,
  DashboardAnalyticsCardData as dashboardAnalyticsCardData,
} from "../../utils/constants/uiconstants";
import { DefaultDatePicker } from "../../components/common/defaultdatepicker";
import { useNavigate } from "react-router-dom";
import { NavContext } from "../../context/navcontext";
import SearchField from "../../components/searchfield/searchfield";
import trolley_img from "../../assets/graphics/images/dashboard_imgs/trolley_full_details.png";
import { DefaultButton } from "../../components/common/defaultbtn";

function Dashboard() {
  //User Defined
  //Navigation Handle
  const navigate = useNavigate();
  const { navSelected, setNavSelected } = useContext(NavContext);
  const handleNavChange = (params) => {
    navigate(`/${params.key}`);
    setNavSelected(params.key);
  };

  //Date Picker
  const today = dayjs(dayjs().format("YYYY-MM-DD").toString());
  const [fromDateValue, setFromDateValue] = useState(today);
  const [toDateValue, setToDateValue] = useState(today);

  //Search From the table
  const [searchDataText, setSearchDataText] = useState("");

  //set the selected Row
  const [selectedRow, setSelectedRow] = useState(0);
  const handleSelectRow = (row, rowIndex) => {
    setSelectedRow(rowIndex);
    console.log(row);
  };

  //About Deliery Location
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const handleDeliveryLocationChanged = (event) => {
    setDeliveryLocation(event.target.value);
  };

  //Analytics Card handling
  //fetch Data from the api
  useEffect(() => {
    //Data Fetching for analytics card
  }, []);

  return (
    <div className="">
      <div className="row ms-2 my-3 py-3 h3 fw-bolder primary-color">
        {/* Heading title */}
        <div className="d-inline-block col-auto my-1 align-self-center">
          <div className="d-block main-header fw-bold">
            Logistics For the Future
          </div>
          <div className="d-block secondary-color sub-header fw-normal">
            On - time, every time.
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

      {/* Analytics card view */}
      <div className="row ms-2 my-1 rounded col-auto">
        {dashboardAnalyticsCardData.map((card) => {
          return (
            <div key={card.id} className="mx-0 my-1 d-inline-block w-auto">
              <AnalyticCard
                header={card.header}
                value={card.value}
                image={card.image}
                gradientAngle={card.gradientAngle}
                fromColor={card.fromColor}
                toColor={card.toColor}
                cardWidth={card.width}
                cardHeight={card.height}
              ></AnalyticCard>
            </div>
          );
        })}
      </div>

      {/* All Orders and Full Details and Row details Section*/}
      <div className="row ms-4">
        <div className="col-7 bg-light rounded">
          <div className="ms-2 mt-2 mb-0 secondary-color fw-bold">
            All the Orders
          </div>
          <div className="">
            <div className="d-flex justify-content-between">
              {/* Date Filters from date to to date */}
              <div className="d-flex align-items-center me-4">
                <div className="sub-header me-2 w-auto fw-medium">From</div>
                <LocalizationProvider className="" dateAdapter={AdapterDayjs}>
                  <DefaultDatePicker
                    className=""
                    label=""
                    value={fromDateValue}
                    onChange={(value) => setFromDateValue(value)}
                    format="DD-MMMM-YYYY"
                  />
                </LocalizationProvider>
              </div>
              <div className="d-flex align-items-center">
                <div className="sub-header me-2 w-auto fw-medium">To</div>
                <LocalizationProvider className="" dateAdapter={AdapterDayjs}>
                  <DefaultDatePicker
                    className=""
                    label=""
                    value={toDateValue}
                    onChange={(value) => setToDateValue(value)}
                    format="DD-MMMM-YYYY"
                  />
                </LocalizationProvider>
              </div>

              {/* Search Box */}
              <div className="ms-5">
                <SearchField
                  onChange={(value) => {
                    setSearchDataText(value);
                  }}
                />
              </div>
            </div>
            {/* Data Tables*/}
            <div className="mt-3 w-100 dashboard-table">
              <TableContainer
                component={Paper}
                sx={{
                  overflowY: "scroll",
                  maxHeight: 280,
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
                      <TableCell style={{ paddingTop: 0 }}>Order Id</TableCell>
                      <TableCell align="right">Product</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Status</TableCell>
                      <TableCell align="right">Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{}}>
                    {dashboardTableRows.map((row, index) => (
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
            </div>
          </div>
        </div>

        {/* Full Detials of the table Selected Row */}
        <div className="col-4 ms-2 mb-1 bg-light rounded">
          {/* Full Detials Header */}
          <div className="clearfix mt-3 mb-2">
            <div className="float-start fw-medium secondary-color">
              Order Info
            </div>
            <div className="float-end fw-medium secondary-color">
              {"2023-07-05"}
            </div>
          </div>

          {/* Full Details Section */}
          <Box
            sx={{
              maxHeight: 320,
              overflowY: "scroll",
              "&::-webkit-scrollbar": { display: "none" },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              marginBottom: "16px",
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
