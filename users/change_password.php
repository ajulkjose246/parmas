<!DOCTYPE html>
<html lang="en">
<?php
session_start();
error_reporting(E_ERROR | E_PARSE);

$usr_email = $_SESSION['reset_email'];
require("../connection/db_connect.php");
if ($usr_email == null) {
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
                            <span style="color: hsl(218, 81%, 75%);font-size: 32px;">Manage your parish activities
                                effortlessly with our all-in-one system</span>
                        </h1>
                    </div>
                    <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
                        <div class="card bg-glass">
                            <div class="card-body pt-5  px-md-5">
                                <form action="#" method="POST">
                                    <h4 class="text-center fw-bold">Update Password</h4>
                                    <hr class="divider ">
                                    <div class="form-outline  error">
                                        <label class="form-label" id="Errors"></label>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="form3Example3">New Password</label>
                                        <input type="password" id="pwd" name="pwd" class="form-control" required>
                                        <label class="form-label error" id="pwd_error"></label>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="form3Example4">Confirm Password</label>
                                        <input type="password" id="cpwd" name="cpwd" class="form-control" required>
                                        <label class="form-label error" id="cp_error"></label>
                                    </div>
                                    <div class="log_btns">
                                        <button type="submit" id="update" name="update"
                                            class="btn btn-primary">Update</button>
                                        <a href="/parmas/users/login.php" class="btn btn-primary">Cancel</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </body>
    <!-- JavaScript Bundle with Popper -->
    <script src="/parmas/assets/js/cdn/bootstrap.bundle.min.js"></script>
    <script src="/parmas/assets/js/cdn/jquery.min.js"></script>
    <script src="/parmas/assets/js/reset_password.js"></script>

    <?php
    if (isset($_POST['update'])) {
        $pwd = $_POST['pwd'];
        $cpwd = $_POST['cpwd'];
        if ($pwd == $cpwd) {
            $query = "UPDATE `tbl_login` SET `usr_password`='$cpwd' WHERE `usr_email` ='$usr_email'";
            mysqli_query($con, $query);
            $_SESSION['usr_password'] = $cpwd;
            $_SESSION['reset_email']=null;
            echo("<script>location.href='/parmas/users/login.php'</script>");
        }
    }
}
?>

</html>