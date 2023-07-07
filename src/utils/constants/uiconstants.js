import { FireTruck, GridView, Payment, Poll } from "@mui/icons-material";
import { LOGO_X64 } from "./configconstants";

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

const analyticsCardData = [
  {
    id: 1,
    header: "Requested Delivers",
    value: 24,
    image: LOGO_X64,
    gradientAngle: "315deg",
    fromColor: "#2ecc71",
    toColor: "#FFF",
    width: 250,
    height: 140,
  },
  {
    id: 2,
    header: "Ongoing Deliver",
    value: 5,
    image: LOGO_X64,
    gradientAngle: "315deg",
    fromColor: "#e67e22",
    toColor: "#FFF",
    width: 250,
    height: 140,
  },
  {
    id: 3,
    header: "Completed Delivers",
    value: 24,
    image: LOGO_X64,
    gradientAngle: "315deg",
    fromColor: "#3498db",
    toColor: "#FFF",
    width: 250,
    height: 140,
  },
  {
    id: 4,
    header: "Total Earned",
    value: 426523,
    image: LOGO_X64,
    gradientAngle: "315deg",
    fromColor: "#e74c3c",
    toColor: "#FFF",
    width: 250,
    height: 140,
  },
];

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

// Dashboard
//Dashboard Table Headers
const dashboardHeadCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
  },
];

//Table Data Rows
const dashBoardTableRows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

export const DashboardHeadCells = dashboardHeadCells;
export const DashboardTableRows = dashBoardTableRows;
export const NavMenuData = navMenuData;
export const AnalyticsCardData = analyticsCardData;
