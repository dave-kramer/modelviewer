
//hotspot counter so we can keep track of how many we have
var hotspotCounter = 0;
function hotspotAdd(MouseEvent) {
    const viewer = document.querySelector('#modelblock');
    const entry_list = document.querySelector("#entries");

    const x = event.clientX
    const y = event.clientY
    const positionAndNormal = viewer.positionAndNormalFromPoint(x, y);
    if (positionAndNormal == null) {
        console.log('no hit result: mouse = ', x, ', ', y);
        return;
    }
    const { position, normal } = positionAndNormal;

    // create the hotspot
    const hotspot = document.createElement('button');
    hotspot.slot = `hotspot-${hotspotCounter++}`;
    hotspot.classList.add('hotspot');
    hotspot.id = `hotspot-${hotspotCounter}`;
    hotspot.innerText = hotspotCounter;

    hotspot.dataset.position = position.toString();
    if (normal != null) {
        hotspot.dataset.normal = normal.toString();
    }
    viewer.appendChild(hotspot);
    console.log('mouse = ', x, ', ', y, positionAndNormal);

    var element = document.createElement("div");
    document.getElementById(`hotspot-${hotspotCounter}`).appendChild(element);

    document.querySelector('input').value = "";
    const entry = '';

    const entry_div = document.createElement('div');
    entry_div.classList.add('entry');

    const entry_content = document.createElement('div');
    entry_content.classList.add('content');

    const entry_input = document.createElement('TEXTAREA');
    entry_input.classList.add('hotspotbox');
    entry_input.value = entry;
    entry_input.setAttribute('readonly', 'readonly');

    entry_content.appendChild(entry_input);

    const entry_actions = document.createElement('div');
    entry_actions.classList.add('actions');

    const entry_edit = document.createElement('button');
    entry_edit.classList.add('edit');
    entry_edit.innerText = 'Edit';

    const entry_del = document.createElement('button');
    entry_del.classList.add('delete');
    entry_del.innerText = 'Delete';

    const entry_name = document.createElement('text');
    entry_name.classList.add('text');
    entry_name.innerText = hotspot.id;

    const entry_slider = document.createElement('INPUT')
    entry_slider.classList.add('rangeslider');
    entry_slider.id = `${hotspot.id}-slider`
    entry_slider.setAttribute("type", "range");
    entry_slider.setAttribute("min", "10");
    entry_slider.setAttribute("max", "60");
    entry_slider.setAttribute("value", "20");
    entry_slider.setAttribute("disabled", "disabled");

    const entry_color = document.createElement('INPUT')
    entry_color.classList.add('colorpicker');
    entry_color.id = `${hotspot.id}-color`
    entry_color.setAttribute("type", "color");
    entry_color.setAttribute("value", "#39b8e2");

    const entry_textcolor = document.createElement('INPUT')
    entry_textcolor.classList.add('colorpicker');
    entry_textcolor.id = `${hotspot.id}`
    entry_textcolor.setAttribute("type", "color");
    entry_textcolor.setAttribute("value", "black");

    entry_actions.appendChild(entry_edit);
    entry_actions.appendChild(entry_del);
    entry_actions.appendChild(entry_name);
    entry_actions.appendChild(entry_slider);
    entry_actions.appendChild(entry_color);
    entry_actions.appendChild(entry_textcolor);

    entry_div.appendChild(entry_actions);
    entry_div.appendChild(entry_content);

    entry_list.appendChild(entry_div);

    entry_edit.addEventListener('click', (e) => {
        if (entry_edit.innerText.toLowerCase() == "edit") {
            entry_edit.innerText = "Save";
            entry_slider.removeAttribute("disabled");
            entry_input.removeAttribute("readonly");
            entry_input.focus();
            document.getElementById(`${entry_name.innerText}`).style.backgroundColor = "red";
        } else {
            entry_edit.innerText = "Edit";
            document.getElementById(`${entry_name.innerText}`).removeChild(element)
            element = document.createElement("div");
            element.classList.add('annotation');
            element.appendChild(document.createTextNode(entry_input.value));
            document.getElementById(`${entry_name.innerText}`).appendChild(element);
            size = document.getElementById(`${entry_slider.id}`).value
            minSize = size - 5
            document.getElementById(`${entry_name.innerText}`).style.width = size + "px";
            document.getElementById(`${entry_name.innerText}`).style.height = size + "px";
            document.getElementById(`${entry_name.innerText}`).style.borderRadius = size + "px";

            entry_slider.setAttribute("disabled", "disabled")
            entry_input.setAttribute("readonly", "readonly");
            document.getElementById(`${entry_name.innerText}`).style.backgroundColor = `${entry_color.value}`;
            document.getElementById(`${entry_name.innerText}`).style.color = `${entry_textcolor.value}`;
        }
    });


    entry_del.addEventListener('click', (e) => {
        entry_list.removeChild(entry_div);
        document.getElementById(`${entry_name.innerText}`).remove();
    });
}