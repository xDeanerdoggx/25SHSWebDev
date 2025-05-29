// Function 1: Change paragraph text
function changeText() {
    const el = document.getElementById("textChange");
    el.innerHTML = "Thanks for liking my Webpage!";
    el.classList.add("text-success", "fw-bold");
}

// Function 2: Scrolling title effect
let space = " ";
let pos = 0;
let msg = "User 19";

function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);
    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout(Scroll, 200); // Slowed down for readability
}
Scroll();
// Feature 1: Already added - changeText()

// Feature 2
function changeDemo() {
    document.getElementById("demoClick").innerHTML = "Text changed!";
}

// Feature 3
function hoverMessage() {
    document.getElementById("hoverMsg").innerHTML = "You hovered over me!";
}

// Feature 4
function greetUser() {
    const name = document.getElementById("nameBox").value;
    const msg = `Hello, ${name}! Welcome to my page.`;
    document.getElementById("greetingMsg").innerText = msg;
}

// Feature 5
function changeBgColor() {
    const box = document.getElementById("bgBox");
    box.style.backgroundColor = box.style.backgroundColor === "lightgray" ? "lightblue" : "lightgray";
}

// Feature 6
function showTime() {
    const now = new Date();
    document.getElementById("timeDisplay").innerText = now.toLocaleTimeString();
}

// Feature 7
function toggleImage() {
    const img = document.getElementById("toggleImg");
    img.style.display = img.style.display === "none" ? "block" : "none";
}

// Feature 8
function showAlert() {
    alert("Thanks for visiting my site!");
}

