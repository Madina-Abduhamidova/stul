let mainImage = document.getElementById("mainImage");

let images = document.querySelectorAll(".image");

images.forEach(function (image) {
  image.onclick = function () {
    mainImage.src = image.src;

    images.forEach(function (item) {
      item.classList.remove("active");
    });

    image.classList.add("active");
  };
});

let number = document.getElementById("number");

let plus = document.getElementById("plus");

let minus = document.getElementById("minus");

let count = 1;

plus.onclick = function () {
  count++;
  number.textContent = count;
};

minus.onclick = function () {
  if (count > 1) {
    count--;
    number.textContent = count;
  }
};
