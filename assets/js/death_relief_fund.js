$(document).on("keyup", ".akjval", function () {
  var value = $(this).val();
  var Regexp = new RegExp($(this).attr("RegExp"));
  var ErrMsg = $(this).attr("ErrMsg");
  var valid = Regexp.test(value);
  $(this).next(".error").remove();
  var label = $(this).after('<label class="error"></label>').next(".error");
  label.text(valid ? "" : ErrMsg);
});
