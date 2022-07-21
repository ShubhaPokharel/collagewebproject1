Webcam.attach(camera);

Webcam.set( {
  width:500,
  height:500,
  image_format : 'png',
  png_quality:100
 });
camera = document.getElementById("camera"); 
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000);
  }

