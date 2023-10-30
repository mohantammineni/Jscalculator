let display = document.getElementById("display");
let keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (display.innerText === "0" || display.innerText === "Error") {
      display.innerText = "";
    }

    let keyValue = key.innerText;

    switch (keyValue) {
      case "AC":
        display.innerText = "0";
        break;
      case "+/-":
        if (display.innerText !== "0") {
          display.innerText = display.innerText.includes("-")
            ? display.innerText.substring(1)
            : "-" + display.innerText;
        }
        break;
      case "%":
        try {
          display.innerText = eval(display.innerText) / 100;
        } catch {
          display.innerText = "Error";
        }
        break;
      case "x":
        display.innerText += "*";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText.replace(/x/g, "*"));
        } catch {
          display.innerText = "Error";
        }
        break;
      default:
        display.innerText += keyValue;
        break;
    }
  });
});
