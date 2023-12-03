import axios from 'axios';
import { useEffect, useState } from 'react';
import Convertor from './components/convertor';
import getExchangeRate from './helpers/getExchangeRate';


const App = () => {

  const [currencyRate, setCurrencyRate] = useState({EUR: 0, USD: 0, UAH: 0});

  useEffect(() => {
    getExchangeRate("UAH", 1).then(data => setCurrencyRate(data));
  }, []);
 
  return (
    <div className="flex flex-col  min-h-screen">
      <header className="flex justify-center items-center w-full py-12 px-4 border-b border-b-white gap-x-4 bg-black text-white">
        <span>€ EUR: {(1 / currencyRate["EUR"]).toFixed(2)}</span>
        <span>$ USD: {(1 / currencyRate["USD"]).toFixed(2)}</span>
      </header>
      <div className="grow flex justify-start items-start py-24 px-[10rem]">
        <Convertor />
      </div>
    </div>
  );
};

export default App;
