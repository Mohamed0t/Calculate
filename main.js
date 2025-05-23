let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Erorr";
        string = "";
      }
    } else if (value === "AC") {
      string = "";
      input.value = string;
    } else if (value === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string += value;
      input.value = string;
    }
  });
});
