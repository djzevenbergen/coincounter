export const coinCounter = (money, moneyArray = [0, 0, 0, 0]) => {
  money = Math.ceil(money.toFixed(2) * 100) / 100;
  const val = [0, 0];
  if (money == 0) {
    console.log(moneyArray);
    return moneyArray;
  } else if (money >= .25) {
    val[0] = .25;
    val[1] = 0;
  } else if (money >= .1) {
    val[0] = .1;
    val[1] = 1;
  } else if (money >= .05) {
    val[0] = .05;
    val[1] = 2;
  } else {
    val[0] = .01;
    val[1] = 3;
  }
  money -= val[0];
  moneyArray[val[1]] += 1;
  return coinCounter(money, moneyArray);
}

// const coinCounter = (money, moneyArray = [0, 0, 0, 0], index = 0) => {
//   money = Math.ceil(money.toFixed(2) * 100) / 100;
//   const coinVals = [.25, .1, .05, .01];

//   if (money <= 0) {
//     console.log(moneyArray);
//     return moneyArray;
//   } else if (money >= coinVals[index]) {
//     val = [coinVals[index], index];
//     console.log(val);
//   } else {
//     index += 1;
//     return coinCounter(money, moneyArray, index);
//     console.log(index);
//   }
//   money -= val[0];
//   moneyArray[val[1]] += 1;
//   return coinCounter(money, moneyArray, index);
// }


coinCounter(.66);