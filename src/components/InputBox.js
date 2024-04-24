import React, { useEffect, useRef } from "react";

function InputBox({
  label = "From",
  // fxnToUpdateState,
  defaultCurrency,
  displayType = "block",
  // fromCurrencyValue,
  // toCurrencyValue,
  // swapFunctionalityChild,
  amount,
  onAmountChange,
  selectCurrency,
  onCurrencyChange,
  currencyOptions = [],
}) {
  const styleForCard = {
    background: "rgba(255, 255, 255, 0.549)",
    "box-shadow": "0 5px 15px rgba(0, 0, 0, 0.5)",
  };

  const selectedCurrencyRef = useRef(null);

  // useEffect(() => {
  //   fxnToUpdateState(selectedCurrencyRef.current.value);
  // }, []);
  //   Used to run this function on page load so that the option in select tag is sent to the function "fxnToUpdateState"

  return (
    <div
      style={styleForCard}
      className="  flex justify-center rounded-xl w-full "
    >
      <form className="flex flex-col  justify-center">
        <label className=" p-2 text-2xl font-bold text-red-800/85">
          {label}
        </label>
        <input
          type="number"
          required
          placeholder="Enter Amount"
          min="0"
          className={`m-2 w-[50%] bg-slate-500/50 p-1 font-bold ${displayType}`}
          // I used the curly braces for entering class name bcoz I wanted to input a variable over there
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          // Used "&&" so as to deal with the situation where in user has not passed any function to this component
        ></input>
      </form>

      <form className="flex flex-col items-end justify-center">
        <label className=" p-2 text-2xl font-bold text-red-800/85">
          Currency Type
        </label>
        {/* <input type="number" required className=" m-2 w-[30%]"></input> */}
        <div>
          <select
            name="currencies"
            className="m-2 bg-slate-500/50 text-center p-1 font-bold cursor-pointer "
            ref={selectedCurrencyRef}
            defaultValue={defaultCurrency}
            // Used "defaultValue" to set the default option!!
            // onClick={() => fxnToUpdateState(selectedCurrencyRef.current.value)}
            // onChange={() => fxnToUpdateState(selectedCurrencyRef.current.value)}
            // By sir; 32 min
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          >
            34:20 min
            {currencyOptions.map((currency) =>(
              <option key={currency} value={currency}> {currency} </option>
            ))}
            {/* Note:- We used "() => ()" instead of "() => {}" bcoz we did not want to return any value via this callback function! */}
            {/* We used the "key" here to manage react's performance while mapping */}
            {/* <option value="usd">usd</option>
            <option value="inr">inr</option>
            <option value="euro">euro</option>
            <option value="pebble">pebble</option> */}
          </select>
        </div>
      </form>
    </div>
  );
}

export default InputBox;
