let validate = (val, expr) => {
  return expr.test(val);
};

$(document).on("keyup", ".akjval", function () {
  $(this).next(".error").remove();
  if (!validate($(this).val(), new RegExp($(this).attr("RegExp")))) {
    var ErrMsg = $(this).attr("ErrMsg");
    $(this).after('<label class="error">' + ErrMsg + "</label>").next(".error");
  }
});

$(document).on("submit", ".akjFval", function (e) {
  e.preventDefault();
  let isOkey = true;
  let formElements = $(this).find(".akjval");
  $(".error").remove();
  $.each(formElements, function (i, el) {
    if (!validate(el.value, new RegExp(el.getAttribute("RegExp")))) {
      isOkey = false;
      let err = document.createElement("label");
      err.classList.add("error");
      err.textContent = el.getAttribute("ErrMsg");
      el.insertAdjacentElement("afterend", err);
    }
  });
  console.log(isOkey);
  if (isOkey) {
    this.submit();
    return isOkey;
  }
});