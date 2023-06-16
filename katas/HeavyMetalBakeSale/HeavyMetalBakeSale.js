export const buy = (list, given) => {
  let total = parseFloat(purchase(list));
  calculateChange(total, given);
}

export const purchase = (list) => {
  let items = list.split(',');
  let total = 0;

  items.forEach(item => {
    switch (item) {
      case 'B':
        total += 0.75;
        break;
      case 'M':
        total += 1.00;
        break;
      case 'C':
        total += 1.35;
        break;
      case 'W':
        total += 1.50;
        break;
      default:
        break;
    }
  });

  return `$${total.toFixed(2)}`;
}

export const calculateChange = (total, given) => {
  if((given - total) < 0){
    return 'Not enough money.'
  }
  return `$${(given - total).toFixed(2)}`;
}