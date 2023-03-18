<!DOCTYPE html>
<html lang="en">
<?php
session_start();
error_reporting(E_ERROR | E_PARSE);

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
</head>

<body>
    <div class="container-fluid mt-5">
        <div class="row profile">
            <div class="col-md-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/parmas/index.php">Home</a></li>
                        <li class="breadcrumb-item"><a href="family_members.php">Members</a></li>
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
                                <a href="edit_profile.php">
                                    <i class="glyphicon glyphicon-home"></i>
                                    Overview </a>
                            </li>
                            <li class="active">
                                <a href="edit_family_members.php">
                                    <i class="glyphicon glyphicon-user"></i>
                                    Family Members</a>
                            </li>
                            <!-- <li>
                                <a href="#">
                                    <i class="glyphicon glyphicon-cog"></i>
                                    Privacy</a>
                            </li> -->
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
                                    <div>
                                        <?php
                                        $i = 0;
                                        $sql = "SELECT * FROM `tbl_family_members` WHERE `user_id` =$user_id";
                                        $result = mysqli_query($con, $sql);
                                        while ($row = mysqli_fetch_array($result)) {
                                            $i = $i + 1;
                                        ?>
                                            <div class="row mb-5">
                                                <div class="col-10 col-md-10 col-lg-12">
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label"> Family Members - <?= $i ?></label>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Name <label class="form-label error" id="n_error<?= $i ?>"></label></label>
                                                        <input type="text" class="form-control" onkeyup="namevalidation(<?= $i ?>,this.value)" name="fam_name<?= $i ?>" value="<?= $row['fam_name'] ?>" required>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Date Of Birth</label>
                                                        <input type="date" class="form-control" max="<?php echo date("Y-m-d"); ?>" id="upd_dob<?= $i ?>" name="fam_dob<?= $i ?>" value="<?= $row['fam_dob'] ?>" required>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6" style="display: none;">
                                                    <input type="text" class="form-control" name="fam_id<?= $i ?>" value="<?= $row['fam_id'] ?>">
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Gender <label class="form-label error" id="g_error<?= $i ?>"></label></label>
                                                        <input type="text" class="form-control" onkeyup="gendervalidation(<?= $i ?>,this.value)" id="upd_gender<?= $i ?>" name="fam_gender<?= $i ?>" value="<?= $row['fam_gender'] ?>" required>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">Relationship<label class="form-label error" id="r_error<?= $i ?>"></label></label>
                                                        <input type="text" class="form-control" onkeyup="relationshipvalidation(<?= $i ?>,this.value)" id="upd_relationship<?= $i ?>" name="fam_relationship<?= $i ?>" value="<?= $row['fam_relationship'] ?>" required>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 mt-5">
                                                    <input type="submit" style="width: 100%;" class="btn btn-success" id="famUpldBtn<?= $i ?>" name="famUpldBtn<?= $i ?>" value="Update">
                                                </div>
                                                <div class="col-12 col-md-6 mt-5">
                                                    <a href="remove_family_members.php?id=<?= $row['fam_id'] ?>" style="width: 100%;" class="btn btn-danger" name="famUpldBtn<?= $i ?>">Delete</a>
                                                </div>

                                            </div>
                                        <?php
                                        }
                                        ?>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="profile-content mt-5">
                    <div class="col-xxl-12 mb-5 mb-xxl-0">
                        <div class="bg-secondary-soft px-4 py-5 rounded">
                            <div class="row g-3">
                                <form action="#" method="POST">
                                    <div id="family_memb">
                                        <div class="row">
                                            <div class="col-10 col-md-10 col-lg-11">
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Add Family Members </label>
                                                </div>
                                            </div>
                                            <div class="col-2 col-md-2 col-lg-1">
                                                <div class="mb-3 ">
                                                    <a class='btn btn-success' id="add_member"><i class="bi bi-plus-circle"></i></a>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Name <label class="form-label error" id="addName_error1"></label></label>
                                                    <input type="text" class="form-control" onkeyup="addNamevalidation(1,this.value)" name="fam_name1" id="fam_name1" required>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Date Of Birth</label>
                                                    <input type="date" class="form-control" max="<?php echo date("Y-m-d"); ?>" name="fam_dob1" id="fam_dob1" required>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Gender</label><br>
                                                    <input type="radio" class="btn-check" value="Male" name="gender1" id="success1-outlined" autocomplete="off" checked>
                                                    <label class="btn btn-outline-secondary" for="success1-outlined" style="width: 40%;">Male </label>

                                                    <input type="radio" class="btn-check" value="Female" name="gender1" id="danger1-outlined" autocomplete="off">
                                                    <label class="btn btn-outline-secondary" for="danger1-outlined" style="width: 40%;"> Female </label>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Relationship <label class="form-label error" id="addRelationship_error1"></label></label>
                                                    <input type="text" class="form-control" onkeyup="addRelationshipvalidation(1,this.value)" name="fam_relationship1" id="fam_relationship1" required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 mt-5">
                                        <input type="submit" style="width:100%" class="btn btn-success" id="addBtn" name="famUpldBtn" value="Add">
                                    </div>
                                    <div class="col-12 col-md-6 mt-5">
                                        <a href="family_members.php" style="width: 100%;" class="btn btn-danger" name="famUpldBtn">Cancel</a>
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
<?php
echo ("<script>let no_members =$i </script>");
for ($j = 1; $j <= $i; $j++) {
    if (isset($_POST['famUpldBtn' . $j])) {
        $fam_name = $_POST['fam_name' . $j];
        $fam_id = $_POST['fam_id' . $j];
        $fam_dob = $_POST['fam_dob' . $j];
        $fam_gender = $_POST['fam_gender' . $j];
        $fam_relationship = $_POST['fam_relationship' . $j];
        $sql = "UPDATE `tbl_family_members` SET `fam_name`='$fam_name',`fam_dob`='$fam_dob',`fam_gender`='$fam_gender',`fam_relationship`='$fam_relationship' WHERE `user_id` =$user_id AND `fam_id` =$fam_id";
        mysqli_query($con, $sql);
        $url = "edit_family_members.php";
        echo ("<script>location.href='$url'</script>");
    }
}
?>
<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script>
    let fam_memb = 1
    $(document).ready(function() {
        $("#add_member").click(function() {
            fam_memb++
            $("#family_memb").append("<div class='row mt-5' id='fam_memb_" + fam_memb + "'> <div class='col-10 col-md-10 col-lg-11'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'> Family Members </label> </div> </div> <div class='col-2 col-md-2 col-lg-1'> <div class='mb-3 '> <button class='btn btn-danger' onclick='remove_education_fields(" + fam_memb + ");'><i class='bi bi-x-circle'></i></button> </div> </div> <div class='col-12 col-md-6'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>Name<label class='form-label error' id='addName_error" + fam_memb + "'></label></label> <input type='text' onkeyup='addNamevalidation(" + fam_memb + ",this.value)' name='fam_name" + fam_memb + "' class='form-control' id='fam_name" + fam_memb + "' required> </div> </div> <div class='col-12 col-md-6'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>Date Of Birth</label> <input type='date' name='fam_dob" + fam_memb + "' class='form-control' id='fam_dob" + fam_memb + "' required> </div> </div> <div class='col-12 col-md-6'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>Gender</label><br> <input type='radio' class='btn-check' name='gender" + fam_memb + "' id='success" + fam_memb + "-outlined' value='Male' autocomplete='off' checked> <label class='btn btn-outline-secondary' for='success" + fam_memb + "-outlined' style='width: 40%;'>Male </label> <input type='radio' class='btn-check' name='gender" + fam_memb + "' id='danger" + fam_memb + "-outlined' value='Female' autocomplete='off'> <label class='btn btn-outline-secondary' for='danger" + fam_memb + "-outlined' style='width: 40%;'> Female </label> </div> </div> <div class='col-12 col-md-6'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>Relationship<label class='form-label error' id='addRelationship_error" + fam_memb + "'></label></label> <input type='text' onkeyup='addRelationshipvalidation(" + fam_memb + ",this.value)' name='fam_relationship" + fam_memb + "' class='form-control' id='fam_relationship" + fam_memb + "' required> </div> </div>")
            document.cookie = "fam_members" + fam_memb + "=" + fam_memb;
            document.cookie = "fam_members_count=" + fam_memb;
        })
    })

    function remove_education_fields(mid) {
        $('#fam_memb_' + mid).remove();
        document.cookie = "fam_members" + mid + "=0";
    }
</script>
<?php
if (isset($_POST['famUpldBtn'])) {
    $fam_name = $_POST['fam_name1'];
    $fam_dob = $_POST['fam_dob1'];
    $fam_gender = $_POST['gender1'];
    $fam_relationship = $_POST['fam_relationship1'];

    $sql = "INSERT INTO `tbl_family_members`(`user_id`, `fam_name`, `fam_dob`, `fam_gender`, `fam_relationship`) VALUES ('$user_id','$fam_name','$fam_dob','$fam_gender','$fam_relationship')";
    mysqli_query($con, $sql);
    $fam_members_count = $_COOKIE['fam_members_count'];
    for ($i = 2; $i <= $fam_members_count; $i++) {
        if ($_COOKIE['fam_members' . $i] != 0) {
            unset($_COOKIE['fam_members' . $i]);
            echo ("<script>document.cookie = 'fam_members' + $i + '=0';</script>");
            echo ("<script>document.cookie = 'fam_members_count=0';</script>");
            echo ("<script>fam_memb = 1;</script>");
            $fam_name = $_POST['fam_name' . $i];
            $fam_dob = $_POST['fam_dob' . $i];
            $fam_gender = $_POST['gender' . $i];
            $fam_relationship = $_POST['fam_relationship' . $i];
            $sql = "INSERT INTO `tbl_family_members`(`user_id`, `fam_name`, `fam_dob`, `fam_gender`, `fam_relationship`) VALUES ('$user_id','$fam_name','$fam_dob','$fam_gender','$fam_relationship')";
            mysqli_query($con, $sql);
        }
    }
    echo ("<script>document.cookie = 'fam_members_count=0';</script>");
    $url = "family_members.php";
    echo ("<script>location.href='$url'</script>");
}
?>
<script>
    var r_name = true,
        r_gender = true,
        r_relationship = true;

    function namevalidation(id, name) {
        var c_name = /^[a-z ]{3,}$/i;
        r_name = c_name.test(name)
        if (!r_name) {
            $("#n_error" + id).text("Enter a valid Name");
            $("#famUpldBtn" + id).prop('disabled', true);
        } else {
            $("#n_error" + id).text("");
            validUpdData(id)

        }
    }

    function gendervalidation(id, gender) {
        var c_gender = /.*?((?:fe)?male).*/i;
        r_gender = c_gender.test(gender)
        if (!r_gender) {
            $("#g_error" + id).text("Enter a valid Gender");
            $("#famUpldBtn" + id).prop('disabled', true);
        } else {
            $("#g_error" + id).text("");
            validUpdData(id)

        }
    }

    function relationshipvalidation(id, relationship) {
        var c_relationship = /^[a-z ]{3,}$/i;
        r_relationship = c_relationship.test(relationship)
        if (!r_relationship) {
            $("#r_error" + id).text("Enter a valid Relationship");
            $("#famUpldBtn" + id).prop('disabled', true);
        } else {
            $("#r_error" + id).text("");
            validUpdData(id)

        }
    }

    function validUpdData(id) {
        if (r_relationship == true && r_gender == true && r_name == true) {
            $("#famUpldBtn" + id).prop('disabled', false);
        }
    }
    // fam_name" + fam_memb + "
    // fam_dob" + fam_memb + "
    // fam_relationship" + fam_memb + "

    // fam_name1
    // fam_dob1
    // fam_relationship1

    // upd_gender
    // upd_dob
    // upd_name
    // upd_relationship1
</script>
<script>
    var r_name, r_relationship;

    function addNamevalidation(id, name) {
        var c_name = /^[a-z ]{3,}$/i;
        r_name = c_name.test(name)
        if (!r_name) {
            $("#addName_error" + id).text("Enter a valid Name");
            $("#addBtn").prop('disabled', true);
        } else {
            $("#addName_error" + id).text("");
            validAddData(id)

        }
    }

    function addRelationshipvalidation(id, relationship) {
        var c_relationship = /^[a-z ]{3,}$/i;
        r_relationship = c_relationship.test(relationship)
        if (!r_relationship) {
            $("#addRelationship_error" + id).text("Enter a valid Relationship");
            $("#addBtn").prop('disabled', true);
        } else {
            $("#addRelationship_error" + id).text("");
            validAddData(id)

        }
    }

    function validAddData(id) {
        if (r_name == true && r_relationship == true) {
            $("#addBtn").prop('disabled', false);
        }
    }
</script>

</html>