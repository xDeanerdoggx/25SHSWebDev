function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
   }

   var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();

// 1. Change background color (W3Schools DOM example)
function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
    // Source: https://www.w3schools.com/js/js_htmldom_css.asp
}

// 2. Show current time
function showTime() {
    let now = new Date();
    alert("Current time is: " + now.toLocaleTimeString());
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
}

// 3. Count button clicks
let clickCount = 0;
function countClicks() {
    clickCount++;
    document.getElementById("clickCounter").innerText = " " + clickCount;
}

// 4. Show user input
function showInput() {
    let text = document.getElementById("userInput").value;
    document.getElementById("outputText").innerText = "You typed: " + text;
}

// 5. Toggle visibility of a box
function toggleVisibility() {
    let box = document.getElementById("hiddenBox");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

// 6. Change image on button click
let imageToggle = true;
function changeImage() {
    let img = document.getElementById("sampleImage");
    if (imageToggle) {
        img.src = "https://via.placeholder.com/100/ff0000";
    } else {
        img.src = "https://via.placeholder.com/100";
    }
    imageToggle = !imageToggle;
}

// Keep this from your original script
function changeText() {
    document.getElementById("textChange").innerHTML = "Thanks for liking my Webpage";
}

var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);
    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout("Scroll()", 150); // slowed down for better effect
}
Scroll();

// 8. Change text on mouseover and reset on mouseout
function changeOnHover() {
    document.getElementById("hoverText").innerText = "You're hovering!";
    // Source: https://www.w3schools.com/jsref/event_onmouseover.asp
}

function resetText() {
    document.getElementById("hoverText").innerText = "Hover over this text!";
}
