// Enable panning interactions using two-finger touch
function panning() {
    const panningbox = document.getElementById("panning");

    // Turns panning on if box has been checked.
    if (panningbox.checked) {
        document.getElementById("modelblock").setAttribute("enable-pan", "1");
    } else {
        document.getElementById("modelblock").removeAttribute("enable-pan");
    }
}