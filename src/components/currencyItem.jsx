import { useEffect, useState } from "react";
import getExchangeRate from "../helpers/getExchangeRate";
import formatNumber from "../helpers/formatNumber";
import isNumber from "../helpers/isNumber";

  const currencyStyle = {
    UAH: "🇺🇦 UAH",
    EUR: "🇪🇺 EUR",
    USD: "🇺🇸 USD",
  };

const CurrencyItem = ({rate, setRate, mainItem, setMainItem, mainItems, targetCurrency, setTargetCurrency}) => {

  const [currencyAmmout, setCurrencyAmmount] = useState(1);
  const [debouncedValue, setDebouncedValue] = useState(1);
  
  const [selectedCurrency, setSelectedCurrency] = useState(() => {
    if(mainItem) return "EUR";
    return "UAH";
  });

  const handleSelect = (e) => { 
    setSelectedCurrency(e.target.value);
    if(!mainItem) {
      setCurrencyAmmount(formatNumber(rate[e.target.value]));
    }
  }

  const handleInput = (e) => {
    if(!isNumber(e.target.value)) {
      return;
    }
    setCurrencyAmmount(e.target.value);
    if(!mainItem) {
      //TODO: make more elegant solution
      const mainID = mainItems.indexOf(true);
      const mainID2 = mainItems.indexOf(false);
      const newMainItems = [];
      newMainItems[mainID] = !mainItems[mainID];
      newMainItems[mainID2] = !mainItems[mainID2];
      setMainItem(newMainItems);  
    }      
  }

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
      setTargetCurrency({...targetCurrency, from: [selectedCurrency, currencyAmmout]})
    } else {
      setTargetCurrency({...targetCurrency, to: [selectedCurrency, currencyAmmout]})
    }
  }, [debouncedValue, selectedCurrency]);
  
  useEffect(() => {
    if(!mainItem) {
      setCurrencyAmmount(formatNumber(rate[selectedCurrency]))
    }
  }, [rate]);


  return (
    <div className="flex bg-white  px-2 text-black rounded-md w-full">
        <select 
          className="outline-none cursor-pointer border-r border-gray-600 py-4" 
          onChange={handleSelect}
          defaultValue={mainItem ? 'EUR' : 'UAH'}
        >
          {
            Object.keys(rate).map(currency => (
                <option value={currency} key={currency} >
                  {currencyStyle[currency]}
                </option>
            ))
          }
        </select>
        <input type="text" className="outline-none py-4 px-[10px] h-full text-lg" value={currencyAmmout} onChange={handleInput}/>
    </div>
  )
}


export default CurrencyItem;