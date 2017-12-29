const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init() {
  document.body.addEventListener('keydown', keyDownHandler);
  console.log("initialized");

  function keyDownHandler(k) {
    let key = parseInt(k.which || k.detail);
    console.log(`key is: ${key}`);

    if (key === code[index]){
      index++;
      console.log(`index is: ${index}`);

      if (index === code.length) {
        window.alert("Hurray!");

        index = 0;
      }
    }
    else {
      index = 0;
    }
  }
}
