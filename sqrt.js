function squareRoot(x) {
  if (x == 0) {return 0;}
  var guess = x/3;
  for (var i = 0; i < 5; i++) {
    guess = (guess + x / guess) / 2
  }
  return + guess.toFixed(5);
}