const elementList = document.querySelector("#list");
const list = new ListBinding(elementList);

const inputText = document.querySelector(`#txt`);

const btnAdd = document.querySelector(`#add`);
const btnRemove = document.querySelector(`#remove`);
const btnClear = document.querySelector(`#clear`);

list.add("Example 1");
list.add("Example 2");

btnAdd.addEventListener("click", function () {
  list.add(inputText.value);
});

btnRemove.addEventListener("click", function () {
  list.remove(inputText.value);
});

btnClear.addEventListener("click", function () {
  list.clear();
});
