<!DOCTYPE html>
<html lang="en">
<?php
session_start();
error_reporting(E_ERROR | E_PARSE);
require("../../connection/db_connect.php");
$uid = $_SESSION['user']['usr_id'];

?>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <!-- <link rel="stylesheet" href="/parmas/assets/css/payment.css"> -->
  <link rel="stylesheet" href="/parmas/assets/css/view_drf.css">
</head>

<body>
  <section>
    <div class="container-fluid">
      <div class="row m-2">
        <div class="col-12">
          <div class="card">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/parmas/index.php">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">View Death Relief Fund</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card">
            <h5 class="text-center">Pay Now</h5>
            <hr>
            <form class="akjFval" method="POST" action="#">
              <div class="mb-3">
                <label class="form-label">Amount</label>
                <input type="text" class="form-control akjval" RegExp="(50\d|5[1-9]\d|[6-9]\d{2}|[1-4]\d{3}|5000)" ErrMsg="Enter a Valid Amount or Min 500" id="payAmt">
              </div>
              <div class="d-grid gap-2 col-12 mx-auto">
                <input class="btn btn-success" onclick="pay_now(<?= $uid ?>)" id="payBtn" type="button" value="Pay Now" disabled>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="card">
            <h5 class="text-center">Payment History</h5>
            <hr>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <?php $result = mysqli_query($con, "SELECT * FROM `tbl_drf_payments` WHERE `drf_user_id` =$uid");$c=0; ?>
              <tbody>
                <?php while($row=mysqli_fetch_array($result)){ $c=$c+1; ?>
                <tr>
                  <th scope="row"><?=$c ?></th>
                  <td><?=$row['drf_amount']?></td>
                  <td><?=$row['onCreate']?></td>
                </tr>
                <?php } ?>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<script src="/parmas/assets/js/death_relief_fund.js"></script>
<script src="/parmas/assets/js/cdn/checkout.js"></script>
<script>
  function pay_now(uid) {
    var amt = $("#payAmt").val();
    jQuery.ajax({
      type: "post",
      url: "drf_payment.php",
      data: "amt=" + amt + "&usr_id=" + uid,
      success: function(result) {
        console.log(result)
        var options = {
          key: "rzp_test_UY1y7bu0apmIK4",
          amount: amt * 100,
          currency: "INR",
          name: "PARMAS",
          description: "name",
          image: "https://raw.githubusercontent.com/ajulkjose246/parmas/master/assets/img/logo.png",
          handler: function(response) {
            jQuery.ajax({
              type: "post",
              url: "drf_payment.php",
              data: "payment_id=" + response.razorpay_payment_id + "&usr_id=" + uid + "&amt=" + amt,
              success: function(result) {
                console.log(result)
                window.location.href = "view_death_relief_fund.php";
              },
            });
          },
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
      },
    });
  }
</script>

</html>