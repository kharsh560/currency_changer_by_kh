import React, { useEffect } from "react";

function useCurrencyInfo(currency) {
  const [Data, setData] = useEffect({});
  useEffect(() => {
    // "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json" Its not working, some changes were made!
    // Also note: You need to put "backticks" -> (``) in fetch's url bcoz it has a variable inserted into it which is "currency"
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
}
// 20:10 min :-
export default useCurrencyInfo;

