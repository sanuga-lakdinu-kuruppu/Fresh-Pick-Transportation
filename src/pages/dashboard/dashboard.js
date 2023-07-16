import React, { useContext, useEffect, useState } from "react";
import "../../assets/styles/gloablestyles.css";
import "./dashboard.css";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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

function Dashboard() {
  //User Defined
  //Navigation Handle
  const navigate = useNavigate();
  const { navSelected, setNavSelected } = useContext(NavContext);
  const handleNavToggleChange = (params) => {
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
  );
}

export default Dashboard;
