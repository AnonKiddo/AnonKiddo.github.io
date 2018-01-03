var speed;
var name;
var time;
var conditions = [
  "Very Slow  |  Death Grip",
  "Very Slow  |  Loose",
  "Very Slow  |  Normal Grip",
  "Very Slow  |  Tight",
  "Very Slow  |  Extremely Tight",

  "Slow  |  Death Grip",
  "Slow  |  Loose",
  "Slow  |  Normal Grip",
  "Slow  |  Tight",
  "Slow  |  Extremely Tight",

  "Medium  |  Death Grip",
  "Medium  |  Loose",
  "Medium  |  Normal Grip",
  "Medium  |  Tight",
  "Medium  |  Extremely Tight",

  "Fast  |  Death Grip",
  "Fast  |  Loose",
  "Fast  |  Normal Grip",
  "Fast  |  Tight",
  "Fast  |  Extremely Tight",

  "Fastest  |  Death Grip",
  "Fastest  |  Loose",
  "Fastest  |  Normal Grip",
  "Fastest  |  Tight",
  "Fastest  |  Extremely Tight",
]

function myFunction(){
  document.getElementById('button1').style.visibility = "hidden";
  document.getElementById('pic').style.visibility = "visible";
  document.getElementById('rules').style.visibility = "visible";
  loop();
}

function loop() {
  speed = Math.floor((Math.random() * 25) + 1);
  time = (Math.floor((Math.random() * 21) + 1) + 9); //min: 10s, max:30s
  document.getElementById('text').textContent = conditions[speed -1] + "  |  " + time + "s";
  time = time * 1000;
  name = Math.floor((Math.random() * 27) + 1);
  document.getElementById('pic').src = "Pics/" + name + ".jpg";


  setTimeout(loop, time);
}
