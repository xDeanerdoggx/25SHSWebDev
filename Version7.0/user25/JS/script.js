function printWindow() {
    window.print();
  }
  
  function getLength() {
    document.getElementById("length").innerHTML = document.title.length;
  }
  
  function secondSelector() {
    var x = document.querySelectorAll("#nestedList > li");
    for (var i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "#17a2b8";
    }
  }
  