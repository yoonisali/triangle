function isItATriangle(event) {
  event.preventDefault();


  let equal = document.querySelector("div#equal");
  let isos = document.querySelector("div#iso");
  let scal = document.querySelector("div#sca");

  let length1 = parseInt(document.getElementById("length1").value);
  let length2 = parseInt(document.getElementById("length2").value);
  let length3 = parseInt(document.getElementById("length3").value);

  if (length1 === length2 && length1 == length3) {
    window.alert('Equilateral');
  } else if (length1 === length2 || length1 === length3 || length2 === length3) {
    window.alert('Isosceles');
  } else if (length1 + length2 <= length3 || length1 + length3 <= length2 || length2 + length3 <= length1) {
    window.alert('NOT A TRIANGLE');
  } else if (!(length1 === length2 && length1 == length3)) {
    window.alert('Scalene');
  }
}

window.addEventListener("load", function () {
  const form = document.getElementById("triangle");
  form.addEventListener("submit", isItATriangle);
});