<?php require("../header.php");
session_start();
require("../connection/db_connect.php");
$usr_id = $_SESSION['user']['usr_id']; ?>

<link rel="stylesheet" href="/parmas/assets/css/offerings.css">

<section style="background-color: #eee;">
  <div class="text-center container py-5">
    <h1 class="text-center fw-bolder">OFFERINGS</h1>
    <hr class="divider">
    <div class="row">
      <?php
      $sql="SELECT * FROM `tbl_offering`";
      $result=mysqli_query($con,$sql);
      while($row=mysqli_fetch_array($result)){
      ?>
      <div class="col-12 col-sm-6 col-md-6 col-lg-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
            <img src="/parmas/assets/img/offerings/<?=$row['offer_image']?>" class="w-100" />
            <div class="">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title mb-3"><?=$row['offer_name']?></h5>
            <p>(<?=$row['offer_name_mala']?>)</p>
            <!-- <a class="mb-3 btn btn-success" style="margin-top: 7%;">Offer Now</a> -->
            <a  href="/parmas/pages/payment.php?id=<?=$row['offer_id']?>"class="mb-3 btn btn-success" style="margin-top: 7%;">Offer Now</a>
          </div>
        </div>
      </div>
      <?php } ?>
    </div>
  </div>

</section>
<?php require("../footer.php") ?>
<!-- <script>
  function pay_now(amt, name, uid) {
    if (uid != null) {
      jQuery.ajax({
        type: 'post',
        url: 'payment_process.php',
        data: "amt=" + amt + "&name=" + name + "&usr_id=" + uid,
        success: function(result) {
          var options = {
            "key": "rzp_test_UY1y7bu0apmIK4",
            "amount": amt * 100,
            "currency": "INR",
            "name": "PARMAS",
            "description": name,
            "image": "https://image.freepik.com/free-vector/logo-sample-text_355-558.jpg",
            "handler": function(response) {
              jQuery.ajax({
                type: 'post',
                url: 'payment_process.php',
                data: "payment_id=" + response.razorpay_payment_id,
                success: function(result) {
                  window.location.href = "offerings.php";
                }
              });
            }
          };
          var rzp1 = new Razorpay(options);
          rzp1.open();
        }
      });
    } else {
      alert("Pls login")
    }
  }
</script> -->