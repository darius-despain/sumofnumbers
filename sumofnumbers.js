// function to add using a for loop
function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor([1, 2, 3]));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumWhile([1, 2, 3]));

function sumRecursion(list, i) {
  if (i <= 0) {
    return 0;
  }
  return sumRecursion(list, i - 1) + list[i - 1];
}

console.log(sumRecursion([1, 2, 3], 3));


function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay([1, 2, 3]));
