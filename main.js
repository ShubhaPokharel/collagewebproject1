var canvas = new fabric.Canvas('output');

img_x = 100;
img_y = 100;

img_height = 400;
img_width = 400;

var img_pic = "";

function pic() {
  fabric.Image.fromURL(image, function (Img) {
    img_pic = Img;
    img_pic.scaleToWidth(400);
    img_pic.scaleToHeight(300);
    img_pic.set({
     top:img_y,
     left:img_x
    });
    canvas.add(img_pic);
  });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
    console.log(keyPressed);
    
  if(keyPressed = '38'){
    up();
  }
  if(keyPressed = '40'){
    down();
  }
  if(keyPressed = '37'){
    left();
  }
  if(keyPressed = '39'){
    right();
  }
}
Webcam.attach(camera);
var myIndex = 0;
Webcam.set( {
  width:400,
  height:300,
  image_format : 'png',
  png_quality:100
});
function send() {
  var synth = window.speechSynthesis; 

     speak_data = "Taking your selfie in 5 seconds";
    var utterThis  = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
}
function take_snapshot() {
  Webcam.snap(function (data_uri) {
      document.getElementById("output").innerHTML = '<img id="image" src="'+ data_uri +'">';
  })
}
function save() {
   link = document.getElementById("camera");
  image = document.getElementById("image").src ;
  link.href = image;
  link.click();
}
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

