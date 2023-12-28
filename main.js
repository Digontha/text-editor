const textarea = document.getElementById("text");

function f1(e) {
    let frontValue = e.value
    textarea.style.fontSize = frontValue + "px";
}
function f2(e) {
    let frontValue = e.value
    textarea.style.color = frontValue ;
}

function f3(e) {
    let fontValue = e.value;
    textarea.style.fontFamily = fontValue;
}

function addNewPage() {
    var existingTextarea = document.getElementById('text');
    existingTextarea.parentNode.removeChild(existingTextarea);
    var newTextarea = document.createElement("textarea");
    newTextarea.placeholder = "Enter Your Text";
    newTextarea.className = "textarea";
    newTextarea.name = "textarea";
    newTextarea.id = "text";
    newTextarea.cols = "30";
    newTextarea.rows = "10";
    document.querySelector('.section').appendChild(newTextarea);
}

