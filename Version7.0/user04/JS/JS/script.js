// script.js

function changeText() {
    const text = document.getElementById("textChange");
    text.innerHTML = "Thanks for liking my Webpage";
    text.classList.add("highlight"); // Add your defined CSS class
  }
  
  function changeColor() {
    document.body.style.backgroundColor = "lightblue";
  }
  
  function showDate() {
    alert("Current Date and Time: " + new Date());
  }
  
  function hideText() {
    document.getElementById("textChange").style.display = "none";
  }
  
  function showText() {
    document.getElementById("textChange").style.display = "block";
  }
  
  function greetUser() {
    const name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = `Hello, ${name}!`;
  }
  
  // Title scroll effect
  // Source: W3Schools - https://www.w3schools.com/jsref/prop_doc_title.asp
  var space = " ";
  var pos = 0;
  var msg = "User 19";
  
  function Scroll(){
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0,pos);
    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout("Scroll()", 200);
  }
  Scroll();
  