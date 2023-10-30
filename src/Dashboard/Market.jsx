// TradingViewWidget.jsx

import { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function Market() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_2cfa1") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "NASDAQ:AAPL",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_2cfa1",
        });
      }
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container col-span-8 row-span-6"
      style={{ height: "100%", width: "100%" }}
    >
      <div
        id="tradingview_2cfa1"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      />
    </div>
  );
}
