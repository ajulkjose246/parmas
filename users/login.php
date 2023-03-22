<!DOCTYPE html>
<html lang="en">
<?php
session_start();
error_reporting(E_ERROR | E_PARSE);

$uid = $_SESSION['user']['usr_id'];
require("../connection/db_connect.php");
if ($uid != null) {
  $url = "/parmas/index.php";
  echo ("<script>location.href='$url'</script>");
} else { ?>

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <!-- CSS only -->
    <link rel="stylesheet" href="/parmas/assets/css/login.css">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap.min.css">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap-icons.css">
  </head>

  <body>
    <section class="background-radial-gradient overflow-hidden">
      <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div class="row gx-lg-5 align-items-center mb-5">
          <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
            <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">PARMAS<br />
              <span style="color: hsl(218, 81%, 75%);font-size: 32px;">Manage your parish activities effortlessly with our all-in-one system</span>
            </h1>
          </div>
          <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
            <div class="card bg-glass">
              <div class="card-body pt-5  px-md-5">
                <form action="#" method="POST">
                  <h4 class="text-center fw-bold">Login Now</h4>
                  <hr class="divider ">
                  <div class="form-outline  error">
                    <label class="form-label" id="Errors"></label>
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">Email address</label>
                    <input type="email" id="email" name="email" class="form-control" required>
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4">Password</label>
                    <input type="password" id="pwd" name="pwd" class="form-control" required>
                  </div>
                  <div class="log_btns">
                    <button type="submit" id="signin" name="signin" class="btn btn-primary">Sign In</button>
                    <a href="/parmas/index.php" class="btn btn-primary">Cancel</a>
                  </div>
                  <div class="text-center"><br>
                    <a href="/parmas/users/register.php">Create New Account</a><br><br>
                    <a href="/parmas/users/send_otp.php">Forgotten password?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <?php
    require("../pages/modal.php");
    ?>
    <!-- JavaScript Bundle with Popper -->
    <script src="/parmas/assets/js/cdn/bootstrap.bundle.min.js"></script>
    <script src="/parmas/assets/js/cdn/jquery.min.js"></script>

  <?php
  if (isset($_POST['signin'])) {

    $usr_email = $_POST['email'];
    $usr_pwd = $_POST['pwd'];
    if ($usr_email != null && $usr_pwd != null) {
      $query = "SELECT tbl_login.usr_email,tbl_login.usr_id, tbl_login.usr_password, tbl_login.usr_status,tbl_register.usr_fname,tbl_register.usr_sname,tbl_register.usr_phone,tbl_register.usr_bapName,tbl_register.usr_ward,tbl_register.usr_profile,tbl_register.usr_houseName FROM `tbl_login` JOIN `tbl_register` ON tbl_login.usr_id = tbl_register.usr_id;";
      $result = mysqli_query($con, $query);
      while ($row = mysqli_fetch_array($result)) {
        if ($row['usr_email'] == $usr_email && $row['usr_password'] == $usr_pwd) {
          $_SESSION['user'] = $row;
          $_SESSION['usr_password'] = $usr_pwd;
          if ($row['usr_status'] == 1) {
            echo ("<script>modal_message(1,'Login Success','/parmas/users/admin/admin_home.php')</script>");
          } elseif ($row['usr_status'] == 2) {
            echo ("<script>modal_message(1,'Login Success','/parmas/users/secretary/sec_home.php')</script>");
          } elseif ($row['usr_status'] == 3) {
            echo ("<script>modal_message(1,'Login Success','/parmas/index.php')</script>");
          }
        }
      }
    }
  }
}
  ?>

</html>