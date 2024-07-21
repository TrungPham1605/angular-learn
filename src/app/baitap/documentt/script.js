document.getElementById('formatButton').addEventListener('click', function() {
    // Get the input text
    let inputText = document.getElementById('inputText').value;

    inputText = inputText.replace(/\s{2,}/g, ' ');

    inputText = inputText.replace(/(?:^|\.\s*)([a-z])/g, function(match, p1) {
        return match.toUpperCase();
    });

    document.getElementById('outputText').textContent = inputText;
});
