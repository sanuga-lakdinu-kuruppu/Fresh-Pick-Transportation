import React, { useContext, useState } from "react";
import "./payments.css";
import { CalendarMonth, NotificationAdd } from "@mui/icons-material";
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
import SearchBox from "../../components/searchbox/searchbox";
import {
  DashboardAnalyticsCardData as dashboardAnalyticsCardData,
  DashboardTableRows,
  PaymentsAnalyticsCardData as paymentsAnalyticsCardData,
  PaymentsTableRows as paymentsTableRows,
} from "../../utils/constants/uiconstants";
import AnalyticCard from "../../components/common/analyticscard";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { LOGO_X64 } from "../../utils/constants/configconstants";
import { useNavigate } from "react-router-dom";
import { NavContext } from "../../context/navcontext";
import payment_img from "../../assets/graphics/images/payments_imgs/payments_img.png";

function Payments() {
  //User Defined
  //Navigation Handle
  const navigate = useNavigate();
  const { navSelected, setNavSelected } = useContext(NavContext);
  const handleNavToggleChange = (params) => {
    navigate(`/${params.key}`);
    setNavSelected(params.key);
  };

  //Set the selected tab
  const [selectedTab, setSelectedTab] = useState("receipts");
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  //set the selected Row
  const [selectedRow, setSelectedRow] = useState(0);
  const handleSelectRow = (row, rowIndex) => {
    setSelectedRow(rowIndex);
    console.log(row);
  };

  return (
    <div className="">
      <div className="row ms-2 my-3 py-3 h3 fw-bolder primary-color">
        {/* Heading title */}
        <div className="d-inline-block col-auto my-1 align-self-center">
          <div className="d-block main-header fw-bold">Payments</div>
          <div className="d-block secondary-color sub-header fw-normal">
            Fast, Effecient and always on time
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

      {/* Analytics Card */}
      <div className="row ms-2 my-1 rounded col-auto">
        {paymentsAnalyticsCardData.map((card) => {
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

      {/* All your Payments with full details */}
      <div className="row">
        {/* Rides Tab Sections */}
        <div className="col-8">
          {/* All Your Activities Tab */}
          <div className="row bg-light ms-4 py-2 rounded">
            <div className="h4 secondary-color fw-bolder text-black">
              All your payment instances
              <div className="d-block float-end">
                <img
                  className="top-head-image ms-3"
                  src={payment_img}
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
                  <Tab value="receipts" label="Delivery Receipts" />
                  <Tab value="transactions" label="Transactions" />
                </TabList>
                {/* Receipts Table */}
                <TabPanel value="receipts">
                  <TableContainer
                    component={Paper}
                    sx={{
                      overflowY: "scroll",
                      maxHeight: 410,
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
                        {paymentsTableRows.map((row, index) => (
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
                {/* Transaction Table */}
                <TabPanel value="transactions">
                  <TableContainer
                    component={Paper}
                    sx={{
                      overflowY: "scroll",
                      maxHeight: 410,
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
                        {paymentsTableRows.map((row, index) => (
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

export default Payments;
