import { useLocation } from "react-router-dom";

const DashTittle = () => {
  const { pathname } = useLocation();
  pathname === "/Dashboard/Dashboard"
    ? (document.title = "InvoTrust | Dashboard")
    : pathname;
  pathname === "/Dashboard/Market"
    ? (document.title = "InvoTrust | Market")
    : pathname;
  pathname === "/Dashboard/Deposit"
    ? (document.title = "InvoTrust | Deposit")
    : pathname;
  pathname === "/Dashboard/Withdraw"
    ? (document.title = "InvoTrust | Withdraw")
    : pathname;
  pathname === "/Dashboard/Packages"
    ? (document.title = "InvoTrust | Packages")
    : pathname;
  pathname === "/Dashboard/Settings"
    ? (document.title = "InvoTrust | Settings")
    : pathname;

  return [];
};

export default DashTittle;
