alert("Here are the things on my website (I only have a few because it was hard to find anything substantial) (Also I suck at Javascript");

alert("Dancing text, Love calculator, Silly alert, A fake webpage crash (Disabled so that it doesn’t interfere with the site for now)" )

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
   javascript:R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; var DI= document.getElementsByTagName("img"); DIL=DI.length; function A(){for(i=0; i<DIL; i++){DIS=DI[ i ].style; DIS.position='absolute'; DIS.left=Math.sin(R*x1+i*x2+x3)*x4+x5+"px"; DIS.top=Math.cos(R*y1+i*y2+y3)*y4+y5+"px"}R++}tag=setInterval('A()',5 );document.onmousedown=function(){clearInterval(tag);for(i=0; i<DIL; i++){DI[i].style.position="static";}}; void(0)

    function calculateLove() {
        const name1 = document.getElementById('name1').value.trim().toLowerCase();
        const name2 = document.getElementById('name2').value.trim().toLowerCase();
      
        if (!name1 || !name2) {
          alert("Please enter both names.");
          return;
        }
      
        let score = 0;
        for (let i = 0; i < name1.length; i++) {
          score += name1.charCodeAt(i);
        }
        for (let i = 0; i < name2.length; i++) {
          score += name2.charCodeAt(i);
        }
      
        const percentage = (score % 101);
      
        document.getElementById('result').textContent = `Love Score: ${percentage}%`;
      }

      const cheerText = document.getElementById('cheer-text');
      const letters = cheerText.querySelectorAll('span');
      
    function startDancing() {
  const text = document.getElementById("dancingText");
  text.classList.toggle("dance");
}

function simulateTyping(element, text, delay) {
    let i = 0;
    function typeNextChar() {
      if (i < text.length) {
        element.value += text.charAt(i);
        element.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
        i++;
        setTimeout(typeNextChar, delay);
      }
    }
    typeNextChar();
  }

  function showSillyAlert() {
    alert('I am a silly alert box :3 Please do not click me again.');
  }
  var button = document.getElementById('sillyButton');
  button.addEventListener('click', showSillyAlert);
  
  setTimeout(function(){$('body').removeAttr('style').html('<img src="https://image.ibb.co/byWcEv/rtaImage.jpg">').css('text-align','center').css('margin','125px');},2500);