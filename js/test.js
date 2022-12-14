const filterThis = [2, 4, 3, 6, 8, 9];

const filter = (arr, fn) => {
  const filteredArr = [];
  for (let elem of arr) {
    if (fn(elem)) filteredArr.push(elem);
  }
  return filteredArr;
};

console.log(filter(filterThis, (element) => element % 3 === 0));
