import {useEffect, useState} from 'react';
import CurrencyItem from './currencyItem';
import currencyIcon from '/src/assets/currency_icon.png'
import infoIcon from '/src/assets/info_icon.png'

const CurrencySigns = {
  EUR: "Euro",
  USD: "US Dollars",
  UAH: "Ukrainian hryvnia",
};

const Convertor = () => {
 
  const [convertRate, setConvertRate] = useState({"EUR": 1.00, "USD": 1.00, "UAH": 1.00});
  const [mainItem, setMainItem] = useState([true, false]);
  const [targetCurrency, setTargetCurrency] = useState({from: ["EUR", 1], to: ["EUR", 1]});



  return (
    <div className="w-[95%] lg:w-[70%] m-[2rem_auto] grid grid-flow-rows md:grid-cols-[max-content_1fr] gap-2 md:py-12 py-6 px-2 md:px-4  justify-items-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md shadow-lg shadow-blue-500/50">
      <img
        src={currencyIcon}
        alt="currency-icon"
        className='h-[30px]'
      />
      <div className='flex flex-wrap gap-2 px-4 lg:px-8 w-full'>
        <CurrencyItem
          exchangePositon="from"
          rate={convertRate}
          setRate={setConvertRate}
          mainItem={mainItem[0]}
          mainItems={mainItem}
          setMainItem={setMainItem}
          targetCurrency={targetCurrency}
          setTargetCurrency={setTargetCurrency}
        />
        <CurrencyItem
          exchangePositon="from"
          rate={convertRate}
          setRate={setConvertRate}
          mainItem={mainItem[1]}
          mainItems={mainItem}
          setMainItem={setMainItem}
          targetCurrency={targetCurrency}
          setTargetCurrency={setTargetCurrency}
        />
      </div>
      <img 
        src={infoIcon} 
        alt="info-icon"
        className='h-[30px] hidden sm:block' 
      />
      <div className="flex flex-col w-full px-4">
        <p className="text-neutral-300 text-lg xl:text-xl font-bold">
          <span>{targetCurrency.from[1] + " "}</span>
          <span>{CurrencySigns[targetCurrency.from[0]] + " ="}</span>
        </p>
        <p className="text-white font-bold text-xl xl:text-4xl">
          <span>{targetCurrency.to[1] + " "}</span>
          <span>{CurrencySigns[targetCurrency.to[0]]}</span>
        </p>
      </div>
    </div>
  );
}

export default Convertor;