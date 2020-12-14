window.addEventListener("load", e => {
    let quantfield = document.getElementById("quantity");
    let quotefield = document.getElementById("quote");

    updateamount(quantfield.valueAsNumber * parseFloat(quotefield.textContent));

    quantfield.addEventListener("input", e => {
        updateamount(quantfield.valueAsNumber * parseFloat(quotefield.textContent));
    });
});

function updateamount(val) {
    let amtfield = document.getElementById("amount");

    // calculate the amount of the purchase
    total = val.toLocaleString(navigator.language, { style: "currency", currency: "USD" });
    // TODO: display the total in the output 
    amtfield.value = total

}