const list = ["nick", "stew", "nick"];

const sameName = (arr, str) => {
  arr.map((element, index) => {
    if (element !== str) {
      arr[index] = str;
    }
  });
  return arr;
};

sameName(list, "nick");
console.log(sameName(list, "nick"));
