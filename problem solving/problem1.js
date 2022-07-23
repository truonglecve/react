let input1 = [];
function adjacentElementsProduct(input1) {
  let ketqua = [];
  for (let i = 0; i < input1.length - 1; i++) {
    ketqua.push(input1[i] * input1[i + 1]);
  }
  return Math.max(...ketqua);
}
