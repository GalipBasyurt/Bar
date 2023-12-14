const buttons = document.querySelectorAll(".btn-item");
const contents = document.querySelectorAll(".content");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    contents.forEach((content) => content.classList.remove("active"));
    contents[index].classList.add("active");
  });
});
