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
  TransactionTableRows as transactionTableRows,
} from "../../utils/constants/uiconstants";
import AnalyticCard from "../../components/common/analyticscard";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { LOGO_X64 } from "../../utils/constants/configconstants";
import { useNavigate } from "react-router-dom";
import { NavContext } from "../../context/navcontext";
import payment_img from "../../assets/graphics/images/payments_imgs/payments_img.png";
import { CustomTableRow } from "../../components/common/tablerow";

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

  //set the selected Row on receipts table
  const [receiptsTableSelectedRow, setReceiptsTableSelectedRow] = useState(0);
  const handleReceiptsTableSelectedRow = (row, rowIndex) => {
    setReceiptsTableSelectedRow(rowIndex);
    setTransactionTableSelectedRow(0);
  };

  const [transactionTableSelectedRow, setTransactionTableSelectedRow] =
    useState(0);
  const handleTransactionTableSelectedRow = (row, rowIndex) => {
    setTransactionTableSelectedRow(rowIndex);
    setReceiptsTableSelectedRow(0);
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
          <div className="row bg-white ms-4 mt-3 py-2 rounded">
            <div className="h4 secondary-color fw-bolder">
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
                          selected={receiptsTableSelectedRow === 0}
                          onClick={() => handleReceiptsTableSelectedRow(0)}
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
                          <CustomTableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={receiptsTableSelectedRow === index + 1}
                            onClick={() =>
                              handleReceiptsTableSelectedRow(row, index + 1)
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
                          selected={transactionTableSelectedRow === 0}
                          onClick={() => handleTransactionTableSelectedRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell sx={{ paddingTop: 0 }} align="left">
                            Transaction Id
                          </TableCell>
                          <TableCell align="center">(LKR) Amount</TableCell>
                          <TableCell align="right">Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {transactionTableRows.map((row, index) => (
                          <CustomTableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={transactionTableSelectedRow === index + 1}
                            onClick={() =>
                              handleTransactionTableSelectedRow(row, index + 1)
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
                            <TableCell sx={{ color: "inherit" }} align="left">
                              {row.transactionId}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="center">
                              {row.amount}
                            </TableCell>
                            <TableCell
                              sx={{
                                color: "inherit",
                                borderTopRightRadius: "15px",
                                borderBottomRightRadius: "15px",
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
          </div>
        </div>

        {/* Full Details Tab */}
        <div className="col-4">
          <div className="bg-white rounded ms-3 me-2 mt-3 p-2 mb-2">
            {/* Full Detials Header */}
            <div className="clearfix mt-3 mb-2">
              <div className="float-start fw-medium secondary-color">
                Receipt
              </div>
              <div className="float-end fw-medium secondary-color">
                {(receiptsTableSelectedRow > 0 ||
                  transactionTableSelectedRow > 0) &&
                  "2023-07-05"}
              </div>
            </div>

            {/* Full Details Section */}
            {(receiptsTableSelectedRow > 0 && (
              <Box
                sx={{
                  maxHeight: 500,
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
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Order ID</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold h6">46813297654564</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Order Date</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold h6">2023-07-05</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Item Requested</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold h6">Korean (Long) Radish</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Pickup Location</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold h6">
                        165/52, Temple Road, Galle.
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Delivery Location</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold h6">
                        4A, Main Street, Minuwangoda.
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Total Wieght</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold h6">115 kg</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Total Distance</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold h6">42 km</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Rider Name</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold h6">saman_perera</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Rider Mobile</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold h6">0761234567</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Delivery Method</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold h6">Truck</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Vehicle Number</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold h6">BGN - 1649</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Delivery Fee</div>
                    </div>
                    <div className="col">
                      <div className="fw-bold h6">LKR 624.00</div>
                    </div>
                  </div>
                </Box>
              </Box>
            )) ||
              (transactionTableSelectedRow > 0 && (
                <Box
                  sx={{
                    maxHeight: 500,
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
                    <div className="row mb-3">
                      <div className="col">
                        <div className="fw-lighter h6">Transaction ID</div>
                      </div>
                      <div className="col">
                        <div className="fw-bold h6">595</div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <div className="fw-lighter h6">Transaction Date</div>
                      </div>
                      <div className="col">
                        <div className="fw-bold h6">2023-07-05</div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <div className="fw-lighter h6">Account Holder</div>
                      </div>
                      <div className="col">
                        <div className="fw-bold h6">Transo Pvt Ltd.</div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <div className="fw-lighter h6">Account Number</div>
                      </div>
                      <div className="col">
                        <div className="fw-bold h6">9678136294</div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <div className="fw-lighter h6">Amount</div>
                      </div>
                      <div className="col">
                        <div className="fw-bold h6">550.00</div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <div className="fw-lighter h6">Total Wieght</div>
                      </div>
                      <div className="col">
                        <div className="fw-bold h6">115 kg</div>
                      </div>
                    </div>
                  </Box>
                </Box>
              ))}
            <div className="row payment-fullinfo-empty"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
