let input = document.getElementById("input-search");
let button = document.getElementById("buttonX");
input.addEventListener("input", function (e) {
  if (e.target.value) {
    button.style.visibility = "visible";
  } else {
    button.style.visibility = "hidden";
  }
});
function clearInput() {
  button.style.visibility = "hidden";
}

function showMenu() {
  let child = document.querySelector(".container");

  if (child.style.visibility === "hidden" || child.style.visibility === "") {
    child.style = `
        visibility:visible;
        transition:all 0.3s ease 0s;
        max-height:450px;
        `;
  } else {
    child.style = `
        visibility:hidden;
        transition-delay:0s,0s,0.3s;
        max-height:0;
        `;
  }
}
