export const Hyphenate = (number) => {
  number = parseInt(number);
  let hundred = Math.floor(number / 100);
  let rest = number - (hundred * 100);

  if (hundred === 0) return HyphenateTens(number);
  else return HyphenateHundreds(hundred) + HyphenateTens(rest);
}

const HyphenateUnits = (number) => {
  let units = ['zero','one','two','three','four',
              'five','six','seven','eight','nine'];
  return units[number]
}

const HyphenateTeens = (number) => {
  let teens = ['ten','eleven','twelve','thirteen','fourteen',
  'fifteen','sixteen','seventeen','eighteen','nineteen'];
  return teens[number % 10];
}

const HyphenateTens = (number) => {
  if (number < 10) return HyphenateUnits(number); 
  if (number >= 10 && number < 20) return HyphenateTeens(number);

  let tens = ['twenty','thirty','forty','fifty','sixty',
  'seventy','eighty','ninety'];

  let ten = Math.floor(number / 10) - 2;
  let unit = number % 10;

  return tens[ten] + ' ' + HyphenateUnits(unit);
}

const HyphenateHundreds = (number) => {
  return HyphenateUnits(number) + ' hundred ';
}