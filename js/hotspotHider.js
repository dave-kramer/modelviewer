// Sets hotspot display to none.
function hotspotHider() {
  const hider = document.getElementById("hider");
  const root = document.getElementById("modelblock");

  // Hides all hotspots if hider checkbox been checked
  if (hider.checked) {
    root.style.setProperty("--display", "none");

  // Sets to block (shown) if unchecked
  } else {
    root.style.setProperty("--display", "block");
  }
}