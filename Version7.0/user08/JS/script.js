function changeText() {
    document.getElementById("textChange0").innerHTML="Thanks for liking my Webpage";
    document.getElementById("textChange1").innerHTML="Thanks for liking my Internet page";
    document.getElementById("textChange2").innerHTML="Thanks for liking my http://127.0.0.1:5500/Version7.0/user08/script.html";
   }
   var space = " ";
var pos = 0;
var msg = "User 8";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();
function myFunctionA() {
    alert("How anoying is this");
}
function myFunctionB() {
    let w = window.outerWidth;
    let h = window.outerHeight;
    let txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("demo").innerHTML = txt;
    alert("Try to make the page small")
  }
  function displayDate() {
    document.getElementById("Hello").innerHTML = Date();
  }
  function isKeyPressed(event) {
    var text = "Hit shift spill paint on text";
    document.getElementById("pc").style.color="black"
    if (event.shiftKey == 1) {
      text = "lift to clean";
      document.getElementById("pc").style.color="red";
      alert("You hit shift")
    }
    document.getElementById("crouch").innerHTML = text;
  }
function myFunctionC() {
    alert("Hello World");
}