const left = document.querySelector(".left")
const right = document.querySelector(".right")
const change = (x) => {
    x.classList.toggle("change");
    left.classList.toggle("active")
    right.classList.toggle("bor")
};