$(document).ready(() => {
  $("label").hide();
  $("#submit").click((event) => {
    event.preventDefault();
    if ($("#email").val() === "") {
      $(".email-label").show();
    } else {
      $(".email-label").hide();
    }
    if ($("#phone-number").val() === "") {
      $(".phone-empty").show();
      return;
    }
    if (
      $("#phone-number").val().length < 10 ||
      $("#phone-number").val().length > 10
    ) {
      $(".phone-confirm").show();
      $(".phone-empty").hide();
      return;
    } else {
      $(".phone-confirm").hide();
    }
  });
});
