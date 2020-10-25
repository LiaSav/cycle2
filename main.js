// The function returns a string that consists of N numbers repeated K times, separated by a space.
function cycle(k, n) {
  let x = "";
  for (let i = 1; i <= k; i++) {
    x += n + " ";
  }
  return x;
}
