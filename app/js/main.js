function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    
    } else {
     document.body.style.backgroundColor = "pink";
     document.getElementsByClassName("hero__image").src = "hero-desktop.jpg";
    }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes