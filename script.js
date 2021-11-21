let upBtn = document.getElementById("upper-case");
let lowBtn = document.getElementById("lower-case");
let propBtn = document.getElementById("proper-case");
let sentBtn = document.getElementById("sentence-case");
let saveBtn = document.getElementById("save-text-file");

upBtn.addEventListener("click", function () {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toUpperCase();
})

lowBtn.addEventListener("click", function () {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toLowerCase();
})

propBtn.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    let splitText = text.split(" ");
    for (let i = 0; i < splitText.length; i++) {
        splitText[i] = sentenceCase(splitText[i]);
    }
    document.querySelector("textarea").value = splitText.join(" ");
})

sentBtn.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    let splitSentence = text.split(". ");

    for (let i = 0; i < splitSentence.length; i++) {
        splitSentence[i] = sentenceCase(splitSentence[i]);
        console.log(sentenceCase(splitSentence[i]));
    }
    document.querySelector("textarea").value = splitSentence.join(". ");
})

function sentenceCase(text) {
    let up = text.slice(0, 1).toUpperCase();
    let low = text.slice(1).toLowerCase();
    return up.concat(low);
}

saveBtn.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    download("text.txt", text);
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}