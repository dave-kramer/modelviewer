// Interaction prompt
function interactionPrompt() {
    var interactionprompt = document.getElementById('interactionprompt');
    var interactionstyle = document.getElementById('interactionstyle');
    interactionprompt.addEventListener('change', function () {

        // Sets interaction-prompt to none and removes interaction-prompt-style as style doesn't work if prompt isn't set.
        if (interactionprompt.value == 'none') {
            document.getElementById("modelblock").removeAttribute("interaction-prompt-style");
            interactionstyle.selectedIndex = "1";
            document.getElementById("modelblock").setAttribute("interaction-prompt", interactionprompt.value);
        }

        // Sets interaction-prompt value
        else {
            document.getElementById("modelblock").setAttribute("interaction-prompt", interactionprompt.value);
        }
    }, false);
}

// Interaction prompt style
function interactionStyle() {
    var interactionstyle = document.getElementById('interactionstyle');
    var interactionprompt = document.getElementById('interactionprompt');
    interactionstyle.addEventListener('change', function () {

        // Checks interactionprompt value, if none returns style to none.
        if (interactionprompt.value == 'none') {
            interactionstyle.selectedIndex = "1";
            alert("Interaction style cannot be set if prompt is 'None'.");
        }

        // Sets interaction-prompt-style value.
        else {
            document.getElementById("modelblock").setAttribute("interaction-prompt-style", interactionstyle.value);
        }
    }, false);
}
