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
    <div className="w-full m-[0_auto] gap-x-6 gap-y-4 py-12 px-8 grid auto-rows-max grid-cols-[30px_1fr] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md shadow-lg shadow-blue-500/50">
      <img
        src={currencyIcon}
        alt="currency-icon"
        className="justify-self-stretch self-center w-[40px]"
      />
      <div className="flex items-center justify-center gap-x-8">
        <div className="w-1/2">
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
        </div>
        <div className="w-1/2">
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
      </div>
      <img
        src={infoIcon}
        alt="info-icon"
        className="justify-self-stretch self-end mb-2"
      />
      <div className="flex flex-col gap-y-2">
        <p className='text-neutral-300 text-xl font-bold'> 
          <span>{targetCurrency.from[1] + " "}</span>
          <span>
            {CurrencySigns[targetCurrency.from[0]] + " ="}
          </span>
        </p>
        <p className='text-white font-bold text-4xl'>
          <span>{targetCurrency.to[1] + " "}</span>
          <span>
            {CurrencySigns[targetCurrency.to[0]]}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Convertor;