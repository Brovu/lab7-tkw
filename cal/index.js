const display = (val) => {
  $("#result").val($("#result").val() + val);
};

const calculate = () => {
  const res = eval($("#result").val());
  $("#result").val(res);
};

$(document).ready(() => {
  $("#c").click(() => {
    $("#result").val("");
  });
});
