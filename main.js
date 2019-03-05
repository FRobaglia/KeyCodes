let CurrentKeyCode = document.querySelector('h1');
let CurrentKey = document.querySelector('h2');

document.addEventListener('keydown', function(event) {
  CurrentKeyCode.innerHTML = event.keyCode;
  CurrentKey.innerHTML = event.key;
  if (event.keyCode === 32) {
    CurrentKey.innerHTML = "SPACE";
  }
})