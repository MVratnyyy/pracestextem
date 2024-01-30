function reverze() {
    let inputText = document.getElementById("inputText").value;
    let reversedText = inputText.split("").reverse().join("");
    document.getElementById("result").innerText = reversedText;
}

function rozdeleni() {
    let inputText = document.getElementById("inputText").value;
    let words = inputText.split(/\s+/);
    document.getElementById("result").innerText = words.join("\n");
}

function pocitanislov() {
    let inputText = document.getElementById("inputText").value;
    let wordToCount = prompt("Zadejte slovo pro počítání:");
    let count = inputText.split(wordToCount).length - 1;
    document.getElementById("result").innerText = `Počet výskytů slova '${wordToCount}': ${count}`;
}

function nahradit() {
    let inputText = document.getElementById("inputText").value;
    let textToReplace = prompt("Zadejte text k nahrazení:");
    let replacementText = prompt("Zadejte text nahrazení:");
    let replacedText = inputText.replace(new RegExp(textToReplace, 'g'), replacementText);
    document.getElementById("result").innerText = replacedText;
}

function najittext() {
    let inputText = document.getElementById("inputText").value;
    let searchText = prompt("Zadejte hledaný text:");
    let positions = [];
    let pos = inputText.indexOf(searchText);
    while (pos > -1) {
        positions.push(pos);
        pos = inputText.indexOf(searchText, pos + 1);
    }
    document.getElementById("result").innerText = `Pozice hledaného textu: ${positions.join(", ")}`;
}
