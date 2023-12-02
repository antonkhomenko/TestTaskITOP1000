import axios from 'axios'

const getExchangeRate = async (base, ammount) => {
  const response = await axios.get(`https://api.fxratesapi.com/latest?currencies=USD,EUR,UAH&base=${base}&amount=${ammount}`);
  return response.data.rates;
}

export default getExchangeRate;