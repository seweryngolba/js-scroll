$("#holder").mousemove(function (e) {
  pageTop = 132;
  holderHeight = $("#holder").height();
  scrollHeight = $("#scroll").height();

  scrollTop = (e.pageY - pageTop) * (100 / holderHeight);
  scrollTopR = Math.round(scrollTop);
  scrollProcent = Math.round(
    (scrollTop / 100) * scrollHeight * (370 / scrollHeight)
  );

  $("#scroll").css({ "margin-top": -scrollProcent + "px" });
  console.log("margin-top: -" + scrollTopR + "px");
  console.log("scrollHeight: -" + scrollHeight);
  console.log("scrollProcent: -" + scrollProcent);
  console.log("");
});
