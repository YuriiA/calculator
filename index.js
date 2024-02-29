let res = document.getElementById("res");

let buttons = document.getElementsByClassName("valueElm");

const buttonsArray = Array.from(buttons).forEach((element) => {
  element.onclick = function () {
    res.value += element.value;
  };
});

let clearAll = document
  .getElementById("clear")
  .addEventListener("click", () => {
    res.value = "";
  });

let calculate = document
  .getElementById("equal")
  .addEventListener("click", () => {
    try {
      res.value = eval(res.value);
    } catch {
      res.value = "Error";
    }
  });

let deleteOne = document
  .getElementById("delete")
  .addEventListener("click", () => {
    res.value = res.value.toString().slice(0, -1);
  });
