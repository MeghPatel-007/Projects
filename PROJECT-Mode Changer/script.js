let btn = document.querySelector("label");
let body = document.querySelector("div");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let currMode = "white";

function mode() {
  if (currMode === "white") {
    currMode = "black";
    body.classList.add("black");
    body.classList.remove("white");
    // console.log(currMode);
    h1.style.color = "white";
    p.style.color = "white";
  } else {
    body.classList.add("white");
    body.classList.remove("black");
    currMode = "white";
    // console.log(currMode);
    h1.style.color = "black";
    p.style.color = "black";
  }
}

btn.addEventListener("click", mode);
