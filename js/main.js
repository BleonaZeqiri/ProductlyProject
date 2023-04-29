var hamburger = document.getElementById("hamburger");
var headerNav = document.getElementById("header-navigation");

hamburger.addEventListener("click", () => {
  headerNav.classList.toggle("header-navigation--open");
  document.body.classList.toggle("open-navigation");
});

var popUp = document.getElementById("btn");
var modal = document.getElementById("modal_popup");
var closeThis = document.getElementById("cancel");
var closeButton = document.getElementById("x-button");

function closeModal() {
  modal.classList.remove("modal-show");
}

popUp.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.add("modal-show");
});
closeThis.addEventListener("click", () => {
  closeModal();
});
window.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    closeModal();
  }
});
closeButton.addEventListener("click", () => {
  closeModal();
});
