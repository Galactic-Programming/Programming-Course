// .Checked = property that determines whether a checkbox is checked or not
//            the checked state of an HTML checkbox or radio button element.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = "Subscribed!";
  } else {
    subResult.textContent = "Not subscribed!";
  }

  if (visaBtn.checked) {
    paymentResult.textContent = "Payment processed using Visa.";
  } else if (masterBtn.checked) {
    paymentResult.textContent = "Payment processed using MasterCard.";
  } else if (paypalBtn.checked) {
    paymentResult.textContent = "Payment processed using PayPal.";
  } else {
    paymentResult.textContent = "No payment method selected.";
  }
};
