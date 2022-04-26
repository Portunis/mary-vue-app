const imageHover = window.document.getElementById("image-card-project");

if (imageHover === null) {
  console.log(imageHover);
} else {
  imageHover.addEventListener("mouseover", test);
}

function test(): void {
  console.log("123");
}
export { imageHover };
