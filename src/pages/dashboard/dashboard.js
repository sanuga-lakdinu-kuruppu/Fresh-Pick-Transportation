import React from "react";
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
  AnalyticsCardData,
  DashboardTableRows,
} from "../../utils/constants/uiconstants";
import { DefaultDatePicker } from "../../components/common/defaultdatepicker";

function Dashboard() {
  const [value, setValue] = React.useState("one");
  const [newDateValue, setDateValue] = React.useState(dayjs("2022-04-17"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="">
      <div className="row ms-2 my-3 py-3 h3 fw-bolder primary-color">
        {/* Heading title */}
        <div className="d-inline-block col-auto my-1 align-self-center">
          <div className="d-block main-header fw-bold">
            Logistics For the Future
          </div>
          <div className="d-block secondary-color sub-header fw-normal">
            Penne na bn pahadili madi
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
      {/* Analytics card view */}
      <div className="row ms-2 my-1 rounded col-auto">
        {AnalyticsCardData.map((card) => {
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
              {/* Date Filter */}
              <div className="d-flex align-items-center me-4">
                <div className="sub-header me-2 w-auto fw-medium">From</div>
                <LocalizationProvider className="" dateAdapter={AdapterDayjs}>
                  <DefaultDatePicker
                    className=""
                    label=""
                    value={newDateValue}
                    onChange={(value) => setDateValue(value)}
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
                    value={newDateValue}
                    onChange={(value) => setDateValue(value)}
                    format="DD-MMMM-YYYY"
                  />
                </LocalizationProvider>
              </div>

              {/* Search Box */}
              <div className="ms-5">
                <SearchBox />
              </div>
            </div>
            {/* Data Tables*/}
            <div className="mt-3 w-100 dashboard-table">
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: 300,
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
