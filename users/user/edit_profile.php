<!DOCTYPE html>
<html lang="en">
<?php
session_start();
// error_reporting(E_ERROR | E_PARSE);

require("../../connection/db_connect.php");
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

    <link rel="stylesheet" href="/parmas/assets/css/profile.css">
</head>

<body>
    <div class="container-fluid mt-5">
        <form method="POST" action="#" class="file-upload" enctype="multipart/form-data">
            <div class="row profile">
                <div class="col-md-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/parmas/index.php">Home</a></li>
                            <li class="breadcrumb-item"><a href="profile.php">Profile</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Edit Profile</li>
                        </ol>
                    </nav>

                    <div class="profile-sidebar">
                        <!-- SIDEBAR USERPIC -->
                        <div class="profile-userpic">
                            <img id="img_upld" src="/parmas/assets/img/profile/<?= $user['usr_profile'] ?>" class="img-responsive" alt="">
                            <input onchange="fileValidation()" type="file" id="pro_upld" name="pro_upld" style="display:none">
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
                                    <a href="edit_family_members.php">
                                        <i class="glyphicon glyphicon-user"></i>
                                        Family Members </a>
                                </li>
                                <!-- <li>
                                    <a href="#">
                                        <i class="glyphicon glyphicon-cog"></i>
                                        Privacy</a>
                                </li> -->
                            </ul>
                        </div>
                        <!-- END MENU -->
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="profile-content">
                        <div class="col-xxl-12 mb-5 mb-xxl-0">
                            <div class="bg-secondary-soft px-4 py-5 rounded">
                                <div class="row g-3">
                                    <h4 class="mb-4 mt-0">Contact detail</h4>
                                    <div class="col-md-6">
                                        <label class="form-label">First Name </label> <label class="form-label error" id="f_error"></label>
                                        <input type="text" name="fname" id="fname" class="form-control" placeholder="" aria-label="First name" value="<?= $user['usr_fname'] ?>" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Last Name </label> <label class="form-label error" id="s_error"></label>
                                        <input type="text" name="sname" id="sname" class="form-control" aria-label="Last name" value="<?= $user['usr_sname'] ?>" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Phone number </label> <label class="form-label error" id="p_error"></label>
                                        <input type="text" name="phone" id="phone" class="form-control" placeholder="" aria-label="Phone number" value="<?= $user['usr_phone'] ?>" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Email </label> <label class="form-label error" id="e_error"></label>
                                        <input type="email" name="email" id="email" class="form-control" placeholder="" aria-label="Phone number" value="<?= $user['usr_email'] ?>" disabled>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">House Name </label> <label class="form-label error" id="h_error"></label>
                                        <?php if ($user['usr_houseName'] == null) { ?>
                                            <input type="text" name="hname" class="form-control" id="hname" required>
                                        <?php } else { ?>
                                            <input type="text" name="hname" id="hname" class="form-control" value="<?= $user['usr_houseName'] ?>" required>
                                        <?php } ?>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Baptism Name </label> <label class="form-label error" id="bap_error"></label>
                                        <?php if ($user['usr_bapName'] == null) { ?>
                                            <input type="text" name="bap_name"" class=" form-control" id="bap_name" required>
                                        <?php } else { ?>
                                            <input type="text" name="bap_name" id="bap_name" class="form-control" value="<?= $user['usr_bapName'] ?>" required>
                                        <?php } ?>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Family Unit </label> <label class="form-label error" id="ward_error"></label>
                                        <select class="form-control" name="usr_ward" id="usr_ward" required>
                                            <option value="" disabled selected>Select Family Unit</option>
                                            <?php
                                            $sql = "SELECT * FROM `tbl_family_unit`";
                                            $result = mysqli_query($con, $sql);
                                            while ($row = mysqli_fetch_array($result)) {
                                            ?>
                                                <option value="<?= $row['unit_id'] ?>"><?= $row['unit_name'] ?></option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <!-- <label class="form-label text-white">Password </label> <label class="form-label error" id="pwd_error"></label> -->
                                        <!-- <input type="password" name="pwd" id="pwd" class="form-control" placeholder="" aria-label="First name"> -->
                                    </div>


                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label text-light">w</label>
                                        <input type="submit" name="update" id="Update" class="form-control btn btn-primary" value="Update">
                                    </div>

                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label text-light">w</label>
                                        <a href="./profile.php" class="form-control btn btn-danger">Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</body>
<?php
if (isset($_POST['update'])) {
    $fname = $_POST['fname'];
    $sname = $_POST['sname'];
    $phone = $_POST['phone'];
    // $email = $_POST['email'];
    $hname = $_POST['hname'];
    $bap_name = $_POST['bap_name'];
    $ward = $_POST['usr_ward'];
    // $pwd = $_POST['pwd'];
    // if ($pwd == null) {
    //     $pwd = $_SESSION['usr_password'];
    // }
    // $_SESSION['usr_password'] = $pwd;
    $files = $_FILES['pro_upld']['name'];
    if ($files == null) {
        $files = $_SESSION['user']['usr_profile'];
    }
    if ($fname != null && $sname != null && $phone != null && $hname != null && $bap_name != null && $ward != null && $files != null) {
        $sql = "UPDATE `tbl_register` SET `usr_fname`='$fname',`usr_sname`=' $sname',`usr_phone`='$phone',`usr_bapName`='$bap_name',`usr_ward`='$ward' ,`usr_houseName`='$hname' ,`usr_profile`='$files' WHERE `usr_id`= $uid";
        mysqli_query($con, $sql);
        // $sql = "UPDATE `tbl_login` SET `usr_email`='$email',`usr_password`='$pwd' WHERE `usr_id` = $uid";
        // mysqli_query($con, $sql);
        $targetdir = "../../assets/img/profile/";
        $file_path = $targetdir . $files;
        move_uploaded_file($_FILES['pro_upld']['tmp_name'], $file_path);
    }
    $sql = "SELECT * FROM `tbl_register` WHERE `usr_id` = $uid";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($result);
    $_SESSION['user'] = $row;
    $url = "profile.php";
    echo ("<script>location.href='$url'</script>");
}
?>
</body>
<script src="/parmas/assets/js/cdn/jquery-1.10.2.min.js"></script>
<script src="/parmas/assets/js/cdn/bootstrap.bundle.min.js"></script>
<script src="/parmas/assets/js/edit_profile.js"></script>
<script>
    var uid = <?= $_SESSION['user']['usr_id'] ?>;
</script>
<script>
    document.getElementById('img_upld').addEventListener('click', () => {
        document.getElementById('pro_upld').click()
    })
</script>

</html>