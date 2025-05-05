function makeBigger() {
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
}

function changeStyle() {
    const textArea = document.getElementById("userText");
    const fancy = document.getElementById("fancy").checked;

    if (fancy) {
        alert("Now it's fancy.");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        alert("Back to normal.");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooify() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-Moo";
        }
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(". ");
}
