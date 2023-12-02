import { useEffect, useState } from "react";
import getExchangeRate from "../helpers/getExchangeRate";

  const currencyStyle = {
    UAH: "🇺🇦 UAH",
    EUR: "🇪🇺 EUR",
    USD: "🇺🇸 USD",
  };

const CurrencyItem = ({rate, setRate, mainItem, setMainItem, mainItems}) => {

  const [currencyAmmout, setCurrencyAmmount] = useState(1);
  const [debouncedValue, setDebouncedValue] = useState(1);
  
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [wasSelected, setWasSelected] = useState(false);

  const handleSelect = (e) => {
    setSelectedCurrency(e.target.value);
    if(!mainItem) {
      setCurrencyAmmount(rate[e.target.value]);
      setWasSelected(true);
    }
  }

  const handleInput = (e) => {
    setCurrencyAmmount(e.target.value);
    if(!mainItem) {
      console.log("change now");
      const mainID = mainItems.indexOf(true);
      const mainID2 = mainItems.indexOf(false);
      const newMainItems = [];
      newMainItems[mainID] = !mainItems[mainID];
      newMainItems[mainID2] = !mainItems[mainID2];
      setMainItem(newMainItems);  
    }      
  }
  //debounce
  useEffect(() => {
    const delay = 1000;
    const timeoutID = setTimeout(() => {
      setDebouncedValue(currencyAmmout);
    }, delay);
    return () => clearTimeout(timeoutID);
  }, [currencyAmmout]);

  useEffect(() => {
    if(mainItem) {
      getExchangeRate(selectedCurrency, debouncedValue).then((result) =>
        setRate(result)
      );
    }
  }, [debouncedValue, selectedCurrency]);
  
  useEffect(() => {
    if(!mainItem) {
      setCurrencyAmmount(rate[selectedCurrency])
    }
  }, [rate])

  return (
    <div className="flex bg-white rounded-md px-1 py-2 text-black">
        <select className="outline-none cursor-pointer" onChange={handleSelect}>
          {
            Object.keys(rate).map(currency => (
              <option value={currency} key={currency}>
                {currencyStyle[currency]}
              </option>
            ))
          }
        </select>
        <input type="text" className="outline-none px-2 h-full" value={currencyAmmout} onChange={handleInput}/>
    </div>
  )
}


export default CurrencyItem;