// All necessary elements
const drop = document.querySelector(".drag-area"),
    text = drop.querySelector("header"),
    button = drop.querySelector("button"),
    input = drop.querySelector("input");
let file;

button.onclick = () => {
    input.click();
}

// Input - only returns first selected file if multiple selected.
input.addEventListener("change", function () {
    file = this.files[0];
    drop.classList.add("active");
    showFile();
});


// Changes on textcontent on hover
drop.addEventListener("dragover", (event) => {
    event.preventDefault();
    drop.classList.add("active");
    text.textContent = "Release!";
});

// Changes on textcontent back if not hovering
drop.addEventListener("dragleave", () => {
    drop.classList.remove("active");
    text.textContent = "Drop GLB/GLTF Model";
});

// Drop - only returns first selected file if multiple selected.
drop.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showFile();
});

// Sets file and changes displays
function showFile() {
    let fileReader = new FileReader();
    fileReader.onload = () => {
        let fileURL = fileReader.result;
        document.getElementById("modelblock").src = fileURL
    }
    fileReader.readAsDataURL(file);
    document.getElementById("drag-area").style.display = "none";
    document.getElementById("displayblocks").style.display = null;
    document.getElementById("side").style.display = null;
    document.getElementById("hotspotlist").style.display = null;
    document.getElementById("info").style.display = null;

}


