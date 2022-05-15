// Sets shadow intensity
function shadowIntensity() {
    var shadowint = document.getElementById("shadowint");
    shadowint.addEventListener('change', function () {

        // Sets softness value to 0 as intensity is turned off
        if (shadowint.value == '0') {
            document.getElementById("modelblock").removeAttribute("shadow-intensity");
            document.getElementById("modelblock").removeAttribute("shadow-softness");
            document.getElementById("shadowsoft").value = "0";
        }

        // Sets shadow intensity value
        else {
            document.getElementById("modelblock").setAttribute("shadow-intensity", shadowint.value);
        }
    }, false);
}

// Sets shadow softness
function shadowSoftness() {
    var shadowsoft = document.getElementById("shadowsoft");
    var shadowint = document.getElementById("shadowint");
    shadowsoft.addEventListener('change', function () {
        
        // Checks if intensity is lower than 1, if so it removes softness and alerts
        if (shadowint.value < '1') {
            document.getElementById("modelblock").removeAttribute("shadow-softness");
            document.getElementById("shadowsoft").value = "0";
            alert("Shadow softness cannot be set if shadow intensity is 0.");
        }
        
        // Sets shadow softness value
        else {
            document.getElementById("modelblock").setAttribute("shadow-softness", shadowsoft.value);
        }
    }, false);
}

