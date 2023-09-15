$(document).on("scroll", function () {
  $("h1").css({
    right: Math.max(550 - 0.35 * window.scrollY, -1400) + "px",
    opacity: Math.max(1 - window.scrollY / 1400, 0),
  });
});
