<!DOCTYPE html>
<html lang="en">
<?php
session_start();
require("../connection/db_connect.php");
require("../../email.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require('../../PHPMailer/src/Exception.php');
require('../../PHPMailer/src/PHPMailer.php');
require('../../PHPMailer/src/SMTP.php');


?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/parmas/assets/css/login.css">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap.min.css">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"> -->
    <style>
        .validate {
            border-radius: 20px;
            height: 40px;
            background-color: #0d6efd;
            border: 1px solid #0d6efd;
            width: 140px
        }
    </style>
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
                        <div class="card-body px-4 py-5 px-md-5">
                            <form action="#" method="POST">
                                <h4 class="text-center fw-bold">Reset Your Password</h4>
                                <hr class="divider ">
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form3Example3">Email address</label>
                                    <input type="email" id="email" name="email" class="form-control" required>
                                    <label class="form-label error" id="e_error"></label>
                                </div>

                                <div class="log_btns">
                                    <button type="submit" id="signin" name="recover" class="btn btn-primary">Send OTP</button>
                                    <a href="./login.php" class="btn btn-primary">Cancel</a>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Button trigger modal -->
        <button type="button" id="email_send" class="btn btn-primary" style="display:none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        </button>

        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">PARMAS</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p id="email_msg">
                        <form id="reset_modal" action="#" method="post">
                            <div class="container height-100 d-flex justify-content-center align-items-center">
                                <div class="position-relative">
                                    <div class="card p-2 text-center">
                                        <h6>Please enter the one time password <br> to verify your account</h6>
                                        <div> <span>A code has been sent to</span> <small id="user_email"></small>
                                        </div>
                                        <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                                            <input class="m-2 text-center form-control rounded" name="num1" type="text" id="first" maxlength="1" required>
                                            <input class="m-2 text-center form-control rounded" name="num2" type="text" id="second" maxlength="1" required>
                                            <input class="m-2 text-center form-control rounded" name="num3" type="text" id="third" maxlength="1" required>
                                            <input class="m-2 text-center form-control rounded" name="num4" type="text" id="fourth" maxlength="1" required>
                                            <input class="m-2 text-center form-control rounded" name="num5" type="text" id="fifth" maxlength="1" required>
                                            <input class="m-2 text-center form-control rounded" name="num6" type="text" id="sixth" maxlength="1" required>
                                        </div>
                                        <div class="mt-4">
                                            <input type="submit" class="btn btn-primary px-4" name="validateBtn" value="validate"><br>
                                            <span id="otp_error" style="color:red"></span>
                                            <!-- <div>Time left = <span id="timer"></span></div> -->
                                            <div> OTP will expire in 2 mins</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        </p>
                    </div>
                    <div class="modal-footer" id="closeBtn">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script> -->
<script src="/parmas/assets/js/cdn/bootstrap.bundle.min.js"></script>
<!-- set otp timer
<script>
    let timerOn = true;
    function timer(remaining) {
        var m = Math.floor(remaining / 60);
        var s = remaining % 60;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        document.getElementById('timer').innerHTML = m + ':' + s;
        remaining -= 1;
        if (remaining >= 0 && timerOn) {
            setTimeout(function() {
                timer(remaining);
            }, 1000);
            return;
        }
        if (!timerOn) {
            return;
        }
        alert('Timeout for otp');
    }
</script> -->
<?php

if (isset($_POST["recover"])) {
    $user_email;
    $email = $_POST["email"];
    $_SESSION['usr_reset_email'] = $email;
    if ($email != null) {

        $sql = "SELECT * FROM `tbl_login` WHERE `usr_email` = '$email' AND `usr_status` != 1";
        $result = mysqli_query($con, $sql);
        $no = mysqli_num_rows($result);
        $row = mysqli_fetch_array($result);
        if ($no == 1) {
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
            $current_time = time();
            $_SESSION['otp_expire'] = $current_time + (2 * 60);
            echo ("<script>document.getElementById('closeBtn').style.display = 'none'</script>");
            echo ("<script>document.getElementById('user_email').innerHTML = '$email'</script>");
            echo ("<script>document.getElementById('email_send').click()</script>");
        } else {
            echo ("<script>document.getElementById('reset_modal').style.display = 'none'</script>");
            echo ("<script>document.getElementById('email_msg').innerHTML = 'Sorry, no emails exists'</script>");
            echo ("<script>document.getElementById('email_send').click()</script>");
        }
    }
}
if (isset($_POST["validateBtn"])) {
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $num3 = $_POST['num3'];
    $num4 = $_POST['num4'];
    $num5 = $_POST['num5'];
    $num6 = $_POST['num6'];
    $usr_otp = $num1 . $num2 . $num3 . $num4 . $num5 . $num6;

    $usr_reset_email = $_SESSION['usr_reset_email'];
    $otp = $_SESSION['user_otp'];
    $current_time = time();
    if ($current_time > $_SESSION['otp_expire']) {
        $_SESSION['user_otp'] = 0;
        echo ("<script>document.getElementById('otp_error').innerHTML = 'OTP Expired'</script>");
        echo ("<script>document.getElementById('closeBtn').style.display = 'none'</script>");
        echo ("<script>document.getElementById('user_email').innerHTML = '$usr_reset_email'</script>");
        echo ("<script>document.getElementById('email_send').click()</script>");
    } else {
        if ($otp == $usr_otp) {
            $_SESSION['reset_email'] = $usr_reset_email;
            echo ("<script>location.href='/parmas/users/change_password.php'</script>");
        } else {
            echo ("<script>document.getElementById('otp_error').innerHTML = 'Invalid OTP'</script>");
            echo ("<script>document.getElementById('closeBtn').style.display = 'none'</script>");
            echo ("<script>document.getElementById('user_email').innerHTML = '$usr_reset_email'</script>");
            echo ("<script>document.getElementById('email_send').click()</script>");
        }
    }
}

?>
<script>
    document.addEventListener("DOMContentLoaded", function(event) {
        function OTPInput() {
            const inputs = document.querySelectorAll('#otp > *[id]');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener('keydown', function(event) {
                    if (event.key === "Backspace") {
                        inputs[i].value = '';
                        if (i !== 0) inputs[i - 1].focus();
                    } else {
                        if (i === inputs.length - 1 && inputs[i].value !== '') {
                            return true;
                        } else if (event.keyCode > 47 && event.keyCode < 58) {
                            inputs[i].value = event.key;
                            if (i !== inputs.length - 1) inputs[i + 1].focus();
                            event.preventDefault();
                        } else if (event.keyCode > 64 && event.keyCode < 91) {
                            inputs[i].value = String.fromCharCode(event.keyCode);
                            if (i !== inputs.length - 1) inputs[i + 1].focus();
                            event.preventDefault();
                        }
                    }
                });
            }
        }
        OTPInput();
    });
</script>



</html>

<?php

?>