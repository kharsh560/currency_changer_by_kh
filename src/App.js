import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [selectedFromCurrency, setSelectedFromCurrency] = useState("usd");
  const [selectedToCurrency, setSelectedToCurrency] = useState("inr");
  // By sir
  const [amount, setAmount] = useState();
  const [convertedAmount, setconvertedAmount] = useState(0);
  // console.log(selectedFromCurrency);
  // the hook which we created to get the conversion rates of "selectedFromCurrency" into different currencies.
  const currencyInfo = useCurrencyInfo(selectedFromCurrency);
  // console.log(currencyInfo);
  //It will return the JSON of keys as well as conversion rates
  const currencyOptionsBackend = Object.keys(currencyInfo);
  // console.log(currencyOptionsBackend);
  //It will give us only the keys from the JSON data we get in return
  const currencyData = currencyInfo[selectedToCurrency];
  // console.log(currencyData);
  // console.log(currencyOptionsBackend);

  // 48:30 Swap functionality
  // const swapFunctionality = () => {
  //   setSelectedFromCurrency(selectedToCurrency);
  //   setSelectedToCurrency(selectedFromCurrency);
  //   // Yes no extra variable needed bcoz, the previous state is still present in react!!
  //   // aslo. if the user has already converted some amount, then those should also be exchanged
  //   setconvertedAmount(amount);
  //   setAmount(convertedAmount);
  // };

  // 49:50 setting the convert button function
  const convertFunctionality = () => {
    // setconvertedAmount(Math.round(amount * currencyData));
    setconvertedAmount((amount * currencyData).toFixed(3));
    // document.getElementById("ResultBox").className
  };

  // ##################################### BLUNDER #####################################
  // const getSelectedCurrency = (currencyChosen) => {
  //   setSelectedCurrency(currencyChosen);
  //   console.log(currencyChosen);
  // };
  // I don't know Why was I making this function which would do the same thing as setSelectedFromCurrency!!
  // ##################################### BLUNDER #####################################

  // const swapFunctionality = () => {
  //   let a = selectedFromCurrency;
  //   setSelectedFromCurrency(selectedToCurrency);
  //   setSelectedToCurrency(a);
  // }

  return (
    <div className="bgImg w-screen h-screen">
      <div className="h-screen flex justify-center items-center">
        <div className=" p-5 rounded-lg panelBox flex flex-col items-center">
          <InputBox
            heading="From"
            // fxnToUpdateState={setSelectedFromCurrency}
            defaultCurrency="usd"
            // fromCurrencyValue={selectedFromCurrency}
            currencyOptions={currencyOptionsBackend}
            onAmountChange={setAmount}
            // onCurrencyChange ={(e) => setAmount(e)}
            onCurrencyChange={setSelectedFromCurrency}
            selectCurrency={selectedFromCurrency}
            // onAmountChange = {(amount) => setAmount(amount)}
            // onAmountChange={setAmount}
          />
          <button
            // onClick={console.log(selectedFromCurrency)}
            className=" bg-orange-500 p-1 m-2 text-slate-50/85  border-2 border-amber-300  rounded-xl font-extrabold text-lg hover:bg-orange-600 hover:-translate-y-[2px] active:translate-y-1"
          >
            Swap
          </button>
          <InputBox
            label="To"
            // fxnToUpdateState={setSelectedToCurrency}
            defaultCurrency="inr"
            displayType="invisible"
            // Using display:hidden/none will take the element's space also
            // But using Visibility as "invisible" in 'Tailwind' only hides the element keeping its space intact!!
            toCurrencyValue={selectedToCurrency}
            onCurrencyChange={setSelectedToCurrency}
            currencyOptions={currencyOptionsBackend}
            selectCurrency={selectedToCurrency}
          />
          <button
            onClick={convertFunctionality}
            className=" bg-slate-500/55 text-slate-50/65 p-1 mt-2 w-full  border-2  rounded-xl font-extrabold text-lg hover:bg-orange-600 hover:-translate-y-[2px] active:translate-y-1"
          >
            {/* `Convert ${selectedFromCurrency} to ${selectedToCurrency}` */}
            Convert {amount} {selectedFromCurrency} to {selectedToCurrency}
          </button>
          <div id="ResultBox" className="bg-black/60 p-2 rounded-lg m-1 w-fit h-fit text-white ">
            {convertedAmount} {selectedToCurrency}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
