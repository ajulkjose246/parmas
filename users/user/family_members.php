<!DOCTYPE html>
<html lang="en">
<?php
session_start();
error_reporting(E_ERROR | E_PARSE);
$fam_members_count = $_COOKIE['fam_members_count'];
for ($i = 2; $i <= $fam_members_count; $i++) {
    echo ("<script>document.cookie = 'fam_members' + $i + '=0';</script>");
    echo ("<script>document.cookie = 'fam_members_count=0';</script>");
    echo ("<script>fam_memb = 1;</script>");
}

require("../../connection/db_connect.php");
$user = $_SESSION['user'];
$user_id = $user['usr_id'];
?>

<head>
    <meta charset="utf-8">
    <title>PARMAS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap.min.css">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/fontawesome.css">

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
                                <a href="profile.php">
                                    <i class="glyphicon glyphicon-home"></i>
                                    Overview </a>
                            </li>
                            <li class="active">
                                <a href="family_members.php">
                                    <i class="glyphicon glyphicon-user"></i>
                                    Family Members</a>
                            </li>
                            <li>
                                <a href="privacy.php">
                                    <i class="glyphicon glyphicon-cog"></i>
                                    Privacy</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="profile-content">
                    <div class="col-xxl-12 mb-5 mb-xxl-0">
                        <div class="bg-secondary-soft px-4 py-5 rounded">
                            <div class="row g-3">
                                <form action="#" method="POST">
                                    <div id="family_memb">
                                        <?php
                                        $i = 0;
                                        $sql = "SELECT * FROM `tbl_family_members` WHERE `user_id` =$user_id";
                                        $result = mysqli_query($con, $sql);
                                        while ($row = mysqli_fetch_array($result)) {
                                            $i = $i + 1;
                                        ?>
                                            <div class="row mb-5">
                                                <div class="col-10 col-md-10 col-lg-11">
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label"> Family Members - <?= $i ?></label>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                                                        <input type="text" class="form-control" value="<?= $row['fam_name'] ?>" disabled>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Date Of Birth</label>
                                                        <input type="date" class="form-control" value="<?= $row['fam_dob'] ?>" disabled>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Gender</label>
                                                        <input type="text" class="form-control" value="<?= $row['fam_gender'] ?>" disabled>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Relationship</label>
                                                        <input type="text" class="form-control" value="<?= $row['fam_relationship'] ?>" disabled>
                                                    </div>
                                                </div>
                                            </div>
                                        <?php
                                        }
                                        ?>
                                    </div>
                                    <div class="col-12 col-md-12">
                                        <div class="mb-3 text-center">
                                            <a href="edit_family_members.php" class="btn btn-success" name="famUpldBtn">Update Details</a>
                                        </div>
                                    </div>
                                </form>
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

</html>