let input2 = [];
function alternatingSums(input2) {
  let evenArray = [];
  let oddArray = [];
  let result = [];
  for (let i = 0; i < input2.length; i++) {
    if (i % 2 == 0) {
      evenArray.push(input2[i]);
    } else {
      oddArray.push(input2[i]);
    }
  }
  let sumEvenArray = evenArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  let sumOddArray = oddArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  result.push(sumEvenArray);
  result.push(sumOddArray);
  return result;
}
