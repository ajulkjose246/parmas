$(function () {
  function unavailable(date) {
    dmy =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    if ($.inArray(dmy, disable_date) == -1) {
      return [true, ""];
    } else {
      return [false, "", "Unavailable"];
    }
  }

  $("#datepicker").datepicker({
    dateFormat: "d-m-yy",
    beforeShowDay: unavailable,
    minDate: 0,
  });
});

var r_email = true,
  offer_date = true,
  offer_msg;

$("#usr_email").keyup(function () {
  var email = $("#usr_email").val();
  var c_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  r_email = c_email.test(email);
  if (!r_email) {
    $("#e_error").text("Enter a valid Email");
    $("#paymentBtn").prop("disabled", true);
  } else {
    $("#e_error").text("");
    valids();
  }
});
$("#datepicker").keyup(function () {
  var email = $("#datepicker").val();
  for (i = 0; i < disable_date.length; i++) {
    if (email == disable_date[i]) {
      $("#d_error").text("Enter a valid Date");
      $("#paymentBtn").prop("disabled", true);
      offer_date = false;
    } else {
      $("#d_error").text("");
      offer_date = true;
      valids();
    }
  }
});

$("#offer_msg").keyup(function () {
  var email = $("#offer_msg").val();
  var c_email = /^[a-zA-Z ]+$/;
  offer_msg = c_email.test(email);
  if (!offer_msg) {
    $("#o_error").text("Enter a valid Email");
    $("#paymentBtn").prop("disabled", true);
  } else {
    $("#o_error").text("");
    valids();
  }
});

function valids() {
  if (offer_msg == true && offer_date == true && r_email == true) {
    $("#paymentBtn").prop("disabled", false);
  }
}

