$(document).on("scroll", function () {
  $("h1").css({
    fontSize: Math.max(16 + 0.35 * window.scrollY, 16) + "px",
  });
});
