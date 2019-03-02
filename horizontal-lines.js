function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 390; i = i + 10) {
    var startX = 10;
    var startY = i;
    var endX = 390;
    var endY = i;
    line(startX, startY, endX, endY);
  }
}
