<!DOCTYPE html>
<html lang="en">
<?php
session_start();
error_reporting(E_ERROR | E_PARSE);

require("connection/db_connect.php");
$user = $_SESSION['user'];
$uid = $_SESSION['user']['usr_id'];

$usr_status = $_SESSION['user']['usr_status'];
if ($usr_status == 1) {
    $url = "/parmas/users/admin/admin_home.php";
    echo ("<script>location.href='$url'</script>");
} elseif ($usr_status == 2) {
    $url = "/parmas/users/secretary/sec_home.php";
    echo ("<script>location.href='$url'</script>");
}

?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PARAMS</title>
    <!-- css -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"> -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"> -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"> -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css"> -->
    <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap.min.css">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap-icons.css">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap4.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <!-- gallery -->
    <link rel="stylesheet" href="/parmas/assets/css/cdn/baguetteBox.min.css">
    <link rel="stylesheet" href="/parmas/assets/css/style.css">
</head>

<body id="page-top">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#page-top"><img src="/parmas/assets/img/logo.png" alt=""> PARMAS</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto my-2 my-lg-0">
                    <li class="nav-item"><a class="nav-link" href="/parmas/index.php">Home</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/parmas/pages/administration.php">Administration</a></li>
                            <li><a class="dropdown-item" href="/parmas/pages/kcym.php">KCYM</a></li>
                            <!-- <li><a class="dropdown-item" href="#">Mission League</a></li> -->
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="/parmas/pages/holy_mass.php">Holy Mass</a></li>
                    <li class="nav-item"><a class="nav-link" href="/parmas/pages/liveTV.php">Live TV</a></li>
                    <li class="nav-item"><a class="nav-link" href="/parmas/pages/offerings.php">Offerings</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                        <ul class="dropdown-menu">
                            <?php
                            if ($uid != null) {
                                $result = mysqli_query($con, "SELECT * FROM `tbl_death_relief_fund` WHERE `drf_user_id` =$uid");
                                $num = mysqli_num_rows($result);
                                if ($num > 0) { ?>
                                    <li><a class="dropdown-item" href="/parmas/users/user/view_death_relief_fund.php">View Death Relief Fund</a></li>

                                <?php } else { ?>
                                    <li><a class="dropdown-item" href="/parmas/pages/death_relief_fund.php">Apply Death Relief Fund</a></li>
                                <?php }
                            } else { ?>
                                <li><a class="dropdown-item" href="/parmas/pages/death_relief_fund.php">Apply Death Relief Fund</a></li>
                            <?php  }
                            ?>
                            <li><a class="dropdown-item" href="#">Wedding</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="/parmas/pages/contact.php">Contact Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="/parmas/pages/gallery.php">Gallery</a></li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <?php if ($user['usr_profile'] == null) { ?>
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="/parmas/assets/img/user.png" width="40" height="40" class="rounded-circle">
                            </a>
                        <?php } else { ?>
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="/parmas/assets/img/profile/<?= $user['usr_profile'] ?>" width="40" height="40" class="rounded-circle">
                            </a>
                        <?php } ?>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                            <?php if ($user['usr_id'] == null) { ?>
                                <a href="/parmas/users/login.php" class="dropdown-item" type="submit">Login now</a>
                            <?php } else { ?>
                                <a class="dropdown-item">
                                    <?= $user['usr_fname'] ?>
                                    <?= $user['usr_sname'] ?>
                                </a>
                                <hr color="black">
                                <a href="/parmas/users/user/profile.php" class="dropdown-item">Profile</a>
                                <a href="/parmas/connection/logout.php" class="dropdown-item" type="submit">Log Out</a>
                            <?php } ?>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>