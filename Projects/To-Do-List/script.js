const input = document.getElementById("entry");
const btn = document.getElementById("entry__add__btn");
const dataList = document.getElementById("data__list");

btn.addEventListener("click", () => {
  console.log(input.value);
  const data = input.value;
  const count = localStorage.length;
  if (localStorage.getItem(data) === null) {
    localStorage.setItem(data, count);
    displayList();
  } else {
    window.alert("Item already in the list");
  }
});

const displayList = () => {
  let localStorageObject = window.localStorage;
  let localStorageData = [];

  for (let i = 0; i < localStorageObject.length; i++) {
    let key = localStorageObject.key(i);
    let value = localStorageObject.getItem(key);
    // localStorageData.push({key : key, value : value});
    localStorageData[value] = key;
  }

  console.log(localStorageData);

  dataList.innerHTML = "";
  localStorageData.forEach((element) => {
    dataList.innerHTML += `<li>${element}</li>`;
  });
};

displayList();
