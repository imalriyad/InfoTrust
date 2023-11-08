import { useOutletContext } from "react-router-dom";
import Pricing from "../Components/Pricing";
const PricingDash = () => {
  const isOpen = useOutletContext();
  return (
    <div
      className={`lg:col-span-8 col-span-full ${isOpen ? "hidden" : "block"}`}
    >
      <Pricing></Pricing>
    </div>
  );
};

export default PricingDash;
