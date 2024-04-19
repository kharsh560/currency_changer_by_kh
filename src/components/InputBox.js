import React, { useEffect, useRef } from "react";

function InputBox({ heading = "From", fxn }) {
  const styleForCard = {
    background: "rgba(255, 255, 255, 0.549)",
    "box-shadow": "0 5px 15px rgba(0, 0, 0, 0.5)",
  };

  const selectedCurrencyRef = useRef(null);

  useEffect(() => {
    fxn(selectedCurrencyRef.current.value);
  }, []);
//   Used to run this function on page load so that the option in select tag is sent to the function "fxn"

  return (
    <div style={styleForCard} className="  flex justify-center rounded-xl ">
      <form className="flex flex-col  justify-center">
        <label className=" p-2 text-2xl font-bold text-red-800/85">
          {heading}
        </label>
        <input
          type="number"
          required
          className=" m-2 w-[50%] bg-slate-500/50 p-1 font-bold"
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
            // onClick={() => fxn(selectedCurrencyRef.current.value)}
            onChange={() => fxn(selectedCurrencyRef.current.value)}
          >
            <option value="usd">usd</option>
            <option value="inr">inr</option>
            <option value="euro">euro</option>
            <option value="pebble">pebble</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default InputBox;
