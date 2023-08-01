import {
  AccountCircle,
  FireTruck,
  GridView,
  Payment,
  Poll,
} from "@mui/icons-material";
import { LOGO_X64 } from "./configconstants";
import payment_payment from "../../assets/graphics/images/payments_imgs/payement_payment.png";
import payment_increse from "../../assets/graphics/images/payments_imgs/payment_increase.png";
import report_warranty_img from "../../assets/graphics/images/report_imgs/report_warranty_img.png";
import report_bill_img from "../../assets/graphics/images/report_imgs/report_bill_img.png";
import fast_man from "../../assets/graphics/images/report_imgs/fast.png";
import delivery_truck from "../../assets/graphics/images/report_imgs/delivery-truck.png";
const gloablesearchoption = [
  {
    id: 1,
    title: "Search Item 1",
  },
  {
    id: 2,
    title: "Search Item 2",
  },
  {
    id: 3,
    title: "Search Item 3",
  },
  {
    id: 4,
    title: "Search Item 4",
  },
  {
    id: 5,
    title: "Search Item 5",
  },
];
const navMenuData = [
  {
    id: 1,
    key: "dashboard",
    icon: <GridView className="nav-menu-icon" />,
    item: "Dashboard",
  },
  {
    id: 2,
    key: "ride",
    icon: <FireTruck className="nav-menu-icon" />,
    item: "Rides",
  },
  {
    id: 3,
    key: "payment",
    icon: <Payment className="nav-menu-icon" />,
    item: "Payments",
  },
  {
    id: 4,
    key: "report",
    icon: <Poll className="nav-menu-icon" />,
    item: "Reports",
  },
];

//Dashboard Table Rows
const dashBoardTableRows = [
  {
    id: 1,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "2023-07-05",
  },
  {
    id: 2,
    orderId: 187828665488,
    avatar: <AccountCircle />,
    product: "Carrot",
    qty: "115 kg",
    status: "Requested",
    date: "2023-07-05",
  },
];

//Rides Table Rows
const ridesTableRows = [
  {
    id: 1,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "43 km",
    date: "2023-07-05",
  },
  {
    id: 2,
    orderId: 187828665488,
    avatar: <AccountCircle />,
    product: "Carrot",
    qty: "115 kg",
    status: "102 km",
    date: "2023-07-05",
  },
];

//Payment Analytics Card Data
const paymentsAnalyticsCardData = [
  {
    id: 1,
    header: "Total Earn",
    value: 80000,
    image: payment_increse,
    gradientAngle: "315deg",
    fromColor: "#2ecc71",
    toColor: "#FFF",
    width: 250,
    height: 140,
  },
  {
    id: 2,
    header: "Pending",
    value: 42000,
    image: payment_payment,
    gradientAngle: "315deg",
    fromColor: "#3498db",
    toColor: "#FFF",
    width: 250,
    height: 140,
  },
];

//Payment Table Rows
const paymentsTableRows = [
  {
    id: 1,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "2023-07-05",
  },
  {
    id: 2,
    orderId: 46813297654565,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "2023-07-05",
  },
];

const transactionTableRows = [
  {
    avatar: <AccountCircle />,
    id: 1,
    transactionId: "595",
    amount: "550.00",
    date: "2023-07-05",
  },
  {
    avatar: <AccountCircle />,
    id: 2,
    transactionId: "596",
    amount: "650.00",
    date: "2023-07-05",
  },
];

//Reports Table Report Card
const reportCardData = [
  {
    id: 1,
    gradientAngle: "45deg",
    fromColor: "#2ecc71",
    toColor: "#FFF",
    cardHeader: "Delivery Report",
    iconImage: report_warranty_img,
    cardDescription:
      "You can generate delivery report<br/> for your selected period below.",
    sideImage: fast_man,
  },
  {
    id: 2,
    gradientAngle: "45deg",
    fromColor: "#e74c3c",
    toColor: "#FFF",
    cardHeader: "Income Report",
    iconImage: report_bill_img,
    cardDescription:
      "You can generate payment report<br/> for your selected period below.",
    sideImage: delivery_truck,
  },
];
export const gloableSearchOption = gloablesearchoption;
export const DashboardTableRows = dashBoardTableRows;
export const NavMenuData = navMenuData;
export const RidesTableRows = ridesTableRows;
export const PaymentsAnalyticsCardData = paymentsAnalyticsCardData;
export const PaymentsTableRows = paymentsTableRows;
export const ReportCardData = reportCardData;
export const TransactionTableRows = transactionTableRows;
