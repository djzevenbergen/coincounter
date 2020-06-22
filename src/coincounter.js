export class Counter {


  coinCounter = (money, moneyArray = [0, 0, 0, 0]) => {
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


  counter = (denomination) => {
    return (money) => {
      return Math.floor((money / denomination))
    }
  }

  quarter = counter(.25);
  dime = counter(.1);
  nickel = counter(.05);

  coinCounter2 = (money) => {
    const counts = [0, 0, 0, 0];
    let mLeft = money;
    let index = 0;

    counts[index] = quarter(mLeft);
    mLeft -= (counts[index] * .25).toFixed(2);
    index++;

    counts[index] = dime(mLeft);
    mLeft -= (counts[index] * .10).toFixed(2);
    index++;

    counts[index] = nickel(mLeft);
    mLeft -= (counts[index] * .05).toFixed(2);
    index++;

    counts[index] = Math.ceil((mLeft * 100).toFixed(1));

    return counts;
  }

  // console.log(coinCounter2(.76));
  // console.log(coinCounter2(1.42));
  // console.log(coinCounter2(.66));





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


  // coinCounter(.66);
}