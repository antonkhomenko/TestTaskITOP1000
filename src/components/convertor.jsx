import {useEffect, useState} from 'react';
import CurrencyItem from './currencyItem';
import switchIcon from "/src/assets/switch_icon.svg"
import getExchangeRate from '../helpers/getExchangeRate';

const Convertor = () => {
 
  const [convertRate, setConvertRate] = useState({"EUR": 0, "USD": 0, "UAH": 0});
  const [mainItem, setMainItem] = useState([true, false]);
  // useEffect(() => {
  //   getExchangeRate("EUR", 1).then(data => setConvertRate(data));
  // }, []);


  return (
    <div className="w-full  m-[0_auto] p-8 flex justify-around bg-gray-500 rounded-md">
      <CurrencyItem
        exchangePositon="from"
        rate={convertRate}
        setRate={setConvertRate}
        mainItem={mainItem[0]}
        mainItems={mainItem}
        setMainItem={setMainItem}
      />
      <div className="bg-white rounded-full p-2 cursor-pointer">
        <img
          src={switchIcon}
          alt="switch-icon"
          className="w-[25px] object-contain"
        />
      </div>
      <CurrencyItem
        exchangePositon="to"
        rate={convertRate}
        setRate={setConvertRate}
        mainItem={mainItem[1]}
        mainItems={mainItem}
        setMainItem={setMainItem}
      />
    </div>
  );
}

export default Convertor;