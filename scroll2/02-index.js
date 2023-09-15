$(document).on("scroll", function () {
  let scrollY = window.scrollY;
  let fontSize;

  if (scrollY <= 320) {
    fontSize = 16 + scrollY / 10;
  } else {
    fontSize = 32 + Math.log(scrollY - 320) * 10;
  }

  $("h1").css({
    fontSize: Math.min(fontSize, 120) + "px",
  });
});
