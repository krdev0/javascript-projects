const API_KEY = "b5a6850a6dd8df4355aff3e5";

const currencyElFirst = document.querySelector("#currency-one");
const amountElFirst = document.querySelector("#amount-one");

const currencyElSecond = document.querySelector("#currency-two");
const amountElSecond = document.querySelector("#amount-two");

const rateEl = document.querySelector("#rate");
const swap = document.querySelector("#swap");

// Fetch rates and update DOM
function calculate() {
    const currencyFirst = currencyElFirst.value;
    const currencySecond = currencyElSecond.value;
    
    const amountFirst = amountElFirst.value;
    // const amountSecond = amountElSecond.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currencyFirst}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currencySecond];
            
            rateEl.textContent = `1 ${currencyFirst} = ${rate} ${currencySecond}`;

            amountElSecond.value = (amountFirst * rate).toFixed(2);
        })
}

calculate();

currencyElFirst.addEventListener("change", calculate);
amountElFirst.addEventListener("input", calculate);
currencyElSecond.addEventListener("change", calculate);
amountElSecond.addEventListener("input", calculate);

swap.addEventListener("click", () => {
    const temp = currencyElFirst.value;

    currencyElFirst.value = currencyElSecond.value;
    currencyElSecond.value = temp;
    calculate();
});
