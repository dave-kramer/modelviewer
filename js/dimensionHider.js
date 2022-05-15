function dimensionHider() {
  const dimensionButton2 = document.getElementById("hide-dimensions");
  const modelViewer = document.querySelector('#modelblock');
  modelViewer.querySelector('button[slot="hotspot-dot+X+Y-Z"]').style.visibility = 'hidden'
  modelViewer.querySelector('button[slot="hotspot-dim+Y-Z"]').style.visibility = 'hidden'
  modelViewer.querySelector('button[slot="hotspot-dot-X+Y-Z"]').style.visibility = 'hidden'
  modelViewer.querySelector('button[slot="hotspot-dim-X-Z"]').style.visibility = 'hidden'
  modelViewer.querySelector('button[slot="hotspot-dot-X-Y-Z"]').style.visibility = 'hidden'
  modelViewer.querySelector('button[slot="hotspot-dim-X-Y"]').style.visibility = 'hidden'
  modelViewer.querySelector('button[slot="hotspot-dot-X-Y+Z"]').style.visibility = 'hidden'
  // Same functionality as hotspot hider but for dimensions
  dimensionButton2.addEventListener('change', () => {
    if (dimensionButton2.checked) {
      modelViewer.querySelector('button[slot="hotspot-dot+X+Y-Z"]').style.visibility = 'hidden'
      modelViewer.querySelector('button[slot="hotspot-dim+Y-Z"]').style.visibility = 'hidden'
      modelViewer.querySelector('button[slot="hotspot-dot-X+Y-Z"]').style.visibility = 'hidden'
      modelViewer.querySelector('button[slot="hotspot-dim-X-Z"]').style.visibility = 'hidden'
      modelViewer.querySelector('button[slot="hotspot-dot-X-Y-Z"]').style.visibility = 'hidden'
      modelViewer.querySelector('button[slot="hotspot-dim-X-Y"]').style.visibility = 'hidden'
      modelViewer.querySelector('button[slot="hotspot-dot-X-Y+Z"]').style.visibility = 'hidden'
    } else {
      modelViewer.querySelector('button[slot="hotspot-dot+X+Y-Z"]').style.visibility = 'visible'
      modelViewer.querySelector('button[slot="hotspot-dim+Y-Z"]').style.visibility = 'visible'
      modelViewer.querySelector('button[slot="hotspot-dot-X+Y-Z"]').style.visibility = 'visible'
      modelViewer.querySelector('button[slot="hotspot-dim-X-Z"]').style.visibility = 'visible'
      modelViewer.querySelector('button[slot="hotspot-dot-X-Y-Z"]').style.visibility = 'visible'
      modelViewer.querySelector('button[slot="hotspot-dim-X-Y"]').style.visibility = 'visible'
      modelViewer.querySelector('button[slot="hotspot-dot-X-Y+Z"]').style.visibility = 'visible'
    }
  });
}