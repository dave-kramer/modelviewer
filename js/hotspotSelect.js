// Hotspot selection
function selected() {

  // Add active class to the current button (highlight it)
  var header = document.getElementById("modelblock");
  var hotspots = header.getElementsByClassName("hotspot");

  // Logs hotspot to clients console
  console.log(header.getElementsByClassName("hotspot"))

  // Adds hotspot by checking the length of the current hotspots and appending +1 upon the length
  for (var i = 0; i < hotspots.length; i++) {
    hotspots[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("selected");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" selected", "");
      }
      // returns selected in console
      this.className += " selected";
    });
  }

}