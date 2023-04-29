$(document).ready(function () {
  $(".nav-list").hide();
  $(".nav-select > a").click(function (e) {
    e.preventDefault();
    $(this).siblings(".nav-list").toggle();
  });
});
