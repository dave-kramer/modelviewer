// Neutral light
function neutralLight() {
  const modelViewer = document.querySelector('#modelblock');
  const checkbox = document.querySelector('#neutral');

  // Changes event based on checkbox, environmentImage is set.
  checkbox.addEventListener('change', () => {
    modelViewer.environmentImage = checkbox.checked ? 'neutral' : '';
  });
}