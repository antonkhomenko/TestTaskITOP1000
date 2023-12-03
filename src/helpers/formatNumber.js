
const formatNumber = (n) => {
  if(n % 1 === 0) {
    return n;
  } else {
    return Math.round(n * 100) / 100;
  }
}

export default formatNumber;