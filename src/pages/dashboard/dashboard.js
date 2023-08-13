import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
import { DashboardTableRows as dashboardTableRows } from "../../utils/constants/uiconstants";
import { DefaultDatePicker } from "../../components/common/defaultdatepicker";
import { useNavigate } from "react-router-dom";
import { NavContext } from "../../context/navcontext";
import SearchField from "../../components/searchfield/searchfield";
import trolley_img from "../../assets/graphics/images/dashboard_imgs/trolley_full_details.png";
import { DefaultButton } from "../../components/common/defaultbtn";
import { CustomTableRow } from "../../components/common/tablerow";
import courierdash_analytics from "../../assets/graphics/images/dashboard_imgs/courierdash_analytics_.png";
import shippingdash_analytics from "../../assets/graphics/images/dashboard_imgs/shippingdash_analytics_.png";
import boxesdash_analytics from "../../assets/graphics/images/dashboard_imgs/boxesdash_analytics_.png";
import investmentdash_analytics_ from "../../assets/graphics/images/dashboard_imgs/return-of-investmentdash_analytics_.png";
import {
  doc,
  collection,
  query,
  where,
  onSnapshot,
  updateDoc,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../../config/firebase";

function Dashboard() {
  //User Defined
  //Navigation Handle
  const navigate = useNavigate();
  const { setNavSelected } = useContext(NavContext);
  const handleNavChange = (params) => {
    navigate(`/${params.key}`);
    setNavSelected(params.key);
  };

  const [countOfRequestedDelivers, setCountOfRequestedDelivers] = useState(0);
  useEffect(() => {
    const tempOrdersList = [];
    try {
      const qu = query(
        collection(db, "orders"),
        where("orderStatus", "==", "requested")
      );
      const unsubscribe = onSnapshot(qu, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tempOrdersList.push({ id: doc.id, data: doc.data() });
        });
        setCountOfRequestedDelivers(tempOrdersList.length);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const [countOfOngoingDelivers, setCountOfOngoingDelivers] = useState(0);

  useEffect(() => {
    const tempOrdersList = [];
    const qu = query(
      collection(db, "orders"),
      where("orderStatus", "==", "ongoing")
    );
    try {
      const unsubscribe = onSnapshot(qu, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tempOrdersList.push({ id: doc.id, data: doc.data() });
        });
        setCountOfOngoingDelivers(tempOrdersList.length);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const [countOfCompletedDelivers, setCountOfCompletedDelivers] = useState(0);
  useEffect(() => {
    const tempOrdersList = [];
    const qu = query(
      collection(db, "orders"),
      where("orderStatus", "==", "completed")
    );
    try {
      const unsubscribe = onSnapshot(qu, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tempOrdersList.push({ id: doc.id, data: doc.data() });
        });
        setCountOfCompletedDelivers(tempOrdersList.length);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const [totalEarned, setTotalEarned] = useState(0);
  useEffect(() => {
    const qu = collection(db, "orders");
    try {
      const unsubscribe = onSnapshot(qu, (querySnapshot) => {
        let total = 0;
        querySnapshot.forEach((doc) => {
          console.log(doc.data().deliveryFee);
          total += parseInt(doc.data().deliveryFee);
        });
        setTotalEarned(total);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  //Analytics Card
  const dashboardAnalyticsCardData = [
    {
      id: 1,
      header: "Requested Delivers",
      value: countOfRequestedDelivers,
      image: courierdash_analytics,
      gradientAngle: "315deg",
      fromColor: "#2ecc71",
      toColor: "#FFF",
      width: 250,
      height: 140,
    },
    {
      id: 2,
      header: "Ongoing Delivers",
      value: countOfOngoingDelivers,
      image: shippingdash_analytics,
      gradientAngle: "315deg",
      fromColor: "#e67e22",
      toColor: "#FFF",
      width: 250,
      height: 140,
    },
    {
      id: 3,
      header: "Completed Delivers",
      value: countOfCompletedDelivers,
      image: boxesdash_analytics,
      gradientAngle: "315deg",
      fromColor: "#3498db",
      toColor: "#FFF",
      width: 250,
      height: 140,
    },
    {
      id: 4,
      header: "Total Earned",
      value: totalEarned,
      image: investmentdash_analytics_,
      gradientAngle: "315deg",
      fromColor: "#e74c3c",
      toColor: "#FFF",
      width: 250,
      height: 140,
    },
  ];

  //Date Picker
  const today = dayjs(dayjs().format("YYYY-MM-DD").toString());
  const [fromDateValue, setFromDateValue] = useState(today);
  const [toDateValue, setToDateValue] = useState(today);

  //Search From the table
  const [searchDataText, setSearchDataText] = useState("");

  //For Deliery Location
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const handleDeliveryMethodChanged = (event) => {
    setDeliveryMethod(event.target.value);
  };

  //Fields of the side menu
  const orderId = useRef(null);
  const customerName = useRef(null);
  const customerMobile = useRef(null);
  const itemName = useRef(null);
  const quantity = useRef(null);
  const customerLocation = useRef(null);
  const distance = useRef(null);
  const farmerName = useRef(null);
  const farmerMobile = useRef(null);
  const farmerEmail = useRef(null);
  const pickupLocation = useRef(null);

  //For the form
  const riderName = useRef(null);
  const riderMobile = useRef(null);
  const vehicleNo = useRef(null);

  //order table selected Row
  const [orderTableSelectedRow, setOrderTableSelectedRow] = useState(0);
  const [orderTableSelectedRowId, setOrderTableSelectedRowID] = useState("");

  const handleOrderTableSelectedRow = (row, rowIndex) => {
    setOrderTableSelectedRow(rowIndex);
    setOrderTableSelectedRowID(row.id?.toString());

    const unsub = onSnapshot(doc(db, "orders", `${row.id}`), (doc) => {
      orderId.current.innerText = row.id;
      customerName.current.innerText = doc.data().buyerName?.toString();
      customerMobile.current.innerText = doc.data().buyerMobile?.toString();
      itemName.current.innerText = doc.data().itemName?.toString();
      quantity.current.innerText = doc.data().itemQuantity?.toString();
      customerLocation.current.innerText = doc
        .data()
        .deliveryAddress?.toString();
      distance.current.innerText = doc.data().distance?.toString(); //Not Found
      farmerName.current.innerText = doc.data().sellerName?.toString();
      farmerMobile.current.innerText = doc.data().sellerMobile?.toString();
      farmerEmail.current.innerText = doc.data().sellerEmailAddress?.toString();
      pickupLocation.current.innerText = doc.data().pickupLocation?.toString(); //Not Found
    });
  };

  //fetch Data from the api for table
  const [orderData, setOrderData] = useState([]);
  const q = query(
    collection(db, "orders"),
    where("orderStatus", "==", "ongoing")
  );

  useEffect(() => {
    const ordersArr = [];
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        ordersArr.push({ id: doc.id, data: doc.data() });
      });
      setOrderData(ordersArr);
    });
  }, []);

  //Assign Vehicle to the order
  const [error, setError] = useState("");

  const handleAssignSubmit = async (e) => {
    e.preventDefault();
    const riderDetails = doc(db, "orders", `${orderTableSelectedRowId}`);
    try {
      await updateDoc(riderDetails, {
        riderName: `${riderName.current?.value}`,
      });
      await updateDoc(riderDetails, {
        vehicleNumber: `${vehicleNo.current?.value}`,
      });
      await updateDoc(riderDetails, {
        riderMobile: parseInt(riderMobile.current?.value),
      });
      await updateDoc(riderDetails, {
        deliveryMethod: `${deliveryMethod}`,
      });
      await updateDoc(riderDetails, {
        deliveryStatus: "ongoing",
      });
      alert("Vehicle is assign for order.");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="min-vh-100">
        <div className="row ms-2 my-3 py-3 h3 fw-bolder">
          {/* Heading title */}
          <div className="d-inline-block col-auto my-1 align-self-center primary-color">
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
        <div className="row ms-4 mt-2">
          <div className="col-7 bg-white rounded h-100">
            <div className="ms-2 my-3 secondary-color fw-bold">
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
              <div className="mt-3 mb-3 w-100 dashboard-table">
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
                        selected={orderTableSelectedRow === 0}
                        onClick={() => handleOrderTableSelectedRow(0)}
                      >
                        <TableCell></TableCell>
                        <TableCell style={{ paddingTop: 0 }}>
                          Order Id
                        </TableCell>
                        <TableCell align="right">Product</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Req Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody sx={{}}>
                      {orderData.map((row, index) => (
                        <CustomTableRow
                          key={index}
                          selected={orderTableSelectedRow === index + 1}
                          onClick={() =>
                            handleOrderTableSelectedRow(row, index + 1)
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
                            {row.id}
                          </TableCell>
                          <TableCell sx={{ color: "inherit" }} align="right">
                            {row.data.itemName}
                          </TableCell>
                          <TableCell sx={{ color: "inherit" }} align="right">
                            {row.data.itemQuantity}
                          </TableCell>
                          <TableCell sx={{ color: "inherit" }} align="right">
                            {row.data.orderStatus}
                          </TableCell>
                          <TableCell
                            sx={{
                              borderTopRightRadius: "15px",
                              borderBottomRightRadius: "15px",
                              color: "inherit",
                            }}
                            align="right"
                          >
                            {today.format("YYYY-MM-DD").toString()}
                          </TableCell>
                        </CustomTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
            <div className="row dashboard-table-empty"></div>
          </div>

          {/* Full Detials of the table Selected Row */}
          <div className="col-4 ms-2 mb-1 bg-white rounded">
            {/* Full Detials Header */}
            <div className="clearfix mt-3 mb-2">
              <div className="float-start fw-medium secondary-color">
                Order Info
              </div>
              <div className="float-end fw-medium secondary-color">
                {orderTableSelectedRow > 0 &&
                  today.format("YYYY-MM-DD").toString()}
              </div>
            </div>

            {/* Full Details Section */}
            {orderTableSelectedRow > 0 && (
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
                    <div className="col-auto fw-bolder" ref={orderId}>
                      sadsad
                    </div>
                  </div>

                  {/* Order Info */}
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Customer Name</div>
                      <div className="fw-bold h6" ref={customerName}></div>
                    </div>
                    <div className="col">
                      <div className="fw-lighter h6">Mobile</div>
                      <div className="fw-bold h6" ref={customerMobile}></div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Item Requested</div>
                      <div className="fw-bold h6" ref={itemName}></div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Quantity</div>
                      <div className="fw-bold h6" ref={quantity}></div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Delivery Location</div>
                      <div className="fw-bold h6" ref={customerLocation}></div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Distance</div>
                      <div className="fw-bold h6" ref={distance}></div>
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
                      <div className="fw-bold h6" ref={farmerName}></div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Mobile</div>
                      <div className="fw-bold h6" ref={farmerMobile}></div>
                    </div>
                    <div className="col">
                      <div className="fw-lighter h6">Email</div>
                      <div className="fw-bold h6" ref={farmerEmail}></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="fw-lighter h6">Pickup Location</div>
                    <div className="fw-bold h6" ref={pickupLocation}></div>
                  </div>
                </Box>

                {/* Delivery Info */}
                <div className="clearfix mt-3 mb-2">
                  <div className="fw-medium secondary-color">Delivery Info</div>
                </div>

                <form onSubmit={handleAssignSubmit}>
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
                          inputRef={riderName}
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
                            Method
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={deliveryMethod}
                            label="Location"
                            onChange={handleDeliveryMethodChanged}
                            sx={{ borderRadius: 15 }}
                          >
                            <MenuItem value={"truck"}>Truck</MenuItem>
                            <MenuItem value={"lorry"}>Lorry</MenuItem>
                            <MenuItem value={"small"}>Small</MenuItem>
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
                          inputRef={riderMobile}
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
                          inputRef={vehicleNo}
                          sx={{ minWidth: "100%", marginBottom: "16px" }}
                          InputProps={{ style: { borderRadius: 15 } }}
                        />
                      </div>
                    </div>
                  </Box>

                  {/* Action Button */}
                  <div className="row mb-2">
                    <div className="col">
                      <DefaultButton
                        sx={{ width: "100%", padding: "10px 15px" }}
                        type="submit"
                      >
                        Assign
                      </DefaultButton>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col">
                      <DefaultButton
                        type="reset"
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
                </form>
              </Box>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
