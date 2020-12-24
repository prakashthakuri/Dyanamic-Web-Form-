window.addEventListener("load", e => {
    // Dynamically display a password to the user
    document.getElementById("showpass").addEventListener("change", evt => {
        let passfield = document.getElementById("pass");
        // TODO: change the type attribute to show and hide the password

        passfield.type = evt.target.checked ? "text" : "password"
    });

    // Enable or disable form fields based on another form control
    document.getElementById("showveg").addEventListener("change", evt => {
        // get the container for the checkboxes
        let topelem = document.getElementById("toppingitems");
        // TODO: get the checkboxes that do not correspond to vegetarian
        // and turn them on or off based upon the parent checkbox setting
        let cbquery = "input[type='checkbox']:not([data-veg])";
        
        let thecbs = topelem.querySelectorAll(cbquery)

        for (cb of thecbs) {
            if (document.getElementById("showveg").checked) {
                cb.setAttribute("disabled", "disabled");
                cb.parentNode.classList.add("disabled");
                cb.checked = false;
            }
            else {
                cb.removeAttribute("disabled");
                cb.parentNode.classList.remove("disabled");
            }
        }
    });
});