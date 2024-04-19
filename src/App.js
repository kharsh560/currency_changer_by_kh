import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";

function App() {
  const [selectedFromCurrency, setSelectedFromCurrency] = useState();
  const [selectedToCurrency, setSelectedToCurrency] = useState();
  // ##################################### BLUNDER #####################################
  // const getSelectedCurrency = (currencyChosen) => {
  //   setSelectedCurrency(currencyChosen);
  //   console.log(currencyChosen);
  // };
  // I don't know Why was I making this function which would do the same thing as setSelectedFromCurrency!!
  // ##################################### BLUNDER #####################################

  return (
    <div className="bgImg w-screen h-screen">
      <div className="h-screen flex justify-center items-center">
        <div className=" p-5 rounded-lg panelBox flex flex-col items-center">
          <InputBox heading="From" fxn={setSelectedFromCurrency} />
          <button
            onClick={() => console.log(selectedFromCurrency)}
            className=" bg-orange-500 p-1 m-2 text-slate-50/85  border-2 border-amber-300  rounded-xl font-extrabold text-lg hover:bg-orange-600 hover:-translate-y-[2px] active:translate-y-1"
          >
            Swap
          </button>
          <InputBox heading="To" fxn={setSelectedToCurrency} />
          <button
            onClick={() => console.log(selectedToCurrency)}
            className=" bg-slate-500/55 text-slate-50/65 p-1 mt-2 w-full  border-2  rounded-xl font-extrabold text-lg hover:bg-orange-600 hover:-translate-y-[2px] active:translate-y-1"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
