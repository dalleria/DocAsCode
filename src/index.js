
const rates = {
	EUR: 1.00,
    GBP: 0.92,
	USD: 1.12
};

window.addEventListener('load', function () {
    var inputCurrency = document.getElementsByClassName("inputCurrency")[0];
    var outputCurrency = document.getElementsByClassName("outputCurrency")[0];

    var inputValue = document.getElementsByClassName("inputValue")[0];
    var outputValue = document.getElementsByClassName("outputValue")[0];
    
    inputValue.addEventListener("change", () => {
        convert();
    });

    outputCurrency.addEventListener("change", () => {
        convert();
    });
});

function convert() {
    // RETRIEVE ALL ELEMENTS
    var inputCurrency = document.getElementsByClassName("inputCurrency")[0];
    var outputCurrency = document.getElementsByClassName("outputCurrency")[0];

    var inputValue = document.getElementsByClassName("inputValue")[0];
    var outputValue = document.getElementsByClassName("outputValue")[0];

    var rateInToOut = document.getElementsByClassName("rate-in-to-out")[0];
    var rateOutToIn = document.getElementsByClassName("rate-out-to-in")[0];

    var currIn = inputCurrency.value; // input-EUR
    var currOut = outputCurrency.value; // output-EUR, output-GBP, output-USD

    var valueIn = parseFloat(inputValue.value);
    
    switch(currIn) {
        case "input-EUR":
            switch(currOut) {
                case "output-EUR":
                    outputValue.value = valueIn;
                    rateInToOut.innerHTML = "1 EUR = 1 EUR";
                    rateOutToIn.innerHTML = "1 EUR = 1 EUR";
                    break;
                case "output-GBP":
                    outputValue.value = rates.GBP * valueIn / rates.EUR;
                    rateInToOut.innerHTML = "1 EUR = " + rates.GBP + " GBP";
                    rateOutToIn.innerHTML = "1 GBP = " + parseFloat(1/rates.GBP) + " EUR";
                    break;
                case "output-USD":
                    outputValue.value = rates.USD * valueIn / rates.EUR;
                    rateInToOut.innerHTML = "1 EUR = " + rates.USD + " USD";
                    rateOutToIn.innerHTML = "1 USD = " + parseFloat(1/rates.USD) + " EUR";
                    break;
            }
            break;
    }
}

