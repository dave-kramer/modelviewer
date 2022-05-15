// Allows user to zoom on model
function setZoom() {
    const zoombox = document.getElementById("zoom");

    // Allows zoom if checked
    if (zoombox.checked) {
        document.getElementById("modelblock").setAttribute("disable-zoom", "");

    // Removes zoom from model
    } else {
        document.getElementById("modelblock").removeAttribute("disable-zoom");
    }
}