import  { useState, useEffect } from "react";
import MarketLg from "./MarketLg";
import MarketSm from "./MarketSm";


function YourComponent() {
  const [isLGScreen, setIsLGScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    // Update the state when the window is resized
    const handleResize = () => {
      setIsLGScreen(window.innerWidth > 1040);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isLGScreen ? (
        <MarketLg />
      ) : (
        <MarketSm />
      )}
    </>
  );
}

export default YourComponent;
