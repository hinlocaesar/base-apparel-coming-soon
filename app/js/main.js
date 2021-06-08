function myFunction(x) {

    if (x.matches) { // If media query matches
      document.getElementsByClassName('.myImg') = "/images/hero-mobile.jpg";
    } else {
       document.getElementById("myImg").src = "/images/hero-desktop.jpg";
    }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes








/*#########################*/

  function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    if(inputVal=="" ){
      alert("Name must be filled out");
    }
    else if(!inputVal.includes('@')){
      //do noting is there is not @
    }else{
    alert(inputVal);
    }
    

}
  