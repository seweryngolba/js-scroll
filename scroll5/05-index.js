const square = document.querySelector(".square");
const container = document.querySelector(".container");

window.addEventListener("scroll", () => {
  const scrollPercentage =
    (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
  const maxX = container.clientWidth - square.clientWidth;
  const maxY = container.clientHeight - square.clientHeight;

  const x = (scrollPercentage / 100) * maxX;
  const y = (scrollPercentage / 100) * maxY;

  square.style.transform = `translate(${x}px, ${y}px)`;
});
