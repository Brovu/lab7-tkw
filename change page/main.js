const menuLinks = document.querySelectorAll(".nav-items");

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    menuLinks.forEach((link) => {
      link.classList.remove("active");
    });
    menuLink.classList.add("active");
  });
});

$(document).ready(function () {
  $(".content-main").hide();
  $("#nav-new").click(function () {
    $("#new").show();
    $("#sell").hide();
    $("#sale").hide();
  });
  $("#nav-sell").click(function () {
    $("#sell").show();
    $("#new").hide();
    $("#sale").hide();
  });
  $("#nav-sale").click(function () {
    $("#sale").show();
    $("#sell").hide();
    $("#new").hide();
  });
});
