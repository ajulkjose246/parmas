<!DOCTYPE html>
<html lang="en">
<?php
session_start();
error_reporting(E_ERROR | E_PARSE);
require("../connection/db_connect.php");
$usr_id = $_SESSION['user']['usr_id'];
if ($usr_id == null) {
  echo ("<script>alert('Pls Login')</script>");
  echo ("<script>location.href='/parmas/pages/offerings.php'</script>");
} else {
  $offer_id = $_GET['id'];
  $sql = "SELECT * FROM `tbl_payment` WHERE `offer_type` = $offer_id AND `payment_status` != 'Pending'";
  $result = mysqli_query($con, $sql);
  $i = 0;
  echo ("<script>const disable_date = [];</script>");
  while ($row = mysqli_fetch_array($result)) {
    $Date = $row['payment_date'];
    echo ("<script>disable_date[$i]= '$Date';</script>");
    $i = $i + 1;
  }
  $sql = "SELECT * FROM `tbl_offering` WHERE `offer_id` =$offer_id";
  $result = mysqli_query($con, $sql);
  $row = mysqli_fetch_array($result);
?>

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment</title>
    <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
    <!-- <link rel="stylesheet" href="/parmas/assets/css/cdn/font-awesome_all.css"> -->
    <link rel="stylesheet" href="/parmas/assets/css/payment.css">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/jquery-ui.css">
  </head>

  <body>
    <section>
      <div class="container bg-light d-md-flex align-items-center">
        <div class="card box1 shadow-sm p-md-5 p-md-5 p-4">
          <div class="fw-bolder mb-4"></span><span class="ps-1"><?= $row['offer_name'] ?></span></div>
          <div class="fw-bolder mb-4"></span><span class="ps-1">(<?= $row['offer_name_mala'] ?>)</span></div>
          <div class="fw-bolder mb-4"><span class="fas fa-rupee-sign"></span><span class="ps-1"><?= $row['offer_price'] ?></span></div>
          <div class="d-flex flex-column">
            <div class="d-flex flex-column mb-5"> <span class="far fa-calendar-alt text"><span class="ps-2">Payment Date :</span></span> <span class="ps-3"><?= date("d/m/Y") ?></span> </div>
            <div class="d-flex align-items-center justify-content-between text mt-5">
            </div>
          </div>
        </div>
        <div class="card box2 shadow-sm">
          <div class="d-flex align-items-center justify-content-between p-md-5 p-4"> <span class="h5 fw-bold m-0">Payment methods</span>
          </div>
          <ul class="nav nav-tabs mb-3 px-md-4 px-2">
            <li class="nav-item"> <a class="nav-link px-2 active" aria-current="page" href="#">Enter Details</a> </li>
          </ul>

          <!-- <form action="#" method="POST"> -->
          <div class="row">
            <div class="col-12">
              <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Email <label class="form-label error" id="e_error"></label></span>
                <div class="inputWithIcon"> <input autocomplete="off" value="<?=$_SESSION['user']['usr_email']?>" class="form-control" id="usr_email" type="email" required></div>
              </div>
            </div>
            <div class="col-md-11">
              <div class="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4"> <span>Offering<span class="ps-1">Date <label class="form-label error" id="d_error"></label></span></span>
                <div class="inputWithIcon"> <input type="text" value="<?=date("j-n-Y")?>" name="datepicker" autocomplete="off" class="form-control" id="datepicker" required></div>
              </div>
            </div>

            <div class="col-12">
              <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Please List out all your Holy Mass Intentions One by One <label class="form-label error" id="o_error"></label></span>
                <div class="inputWithIcon">  <input type="text" autocomplete="off" id="offer_msg" class="form-control" rows="2"></div>
              </div>
            </div>
            <div class="col-12 px-md-5 px-4 mt-3">
              <button id="paymentBtn" onclick="pay_now(<?= $row['offer_price'] ?>,<?= $row['offer_id'] ?>,<?= $usr_id ?>)" class="btn btn-primary w-100">Pay ₹<?= $row['offer_price'] ?></button>
              <a href="/parmas/pages/offerings.php" class="paymentBtn btn btn-danger w-100 mt-2">Cancel</a>
            </div>
          </div>
          <!-- </form> -->
        </div>
      </div>
    </section>
  </body>
  <script src="/parmas/assets/js/cdn/jquery-3.6.0.js"></script>
  <script src="/parmas/assets/js/cdn/jquery-ui.js"></script>
  <!-- <script src="https://checkout.razorpay.com/v1/checkout.js"></script> -->
  <script src="/parmas/assets/js/cdn/checkout.js"></script>
  <script src="/parmas/assets/js/payment.js"></script>
<?php
}
?>
<script>
  function pay_now(amt, name, uid) {
    if (uid != null) {
      if (offer_msg == true && offer_date == true && r_email == true) {
        var datepicker = $("#datepicker").val()
        var usr_email = $("#usr_email").val()
        var msg = $("#offer_msg").val()
        jQuery.ajax({
          type: "post",
          url: "payment_process.php",
          data: "amt=" + amt + "&name=" + name + "&usr_id=" + uid + "&payDate=" + datepicker,
          success: function(result) {
            var options = {
              key: "rzp_test_SthGTyf8ZmVrIZ",
              amount: amt * 100,
              currency: "INR",
              name: "PARMAS",
              description: name,
              image: "https://raw.githubusercontent.com/ajulkjose246/parmas/master/assets/img/logo.png",
              handler: function(response) {
                jQuery.ajax({
                  type: "post",
                  url: "payment_process.php",
                  data: "payment_id=" + response.razorpay_payment_id + "&name=" + name + "&usr_id=" + uid + "&usr_email=" +usr_email + "&offer_msg=" +msg + "&payDate=" + datepicker,
                  success: function(result) {
                    window.location.href = "offerings.php";
                  },
                });
              },
            };
            var rzp1 = new Razorpay(options);
            rzp1.open();
          },
        });
      }
    } else {
      alert("Pls login");
    }
  }
</script>

</html>