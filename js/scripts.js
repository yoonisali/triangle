function isItATriangle(event) {
  event.preventDefault();

  let equal = document.querySelector("div#equal");
  let isos = document.querySelector("div#iso");
  let scal = document.querySelector("div#sca");

  let length1 = parseInt(document.getElementById("length1").value);
  let length2 = parseInt(document.getElementById("length2").value);
  let length3 = parseInt(document.getElementById("length3").value);

  equal.setAttribute('class', 'hidden');
  isos.setAttribute('class', 'hidden')
  scal.setAttribute('class', 'hidden');

  if (length1 === length2 && length1 == length3) {
    equal.removeAttribute('class', 'hidden');
  } else if (length1 === length2 || length1 === length3 || length2 === length3) {
    isos.removeAttribute('class', 'hidden');
  } else if (length1 + length2 <= length3 || length1 + length3 <= length2 || length2 + length3 <= length1) {
    window.alert('NOT A TRIANGLE DUMMY!')
  } else if (!(length1 === length2 && length1 == length3)) {
    scal.removeAttribute('class', 'hidden');
  }
}

window.addEventListener("load", function () {
  const form = document.getElementById("triangle");
  form.addEventListener("submit", isItATriangle);

  let body = document.body;
  body.onkeydown = function() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
};

  body.onkeyup = function() {
  body.style.backgroundColor = "darkgoldenrod";
  body.style.color = "black";
};
});