export const buy = (list, given) => {
  let total = parseFloat(purchase(list));
  calculateChange(total, given);
}

export const purchase = (list, stocks) => {
  let items = list.split(',');
  let total = 0;
  let outOfStocks = false;

  items.forEach(item => {
    switch (item) {
      case 'B':
        if(stocks.Brownie > 0) {
          total += 0.75;
          stocks.Brownie--;
        } else outOfStocks = true;
        break;
      case 'M':
        if(stocks.Muffin > 0) {
          total += 1.00;
          stocks.Muffin--;
        } else outOfStocks = true;
        break;
      case 'C':
        if(stocks.CakePop > 0) {
          total += 1.35;
          stocks.CakePop--;
        } else outOfStocks = true;
        break;
      case 'W':
        if(stocks.Water > 0) {
          total += 1.50;
          stocks.Water--;
        } else outOfStocks = true;
        break;
      default:
        break;
    }
  });

  return outOfStocks ? 'Out of stocks' : `$${total.toFixed(2)}`;
}

export const calculateChange = (total, given) => {
  if((given - total) < 0){
    return 'Not enough money.'
  }
  return `$${(given - total).toFixed(2)}`;
}