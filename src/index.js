document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasks = document.querySelector("#tasks");

  let buttons;

  document.addEventListener("submit", function (e) {
    e.preventDefault();
    let textValue = e.target.newtaskdescription.value;
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = "X";
    button.className = "button";
    li.innerText = textValue + "  ";
    li.appendChild(button);
    tasks.appendChild(li);

    buttons = document.querySelectorAll(".button");
    console.log(buttons);
    for (let button of buttons) {
      button.addEventListener("click", function (e) {
        e.path[1].remove();
      });
    }
  });
});
