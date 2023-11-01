import { useEffect } from "react";
function MarketSm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      // Your widget configuration options here
      title: "Cryptocurrencies",
      "tabs": [
        {
          "title": "Overview",
          "title_raw": "Overview",
          "symbols": [
            {
              "s": "CRYPTOCAP:TOTAL"
            },
            {
              "s": "BITSTAMP:BTCUSD"
            },
            {
              "s": "BITSTAMP:ETHUSD"
            },
            {
              "s": "FTX:SOLUSD"
            },
            {
              "s": "BINANCE:AVAXUSD"
            },
            {
              "s": "COINBASE:UNIUSD"
            }
          ],
          "quick_link": {
            "title": "More cryptocurrencies",
            "href": "/markets/cryptocurrencies/prices-all/"
          }
        },
        {
          "title": "Bitcoin",
          "title_raw": "Bitcoin",
          "symbols": [
            {
              "s": "BITSTAMP:BTCUSD"
            },
            {
              "s": "COINBASE:BTCEUR"
            },
            {
              "s": "COINBASE:BTCGBP"
            },
            {
              "s": "BITFLYER:BTCJPY"
            },
            {
              "s": "CME:BTC1!"
            }
          ],
          "quick_link": {
            "title": "More Bitcoin pairs",
            "href": "/symbols/BTCUSD/markets/"
          }
        }],
      // Modify other widget settings here
      "title_link": "/markets/cryptocurrencies/prices-all/",
      "width": 400,
      "height": 660,
      "showChart": true,
      "showFloatingTooltip": false,
      "locale": "en",
      "plotLineColorGrowing": "#2962FF",
      "plotLineColorFalling": "#2962FF",
      "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
      "gridLineColor": "rgba(240, 243, 250, 0)",
      "scaleFontColor": "rgba(120, 123, 134, 1)",
      "showSymbolLogo": true,
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
      "colorTheme": "light"
    });

    const container = document.getElementById("tradingview-widget-container");
    container.appendChild(script);

    
  if (container) {
    container.appendChild(script);
  }

  return () => {
    if (container && script && script.parentNode === container) {
      container.removeChild(script)
    }
  }
  },[])

  return (
    <div className="overflow-x-hidden col-span-full">
      <div
        id="tradingview-widget-container"
        className="tradingview-widget-container"
      >
        <div className="tradingview-widget-container__widget"></div>
        
      </div>
    </div>
  );
}

export default MarketSm;
