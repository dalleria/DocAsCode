
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
        inputValue = document.getElementsByClassName("inputValue")[0];
        outputValue = document.getElementsByClassName("outputValue")[0];

        console.log("CECI EST UN TEST ", inputValue.value);

        var currIn = inputCurrency.value; // input-EUR
        var currOut = outputCurrency.value; // output-EUR, output-GBP, output-USD

        var valueIn = parseFloat(inputValue.value);
        
        switch(currIn) {
            case "input-EUR":
                switch(currOut) {
                    case "output-EUR":
                        outputValue.value = valueIn;
                        break
                    case "output-GBP":
                        outputValue.value = rates.GBP * valueIn / rates.EUR;
                        break;
                    case "output-USD":
                        outputValue.value = rates.USD * valueIn / rates.EUR;
                        break;
                }
                break;
        }
        
    });
});

