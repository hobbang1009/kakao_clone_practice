const footerInput = document.querySelector(".messages__footer-input");
const footerIcon1 = document.querySelector(".messages__footer-option");
const footerIcon2 = document.querySelector(".messages__footer-icons");

const colorRed = "colorRed";
const displayNone = "displayNone";
const changedInputSetting = "changedInputSetting";

function focusIn() {
  footerIcon1.classList.add(displayNone);
  footerIcon2.classList.add(displayNone);
}

function focusOut() {
  footerIcon1.classList.remove(displayNone);
  footerIcon2.classList.remove(displayNone);
}

function init() {
  footerInput.addEventListener("focusin", focusIn);
  footerInput.addEventListener("focusout", focusOut);
}

init();
