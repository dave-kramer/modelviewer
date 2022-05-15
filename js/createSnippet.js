function createSnippet() {
    var snippetmodel = document.getElementById('snippetmodel');
    document.getElementById("modelblock").removeAttribute("onclick")
    document.getElementById("modelblock").removeAttribute("ondblclick")
    snippetmodel.textContent = document.getElementById('displayblocks').innerHTML;
    // console.log(document.getElementById('displayblocks').innerHTML);
    document.getElementById("modelblock").setAttribute("ondblclick", "hotspotAdd()")
    document.getElementById("modelblock").setAttribute("onclick", "selection()")
}
