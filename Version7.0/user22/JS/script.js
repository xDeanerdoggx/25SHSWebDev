// 1. Change text and apply class
function changeText() {
    const el = document.getElementById("textChange");
    el.innerHTML = "Thanks for liking my webpage!";
    el.classList.add("highlight");
  }
  
  // 2. Change background color
  function changeBackground() {
    document.body.style.backgroundColor = "#f0f8ff";
  }
  
  // 3. Show alert box
  function showAlert() {
    alert("You clicked the alert button!");
  }
  
  // 4. Hide text
  function hideText() {
    document.getElementById("textChange").style.display = "none";
  }
  
  // 5. Show text
  function showText() {
    document.getElementById("textChange").style.display = "block";
  }
  
  // 6. Print image
  function printImage() {
    const imgWindow = window.open('', '_blank');
    imgWindow.document.write('<img src="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg" style="width:100%;">');
    imgWindow.document.close();
    imgWindow.focus();
    imgWindow.print();
  }
  
  // 7. Live clock
  function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").textContent = time;
  }
  setInterval(updateClock, 1000);
  updateClock(); // call once right away
  
  // 8. Scrolling title bar (bonus)
  let space = " ";
  let pos = 0;
  let msg = "User ## - JavaScript Page";
  
  function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);
    pos++;
    if (pos > msg.length) pos = 0;
    setTimeout(Scroll, 200);
  }
  Scroll();