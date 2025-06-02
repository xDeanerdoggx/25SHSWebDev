function changeText() {
    document.getElementById("textChange").innerHTML = "Thanks for liking my Webpage!";
}

// Greet user as they type
function greetUser() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = "Hello, " + name + "!";
}

// Hover effect text change
function hoverEffect() {
    document.getElementById("hoverText").innerHTML = "You're hovering!";
}

function resetHover() {
    document.getElementById("hoverText").innerHTML = "Hover text will change";
}

// Change background color
function changeColor() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

// Toggle image display
function toggleImage() {
    let img = document.getElementById("myImage");
    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}

// Add two numbers
function addNumbers() {
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);
    document.getElementById("sumResult").innerHTML = "Sum: " + (num1 + num2);
}

// Scroll text in tab title
var space = " ";
var pos = 0;
var msg = "My Awsome Website";

function Scroll(){
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);
    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout(Scroll, 150);
}
Scroll();