<!DOCTYPE html>
<html lang="en">
<?php
session_start();
// error_reporting(E_ERROR | E_PARSE);

require("../../connection/db_connect.php");
$user = $_SESSION['user'];
$user_id = $user['usr_id'];

$sql = "SELECT SUM(`amount`) AS total_offer FROM `tbl_payment` WHERE `user_id`=$user_id AND `payment_status` != 'Pending'";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result);
?>

<head>
    <meta charset="utf-8">
    <title>PARMAS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap.min.css">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/fontawesome.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

    <link rel="stylesheet" href="/parmas/assets/css/profile.css">
    <style>
        input {
            cursor: context-menu !important;
        }
    </style>
</head>

<body>
    <div class="container-fluid mt-5">
        <div class="row profile">
            <div class="col-md-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/parmas/index.php">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">My Profile</li>
                    </ol>
                </nav>
                <div class="profile-sidebar">
                    <!-- SIDEBAR USERPIC -->
                    <div class="profile-userpic">
                        <img src="/parmas/assets/img/profile/<?= $user['usr_profile'] ?>" class="img-responsive" alt="">
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
                                <a href="#">
                                    <i class="glyphicon glyphicon-home"></i>
                                    Overview </a>
                            </li>
                            <li>
                                <a href="family_members.php">
                                    <i class="glyphicon glyphicon-user"></i>
                                    Family Members</a>
                            </li>
                            <li class="active">
                                <a href="marrCerificate.php">
                                    <i class="glyphicon glyphicon-certificate"></i>
                                    Marriage Certificates</a>
                            </li>
                            <li>
                                <a href="privacy.php">
                                    <i class="glyphicon glyphicon-cog"></i>
                                    Privacy</a>
                            </li>

                        </ul>
                    </div>
                    <!-- END MENU -->
                </div>
            </div>
            <div class="col-md-9">
                <?php
                $result = mysqli_query($con, "SELECT * FROM `tbl_marriage_kuri_a` WHERE `usr_id` =$user_id AND `status` = 0");
                $num = mysqli_num_rows($result);
                if ($num > 0) { ?>
                    <div class="alert alert-warning alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <strong>Warning!</strong> After validating the marriage registration, we will notify you.
                    </div>
                <?php }
                ?>
                <div class="profile-content">
                    <div class="col-xxl-12 mb-5 mb-xxl-0">
                        <div class="bg-secondary-soft px-4 py-5 rounded">
                            <div class="row g-3">
                                <h4 class="mb-4 mt-0">Download Certificates (The original document will be collected from the parish)</h4>
                            </div>
                            <?php
                            $result = mysqli_query($con,"SELECT * FROM `tbl_marriage_kuri_a` WHERE `usr_id` =$user_id AND `status` = 1");
                            $num=mysqli_num_rows($result);
                            ?>
                            <div class="row">
                                <?php
                                if($num>0){
                                ?>
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <a class="btn btn-primary" href="marrKuriA.php" target="_blank"><i class="bi bi-download"></i> Kuri A</a>
                                    </div>
                                </div>
                                <?php }?>
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-primary" type="button"><i class="bi bi-download"></i> Kuri C</button>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-primary" type="button"><i class="bi bi-download"></i> Kuri D</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js"></script>

</html>