// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction(myTest) {
  document.getElementById("myTest").classList.toggle("show");
}

function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "w3-container");
  }
}

function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function w3_move() {
  document.getElementById("mySidebar").style.color = "red"; 
}     

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";

}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";

}


// Get the button, and when the user clicks on it, execute myFunction
function myFunction(myTest) {
  var x = document.getElementById("myTest");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}