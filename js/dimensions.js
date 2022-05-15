//Dimensions function, sets and calculates the current dimensions for each model automaticly by calculating the pre-set hotspot dots from the modelviewer
const viewer = document.querySelector('#modelblock');

viewer.addEventListener('load', () => {
  const center = viewer.getCameraTarget();
  const size = viewer.getDimensions();
  const x2 = size.x / 2;
  const y2 = size.y / 2;
  const z2 = size.z / 2;

  viewer.updateHotspot({
    name: 'hotspot-dot+X+Y-Z',
    position: `${center.x + x2} ${center.y + y2} ${center.z - z2}`
  });

  viewer.updateHotspot({
    name: 'hotspot-dim+Y-Z',
    position: `${center.x} ${center.y + y2} ${center.z - z2}`
  });
  viewer.querySelector('button[slot="hotspot-dim+Y-Z"]').textContent =
    `${(size.x * 100).toFixed(0)} cm`;

  viewer.updateHotspot({
    name: 'hotspot-dot-X+Y-Z',
    position: `${center.x - x2} ${center.y + y2} ${center.z - z2}`
  });

  viewer.updateHotspot({
    name: 'hotspot-dim-X-Z',
    position: `${center.x - x2} ${center.y} ${center.z - z2}`
  });
  viewer.querySelector('button[slot="hotspot-dim-X-Z"]').textContent =
    `${(size.y * 100).toFixed(0)} cm`;

  viewer.updateHotspot({
    name: 'hotspot-dot-X-Y-Z',
    position: `${center.x - x2} ${center.y - y2} ${center.z - z2}`
  });

  viewer.updateHotspot({
    name: 'hotspot-dim-X-Y',
    position: `${center.x - x2} ${center.y - y2} ${center.z}`
  });
  viewer.querySelector('button[slot="hotspot-dim-X-Y"]').textContent =
    `${(size.z * 100).toFixed(0)} cm`;

  viewer.updateHotspot({
    name: 'hotspot-dot-X-Y+Z',
    position: `${center.x - x2} ${center.y - y2} ${center.z + z2}`
  });
});