// move to mouse click position
let dropShadow = document.querySelector(".drop_shadow");
document.addEventListener("click", (ev) => {
  dropShadow.style.top = "0%";
  dropShadow.style.left = "0%";
  dropShadow.style.transform = `translate(${ev.clientX - 40}px, ${
    ev.clientY - 40
  }px)`;
});
