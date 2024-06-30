import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [Data, setData] = useState({});
  // console.log(currency);
  useEffect(() => {
    // "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json" Its not working, some changes were made!
    // Also note: You need to put "backticks" -> (``) in fetch's url bcoz it has a variable inserted into it which is "currency"
    // "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
    // this is also not working:-
    // `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/currencies/${currency}.json`
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    // .then((res) => setData(toString(res[currency])));
    // So, I needed to remove the "toString()" method in order to get the return value of the API as onject only and not as "Array"
  }, [currency]);
  // console.log(Data);
  return Data;
}
// 20:10 min :-
export default useCurrencyInfo;
