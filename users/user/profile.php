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
                            <li class="active">
                                <a href="#">
                                    <i class="glyphicon glyphicon-home"></i>
                                    Overview </a>
                            </li>
                            <li>
                                <a href="family_members.php">
                                    <i class="glyphicon glyphicon-user"></i>
                                    Family Members</a>
                            </li>
                            <li>
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
                $num=mysqli_num_rows($result);
                if ($num>0) { ?>
                    <div class="alert alert-warning alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <strong>Warning!</strong> After validating the marriage registration, we will notify you.
                    </div>
                <?php }
                ?>
                <div class="profile-content">
                    <div class="col-xxl-12 mb-5 mb-xxl-0">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-3 mb-4">
                                <div class="card border-left-primary shadow h-100 py-2">
                                    <div class="card-body" style="margin-left: 5%;">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Total Offerings</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800" style="font-size: large;">₹ <?= $row['total_offer'] ?></div>
                                            </div>
                                            <div class="col-auto">
                                                <i class="fa-solid fa-indian-rupee-sign  fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3 mb-4">
                                <a href="/parmas/users/user/view_death_relief_fund.php">
                                    <div class="card border-left-primary shadow h-100 py-2">
                                        <div class="card-body" style="margin-left: 5%;">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Pay
                                                        <h5>Death Relief Fund</h5>
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="fa-solid fa-indian-rupee-sign  fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="bg-secondary-soft px-4 py-5 rounded">
                            <div class="row g-3">
                                <h4 class="mb-4 mt-0">Contact detail</h4>
                                <div class="col-md-6">
                                    <label class="form-label">First Name</label>
                                    <input type="text" class="form-control" placeholder="" aria-label="First name" value="<?= $user['usr_fname'] ?>" disabled>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Last Name</label>
                                    <input type="text" class="form-control" placeholder="" aria-label="Last name" value="<?= $user['usr_sname'] ?>" disabled>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Phone number</label>
                                    <input type="text" class="form-control" placeholder="" aria-label="Phone number" value="<?= $user['usr_phone'] ?>" disabled>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Email</label>
                                    <input type="text" class="form-control" placeholder="" aria-label="Phone number" value="<?= $user['usr_email'] ?>" disabled>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">House Name</label>
                                    <input type="email" class="form-control" id="inputEmail4" value="<?= $user['usr_houseName'] ?>" disabled>
                                </div>
                                <?php if ($user['usr_bapName'] != null) { ?>
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Baptism Name</label>
                                        <input type="text" name="usr_bapName" class="form-control" value="<?= $user['usr_bapName'] ?>" disabled>
                                    </div>
                                <?php } ?>
                                <?php if ($user['usr_ward'] != null) { ?>
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Family Unit</label>
                                        <?php if ($user['usr_ward'] == 1) { ?>
                                            <input type="text" name="usr_ward" class="form-control" value="St Xavier Family Unit" disabled>
                                        <?php } else if ($user['usr_ward'] == 2) { ?>
                                            <input type="text" name="usr_ward" class="form-control" value="St Vincent Family Unit" disabled>
                                        <?php } else if ($user['usr_ward'] == 3) { ?>
                                            <input type="text" name="usr_ward" class="form-control" value="St Pius Family Unit" disabled>
                                        <?php } else if ($user['usr_ward'] == 4) { ?>
                                            <input type="text" name="usr_ward" class="form-control" value="St Sebastian Family Unit" disabled>
                                        <?php } else if ($user['usr_ward'] == 5) { ?>
                                            <input type="text" name="usr_ward" class="form-control" value="St Paul Family Unit" disabled>
                                        <?php } else if ($user['usr_ward'] == 6) { ?>
                                            <input type="text" name="usr_ward" class="form-control" value="St Thomas Family Unit" disabled>
                                        <?php } else if ($user['usr_ward'] == 7) { ?>
                                            <input type="text" name="usr_ward" class="form-control" value="Mother Teresa Family Unit" disabled>
                                        <?php } else if ($user['usr_ward'] == 8) { ?>
                                            <input type="text" name="usr_ward" class="form-control" value="St Teresa Family Unit" disabled>
                                        <?php } ?>
                                    </div>
                                <?php } ?>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label text-light"> </label>
                                    <a href="/parmas/users/user/edit_profile.php" id="upld_profile" class="form-control btn btn-primary">Update Your
                                        Profile</a>
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