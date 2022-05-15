// Enable/Disable camera controls
function setCameraControls() {
    const cameracontrolbox = document.getElementById("cameracontrols");

    // Sets camera controls if box been checked
    if (cameracontrolbox.checked) {
        document.getElementById("modelblock").setAttribute("camera-controls", "");

    // Removes camera controls
    } else {
        document.getElementById("modelblock").removeAttribute("camera-controls");
    }
}