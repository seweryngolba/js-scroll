$(document).on("scroll", function () {
  $("h1").css("left", Math.max(1400 - 0.35 * window.scrollY, 10) + "px");
});
