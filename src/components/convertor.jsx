import {useEffect, useState} from 'react';
import CurrencyItem from './currencyItem';
import switchIcon from "/src/assets/switch_icon.svg"
import getExchangeRate from '../helpers/getExchangeRate';

const Convertor = () => {
 
  const [convertRate, setConvertRate] = useState({"EUR": 1.00, "USD": 1.00, "UAH": 1.00});
  const [mainItem, setMainItem] = useState([true, false]);
  const [targetCurrency, setTargetCurrency] = useState({from: ["EUR", 1], to: ["EUR", 1]});

  return (
    <div className="w-full  m-[0_auto] p-8 flex justify-center gap-x-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md shadow-lg shadow-blue-500/50">
      <div className='w-[45%]'>
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

      <div className='w-[45%]'>
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
      <p className='text-black'>
        {targetCurrency.from[0] + " " + targetCurrency.from[1]}
      </p>
    </div>
  );
}

export default Convertor;