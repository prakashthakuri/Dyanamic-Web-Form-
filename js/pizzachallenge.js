window.addEventListener("load", e => {
    // listen for form control changes as they happen immediately
    document.getElementById("pizzaform").addEventListener("input", updateformtotal);

    // perform a custom reset of the form when the user clicks reset
    // so we can fire our own resetfinished event
    document.getElementById("pizzaform").addEventListener("reset", e => {
        e.target.reset();
    });
    document.getElementById("btnreset").addEventListener("click", e => {
        // Fire the reset event manually so we can then fire our own custom
        // event to reset the form total amount
        evt = new Event("reset");
        document.getElementById("pizzaform").dispatchEvent(evt);
        evt = new Event("resetfinished");
        document.getElementById("pizzaform").dispatchEvent(evt);
    });
    // When our custom resetfinished event fires, update the form total
    // The form controls should all be reset at this point 
    document.getElementById("pizzaform").addEventListener("resetfinished", e => {
        updateformtotal();
    });

    // initialize the total amount
    updateformtotal();
});

function updateformtotal() {
    let totalelem = document.getElementById("total");
    let totalamt = 0.0;

    switch (document.getElementById("saucebase").selectedIndex) {
        case 1:
            totalamt += 0.5;
            break;
        case 2:
            totalamt += 0.75;
            break;
    }

    switch (document.getElementById("pizzasize").selectedIndex) {
        case 0:
            totalamt += 14.0;
            break;
        case 1:
            totalamt += 16.0;
            break;
        case 2:
            totalamt += 20.0;
            break;
    }

    tops = document.getElementById("toppingslist").getElementsByClassName("toppingitem");
    for (const topping of tops) {
        if (topping.checked) {
            totalamt += 0.4;
        }
    }

    if (!isNaN(val = parseInt(document.getElementById("cokes").value))) {
        totalamt += val * 1.25;
    }
    if (!isNaN(val = parseInt(document.getElementById("dietcokes").value))) {
        totalamt += val * 1.25;
    }
    if (!isNaN(val = parseInt(document.getElementById("sprites").value))) {
        totalamt += val * 1.25;
    }

    totalelem.value = totalamt.toFixed(2);
}