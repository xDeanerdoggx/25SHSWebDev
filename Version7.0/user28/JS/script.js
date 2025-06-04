function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
    document.getElementById("textChange").className="text-class";
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

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_body_onload
function alertFunction() {
    alert("This is Imran's website");
  }

  //https://www.w3schools.com/js/tryit.asp?filename=tryjs_iframe_contentdocument
  function turnRed() {
    var x = document.getElementById("clickButton");
    x.style.backgroundColor = "red";
  }

  //https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onmousedown
  function changeTitleColor(element, color) {
    element.style.color = color;
  }

  //https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm
  function showAlert() {
    var txt;
    if (confirm("Press Ok or Cancel")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  //https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_hide
  function hideButton(){
    document.getElementById('hiddenButton').style.display='none'
  }


  //https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_window_resizeto
  var w;
function openwindow() {
  w = window.open('','', 'width=100,height=100');
  w.focus();
}

//https://tripwiremagazine.com/9-funniest-javascript-effects/
function windowEditable(){
    document.body.contentEditable='true'; document.designMode='on'; void 0
}

