// Sets camera to correct degrees when value been given.
const setCamera = () => {
    let cameraX = document.getElementById("xdegrees").value;
    let cameraY = document.getElementById("ydegrees").value;

    // Turns values into string
    position = `${cameraX}deg ${cameraY}deg`

    // Sets camera orbit to given values
    document.getElementById("modelblock").setAttribute("camera-orbit", position);
}