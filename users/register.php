<!DOCTYPE html>
<html lang="en">
<?php require("../connection/db_connect.php");
error_reporting(E_ERROR | E_PARSE);
$uid = $_SESSION['user']['usr_id'];
if ($uid != null) {
    $url = "/parmas/index.php";
    echo ("<script>location.href='$url'</script>");
} else { ?>

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Register</title>
        <!-- CSS only -->
        <link rel="stylesheet" href="/parmas/assets/css/register.css">
        <link rel="stylesheet" href="/parmas/assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap.min.css">
        <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap-icons.css">
    </head>

    <body>
        <section class="background-radial-gradient overflow-hidden">
            <div class="container px-4 py-5 px-md-5 text-center text-lg-start">
                <div class="row gx-lg-5 align-items-center mb-5">
                    <div class="col-lg-5 mb-5 mb-lg-0" style="z-index: 10">
                    <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">PARMAS<br />
                        <span style="color: hsl(218, 81%, 75%);font-size: 32px;">Manage your parish activities effortlessly with our all-in-one system</span>
                    </h1>
                    </div>

                    <div class="col-lg-7 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

                        <div class="card bg-glass">
                            <div class="card-body px-4 px-md-5">
                                <form action="#" method="POST" enctype="multipart/form-data">
                                    <h4 class="text-center fw-bold">Register Now</h4>
                                    <hr class="divider ">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-outline error">
                                                <label class="form-label" id="Errors"></label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label" for="form3Example1">First Name
                                                </label>
                                                <input type="text" id="fname" name="fname" class="form-control" required>
                                                <label class="form-label error" id="f_error"></label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label" for="form3Example1">Second Name
                                                </label>
                                                <input type="text" id="sname" name="sname" class="form-control" required>
                                                <label class="form-label error" id="s_error"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label" for="form3Example3">Email <label
                                                        class="form-label error" id="e_errors"></label></label>
                                                <input type="email" id="email" name="email" class="form-control" required>
                                                <label class="form-label error" id="e_error"></label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label" for="form3Example1">House Name
                                                </label>
                                                <input type="text" id="hname" name="hname" class="form-control" required>
                                                <label class="form-label error" id="h_error"></label>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label">Phone Number </label>
                                                <input type="text" id="phone" name="phone" class="form-control"
                                                    maxlength="10" required>
                                                <label class="form-label error" id="p_error"></label>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label">Password <a tabindex="0" data-bs-toggle="popover"
                                                        data-bs-placement="top" data-bs-trigger="focus"
                                                        data-bs-content="Password contain at least 6 character.Including A-Z,a-z,0-9 and any special character "><i
                                                            class="bi bi-info-circle"></i></a></label>
                                                <input type="password" id="pwd" name="pwd" class="form-control" required>
                                                <label class="form-label error" id="pwd_error"></label>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label">Confirm Password</label>
                                                <input type="password" id="cpwd" name="cpwd" class="form-control" required>
                                                <label class="form-label error" id="cp_error"></label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="signup_btns">
                                        <input type="submit" id="signup" name="signup" class=" btn btn-primary"
                                            value="Sign Up">
                                        <a href="/parmas/index.php" class="btn btn-primary">Cancel</a>
                                    </div>
                                    <div class="text-center"><br>
                                        <a href="/parmas/users/login.php">Already have an account?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            <button type="button" id="successBtn" class="btn btn-primary" style="display:none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            </button>
            
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p id="msgBody"></p>
                    
                  </div>
                  <div class="modal-footer">
                    <button type="button" id="clsBtn" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
    </body>

    <script src="/parmas/assets/js/cdn/bootstrap.bundle.min.js"></script>
    <script src="/parmas/assets/js/cdn/jquery.min.js"></script>
    <script src="/parmas/assets/js/register.js"></script>
    <?php
    if (isset($_POST['signup'])) {
        $fname = $_POST['fname'];
        $sname = $_POST['sname'];
        $hname = $_POST['hname'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $pwd = $_POST['pwd'];
        $cpwd = $_POST['cpwd'];
        if ($pwd == $cpwd) {
            $org_pwd = $pwd;
        } else {
            $org_pwd = null;
        }
        if ($fname != null && $sname != null && $hname != null && $email != null && $phone != null && $org_pwd != null) {

            $query = "SELECT * FROM `tbl_register`";
            $result = mysqli_query($con, $query);
            while ($row = mysqli_fetch_array($result)) {
                if ($email == $row['usr_email']) {
                    $flag = 0;
                    echo ("<script>$('#Errors').text('Email id already exists');</script>");
                    exit();
                } else if ($email != $row['usr_email']) {
                    $flags = 1;
                }
            }
            if ($flags = 1) {
                $query = "INSERT INTO `tbl_register`(`usr_fname`,`usr_sname`,`usr_email`, `usr_phone`, `usr_houseName`) VALUES ('$fname','$sname','$email','$phone','$hname')";
                mysqli_query($con, $query);
                $usr_id = mysqli_insert_id($con);
                $query = "INSERT INTO `tbl_login`(`usr_id`,`usr_email`, `usr_password`) VALUES ('$usr_id','$email','$org_pwd')";
                mysqli_query($con, $query);
                $targetdir = "/parmas//assets/img/profile/";
                $file_path = $targetdir . basename($files);
                move_uploaded_file($_FILES['files']['tmp_name'], $file_path);
                echo ("<script>document.getElementById('msgBody').innerHTML = 'Registration Success'</script>");
                echo ("<script>document.getElementById('successBtn').click()</script>");
                // $yourURL = "/parmas/users/login.php";
                // echo ("<script>location.href='$yourURL'</script>");
            }
        }

    }
}
?>
<script>
    $("#clsBtn").click(function(){
        location.href="/parmas/users/login.php"
    })
</script>

</html>