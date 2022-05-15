// Turns model's auto-rotate off/on
function autorotate() {
    const autorotatebox = document.getElementById("autorotate");

    // Checks if autorotate box has been checked
    if (autorotatebox.checked) {
        document.getElementById("modelblock").setAttribute("auto-rotate", "1");
    } else {
        document.getElementById("modelblock").removeAttribute("auto-rotate");
    }
}

// Sets auto-rotate delay
function autorotateDelay() {
    let autorotatedelay = document.getElementById("autorotatedelay").value * 1000; // sets ms to seconds
    document.getElementById("modelblock").setAttribute("auto-rotate-delay", autorotatedelay);
}