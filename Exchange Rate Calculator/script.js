const API_KEY = "b5a6850a6dd8df4355aff3e5";

const currencyFirst = document.querySelector("#currency-one");
const amountFirst = document.querySelector("#amount-one");

const currencySecond = document.querySelector("#currency-two");
const amountSecond = document.querySelector("#amount-two");

const rate = document.querySelector("#rate");
const swap = document.querySelector("#swap");

// Fetch rates and update DOM
function calculate() {
    console.log("rannn");
}

calculate();

currencyFirst.addEventListener("change", calculate);
amountFirst.addEventListener("input", calculate);
currencySecond.addEventListener("change", calculate);
amountSecond.addEventListener("input", calculate);
