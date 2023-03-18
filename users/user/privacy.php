<!DOCTYPE html>
<html lang="en">
<?php
session_start();
// error_reporting(E_ERROR | E_PARSE);

require("../../connection/db_connect.php");
require("../../../email.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require('../../../PHPMailer/src/Exception.php');
require('../../../PHPMailer/src/PHPMailer.php');
require('../../../PHPMailer/src/SMTP.php');

$user = $_SESSION['user'];
$uid = $user['usr_id'];
?>

<head>
    <meta charset="utf-8">
    <title>PARMAS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap.min.css">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/fontawesome.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">

    <link rel="stylesheet" href="/parmas/assets/css/profile.css">
</head>

<body>
    <div class="container-fluid mt-5">
        <div class="row profile">
            <div class="col-md-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/parmas/index.php">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Privacy</li>
                    </ol>
                </nav>

                <div class="profile-sidebar">
                    <!-- SIDEBAR USERPIC -->
                    <div class="profile-userpic">
                        <img id="img_upld" src="/parmas/assets/img/profile/<?= $user['usr_profile'] ?>" class="img-responsive" alt="">
                    </div>
                    <!-- END SIDEBAR USERPIC -->
                    <!-- SIDEBAR USER TITLE -->
                    <div class="profile-usertitle">
                        <div class="profile-usertitle-name">
                            <?= $user['usr_fname'] ?><?= $user['usr_sname'] ?>
                        </div>
                        <div class="profile-usertitle-job">
                            <?= $user['usr_email'] ?>
                        </div>
                    </div>
                    <div class="profile-usermenu">
                        <ul class="nav">
                            <li>
                                <a href="profile.php">
                                    <i class="glyphicon glyphicon-home"></i>
                                    Overview </a>
                            </li>
                            <li>
                                <a href="family_members.php">
                                    <i class="glyphicon glyphicon-user"></i>
                                    Family Members </a>
                            </li>
                            <li class="active">
                                <a href="#">
                                    <i class="glyphicon glyphicon-cog"></i>
                                    Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <!-- END MENU -->
                </div>
            </div>
            <div class="col-md-9">
                <form method="POST" action="#" class="file-upload" enctype="multipart/form-data">
                    <div class="profile-content">
                        <div class="col-xxl-12 mb-5 mb-xxl-0">
                            <div class="bg-secondary-soft px-4 py-5 rounded">
                                <div class="row g-3">
                                    <h4 class="mb-4 mt-0">Change E-mail</h4>
                                    <div class="col-8 col-md-4">
                                        <label class="form-label">Enter OTP </label> <label class="form-label error" id="f_error"></label>
                                        <input type="text" name="emailOtp" id="emailOtp" class="form-control" placeholder="" aria-label="First name">
                                    </div>
                                    <div class="col-4 col-md-2">
                                        <label for="inputEmail4" class="form-label text-light">w</label>
                                        <button name="emailUpdOtp" id="sndOtp" class="form-control btn btn-primary">Send OTP</button>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">New Email Id </label> <label class="form-label error" id="e_error"></label>
                                        <input type="email" name="newEmail" id="newEmail" class="form-control" aria-label="Last name">
                                    </div>
                                    <div class="col-md-10"></div>
                                    <div class="col-md-2">
                                        <label for="inputEmail4" class="form-label text-light">w</label>
                                        <button type="submit" name="emailUpdate" id="emailUpdate" class="form-control btn btn-primary">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form method="POST" action="#" class="file-upload mt-5" enctype="multipart/form-data">
                    <div class="profile-content">
                        <div class="col-xxl-12 mb-5 mb-xxl-0">
                            <div class="bg-secondary-soft px-4 py-5 rounded">
                                <div class="row g-3">
                                    <h4 class="mb-4 mt-0">Change Password</h4>
                                    <div class="col-8 col-md-4">
                                        <label class="form-label">Enter OTP </label> <label class="form-label error" id="f_error"></label>
                                        <input type="text" name="pwdOtp" id="pwdOtp" class="form-control" placeholder="" aria-label="First name">
                                    </div>
                                    <div class="col-4 col-md-2">
                                        <label for="inputEmail4" class="form-label text-light">w</label>
                                        <button name="pwdUpdOtp" id="pwdUpdOtp" class="form-control btn btn-primary">Send OTP</button>
                                    </div>
                                    <div class="col-4 col-md-6">

                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">New Password </label> <label class="form-label error" id="pwd_error"></label>
                                        <input type="password" name="newPwd" id="newPwd" class="form-control" aria-label="Last name">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Confirm Password </label> <label class="form-label error" id="cp_error"></label>
                                        <input type="password" name="cpwd" id="cpwd" class="form-control" aria-label="Last name">
                                    </div>
                                    <div class="col-md-10"></div>
                                    <div class="col-md-2">
                                        <label for="inputEmail4" class="form-label text-light">w</label>
                                        <input type="submit" name="pwdupdBtn" id="pwdupdBtn" class="form-control btn btn-primary" value="Update">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
<script src="/parmas/assets/js/cdn/jquery-1.10.2.min.js"></script>
<script src="/parmas/assets/js/cdn/bootstrap.bundle.min.js"></script>

<!-- <script src="/parmas/assets/js/edit_profile.js"></script> -->

<?php
if (isset($_POST['emailUpdOtp'])) {
    $email = $_SESSION['user']['usr_email'];
    $receiver = "$email";
    $token = rand(100000, 999999);
    $_SESSION['user_otp'] = $token;
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = "$email_address";
    $mail->Password = "$email_password";
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('mail.ajulkjose@gmail.com');
    $mail->addAddress($receiver);
    $mail->isHTML(true);
    $mail->Subject = "One-Time Password (OTP) for PARMAS";
    $body = nl2br("Dear User, \r\n We have received a request to verify your identity for your account on PARMAS. \r\n Please use the following OTP to complete the verification process: \r\n OTP: <b> $token </b>\r\n Please note that the OTP is valid for 5 minutes only. \r\n If you do not use the OTP within this time, you will need to submit a new request. \r\n If you did not initiate this request, \r\n please contact us immediately at parmas.help@gmail.com and do not share the OTP with anyone. \r\n If you have any questions or concerns, please feel free to contact us at parmas.help@gmail.com.\r\n<b>Thank you,\r\n PARMAS</b>");
    $mail->Body = "$body";
    $mail->send();
    echo ("<script>alert('success')</script>");
}
if (isset($_POST['pwdUpdOtp'])) {
    $email = $_SESSION['user']['usr_email'];
    $receiver = "$email";
    $token = rand(100000, 999999);
    $_SESSION['user_owd_otp'] = $token;
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = "$email_address";
    $mail->Password = "$email_password";
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('mail.ajulkjose@gmail.com');
    $mail->addAddress($receiver);
    $mail->isHTML(true);
    $mail->Subject = "One-Time Password (OTP) for PARMAS";
    $body = nl2br("Dear User, \r\n We have received a request to verify your identity for your account on PARMAS. \r\n Please use the following OTP to complete the verification process: \r\n OTP: <b> $token </b>\r\n Please note that the OTP is valid for 5 minutes only. \r\n If you do not use the OTP within this time, you will need to submit a new request. \r\n If you did not initiate this request, \r\n please contact us immediately at parmas.help@gmail.com and do not share the OTP with anyone. \r\n If you have any questions or concerns, please feel free to contact us at parmas.help@gmail.com.\r\n<b>Thank you,\r\n PARMAS</b>");
    $mail->Body = "$body";
    $mail->send();
    echo ("<script>alert('success')</script>");
}
if (isset($_POST['emailUpdate'])) {
    $emailOtp = $_POST['emailOtp'];
    $email = $_POST['newEmail'];
    if ($email != null) {
        if ($_SESSION['user_otp'] == $emailOtp) {
            $sql = "UPDATE `tbl_register` SET `usr_email`='$email' WHERE `usr_id`= $uid";
            mysqli_query($con, $sql);
            $sql = "UPDATE `tbl_login` SET `usr_email`='$email' WHERE `usr_id` = $uid";
            mysqli_query($con, $sql);
            $_SESSION['user']['usr_email'] = $email;
            echo ("<script>alert('success')</script>");
        } else {
            echo ("<script>alert('Error')</script>");
        }
    }
}
if (isset($_POST['pwdupdBtn'])) {
    $pwdOtp = $_POST['pwdOtp'];
    $newPwd = $_POST['newPwd'];
    $cpwd = $_POST['cpwd'];
    if ($newPwd != null && $cpwd != null) {
        if ($newPwd == $cpwd) {
            if ($_SESSION['user_owd_otp'] == $pwdOtp) {
                $sql = "UPDATE `tbl_login` SET `usr_password`='$newPwd' WHERE `usr_id`= $uid";
                mysqli_query($con, $sql);
                echo ("<script>alert('success')</script>");
            } else {
                echo ("<script>alert('Error')</script>");
            }
        }
    }
}
?>
<script>
    var uid = <?= $_SESSION['user']['usr_id'] ?>;
    $(document).ready(function() {
        var r_email,r_pwd,cr_pwd,pswd_suc;
        $("#newEmail").keyup(function() {
            var email = $("#newEmail").val();
            var c_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            r_email = c_email.test(email)
            if (!r_email) {
                $("#e_error").text("Enter a valid Email");
                $("#emailUpdate").prop('disabled', true);
            } else {
                $("#e_error").text("");
                // $("#emailUpdate").prop('disabled', false);
                $.ajax({
                    url: 'fetch.php',
                    type: 'post',
                    data: {
                        email: email,
                        uid: uid
                    },
                    success: function(data) {
                        if (data > 0) {
                            $('#e_error').html("<i class='bi bi-x-circle'></i>");
                            $("#emailUpdate").prop('disabled', true);
                        } else {
                            $('#e_error').html("<i class='bi bi-check-circle'></i>");
                            $("#emailUpdate").prop('disabled', false);
                        }
                    }
                });


            }
        })

        $("#newPwd").keyup(function() {
            pwd = $("#newPwd").val();
            var c_pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
            r_pwd = c_pwd.test(pwd);
            if (!r_pwd) {
                $("#pwd_error").text("Enter Valid Password");
                $("#pwdupdBtn").prop('disabled', true);
            } else {
                $("#pwd_error").text("");
                valid()

            }
        })
        $("#cpwd").keyup(function() {
            cpwd = $("#cpwd").val();
            var c_pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
            cr_pwd = c_pwd.test(cpwd);
            if (!cr_pwd) {
                $("#cp_error").text("Enter Valid Password");
            } else if (pwd != cpwd) {
                $("#cp_error").text("Password does not match");
                $("#pwdupdBtn").prop('disabled', true);
            } else {
                $("#cp_error").text("");
                pswd_suc = true;
                valid()

            }
        })
        function valid(){
            if(cr_pwd==true && pswd_suc == true){
                $("#pwdupdBtn").prop('disabled', false);
            }
        }
    })
</script>

</html>