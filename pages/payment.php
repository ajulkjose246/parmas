<!DOCTYPE html>
<html lang="en">
<?php
require("../connection/db_connect.php");
$offer_id = $_GET['id'];
$sql = "SELECT * FROM `tbl_offering` WHERE `offer_id` =$offer_id";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result);
?>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
  <link rel="stylesheet" href="/parmas/assets/css/payment.css">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
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

        <form action="">
          <div class="row">
            <div class="col-12">
              <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Email</span>
                <div class="inputWithIcon"> <input class="form-control" type="text"></div>
              </div>
            </div>
            <div class="col-md-11">
              <div class="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4"> <span>Offering<span class="ps-1">Date</span></span>
                <div class="inputWithIcon"> <input type="text" class="form-control" id="datepicker"></div>
              </div>
            </div>

            <div class="col-12">
              <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Please List out all your Holy Mass Intentions One by One</span>
                <div class="inputWithIcon"> <textarea class="form-control" rows="2"></textarea></div>
              </div>
            </div>
            <div class="col-12 px-md-5 px-4 mt-3">
              <div class="btn btn-primary w-100">Pay ₹<?= $row['offer_price'] ?></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</body>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script>
  $(function() {

    var unavailableDates = ["9-3-2023", "14-3-2023", "15-3-2023"];

    function unavailable(date) {
      dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      if ($.inArray(dmy, unavailableDates) == -1) {
        return [true, ""];
      } else {
        return [false, "", "Unavailable"];
      }
    }

    $("#datepicker").datepicker({
      dateFormat: 'dd/mm/yy',
      beforeShowDay: unavailable
    });
  });
</script>

</html>