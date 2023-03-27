<!DOCTYPE html>
<html lang="en">
<?php
session_start();
error_reporting(E_ERROR | E_PARSE);
require("../connection/db_connect.php");
$uid = $_SESSION['user']['usr_id'];
$result=mysqli_query($con,"SELECT * FROM `tbl_marriage_kuri_a` WHERE `usr_id` = $uid");
$row=mysqli_fetch_array($result);
$progress=$row['progress'];
if($progress==75){
    echo ("<script>location.href='/parmas/pages/register_marriage_p3.php'</script>");
}
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="/parmas/assets/css/death_relief_fund.css">
</head>

<body>
    <?php
    if ($uid != null) {
    ?>
        <section>
            <div class="container-fluid mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="col-11 ">
                        <div class="card">
                            
                            <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="<?=$progress?>" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: <?=$progress?>%"></div>
                            </div><hr>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a style="text-decoration: none;" href="/parmas/index.php">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Register Marriage</li>
                                </ol>
                            </nav>
                        </div>

                        <div class="card">
                            <div class="col-12">
                                <div class="row">
                                    <label class="col-sm-6 col-form-label fw-bold">Download Marriage Register Kuri A</label>
                                    <div class="col-sm-6">
                                        <div class="d-grid gap-2 col-3 mx-auto">
                                            <a href="../users/user/marrKuriA.php" target="_blank" class="btn btn-primary">Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">

                            
                            <form class="form-card" method="POST" action="#" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row mb-3">
                                            <label class="col-sm-6 col-form-label fw-bold">Upload Marriage Register Kuri B</label>
                                            <div class="col-sm-6">
                                                <input type="file" name="kuriB" class="form-control" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 text-center">
                                        <div class="d-grid gap-2 col-3 mx-auto">
                                            <input type="submit" name="upldKuriB" class="btn btn-primary">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <?php
    if(isset($_POST['upldKuriB'])){
        $kuriB=$_FILES['kuriB']['name'];
        $result=mysqli_query($con,"UPDATE `tbl_marriage_kuri_a` SET `marrKuriBFile`='$kuriB',`progress`=50 WHERE `usr_id` =$uid");
        require("../pages/modal.php");
        $targetdir = "../assets/certificates/Marriage/";
        $file_path = $targetdir . $kuriB;
        move_uploaded_file($_FILES['kuriB']['tmp_name'], $file_path);
        echo ("<script>modal_message(1,'Registration Success <br>! After validating the marriage registration, we will notify you.','/parmas/pages/register_marriage_p2.php')</script>");
    }
    } else {
        require("../pages/modal.php");
        echo ("<script>modal_message(2,'You dont have permission to view this page Please Login','/parmas/index.php')</script>");
    }
    ?>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<script src="/parmas/assets/js/death_relief_fund.js"></script>

</html>