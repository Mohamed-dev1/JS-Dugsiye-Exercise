//Exercise 35

function submit() {
  let image = document.getElementById("image");

  const imageUr = prompt("enter image URL");
  const borderColor = prompt("enter border color");
  const width = prompt("enter imge widt");
  const height = prompt("enter image hight");
  const borderRadius = prompt("enter border radus");

  image.src = imageUr;
  image.style.border = borderColor;
  image.style.width = width;
  image.style.height = height;
  image.style.borderRadius = borderRadius;
}