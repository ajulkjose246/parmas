<!DOCTYPE html>
<html lang="en">
<?php
session_start();
require("../../connection/db_connect.php");
$usr_status = $_SESSION['user']['usr_status'];
if ($usr_status == 2) {
    ?>

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>PARMAS</title>

        <link rel="stylesheet" href="/parmas/assets/css/cdn/fontawesome.css">
        <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap.min.css">
        <link rel="stylesheet" href="/parmas/assets/css/cdn/sb-admin-2.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

    </head>

    <body id="page-top">
        <div id="wrapper">
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <!-- <i class="fas fa-laugh-wink"></i> -->
                    </div>
                    <div class="sidebar-brand-text mx-3"><img src="/parmas/assets/img/logo.png" style="width: 78px;"> PARMAS</div>
                </a>
                <hr class="sidebar-divider my-0">
                <li class="nav-item active">
                    <a class="nav-link" href="sec_home.php">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="kcym.php">
                        <i class="fa-solid fa-users"></i>
                        <span>KCYM</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="administration.php">
                        <i class="fa-solid fa-users"></i>
                        <span>Administration</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="gallery.php">
                    <i class="fa-solid fa-images"></i>
                        <span>Gallery</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="announcements.php">
                    <i class="fa-solid fa-bullhorn"></i>
                        <span>Announcements</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="offering_details.php">
                        <i class="fa-solid fa-users"></i>
                        <span>Offering Details</span></a>
                </li>
                <hr class="sidebar-divider d-none d-md-block">
            </ul>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="/parmas/assets/img/user.png" width="40" height="40" class="rounded-circle">
                                </a>


                                <div class="dropdown-menu" style="left: auto" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item">Secretary</a>
                                    <hr color="black">
                                    <a href="/parmas/connection/logout.php" class="dropdown-item" type="submit">Log Out</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div class="container-fluid">
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800  fw-bolder">Gallery</h1>

                        </div>
                        <div class="row">

                            <!-- Content Column -->
                            <div class="col-lg-6 mb-4">

                                <!-- Project Card Example -->
                                <div class="card shadow mb-4">
                                    <div class="card-header py-3">
                                        <h6 class="m-0 font-weight-bold text-primary">Upload Images</h6>
                                    </div>
                                    <form action="#" method="post" enctype="multipart/form-data">
                                        <div class="card-body">

                                            <h4 class="small font-weight-bold">Images : </h4>
                                            <div class=" mb-4">
                                            <input type="file" id="image" onchange="fileValidation()" name="image"
                                                    class="form-control" required>
                                            </div>
                                            <div class=" mb-4">
                                                <input type="submit" name="subBtn" id="subBtn"
                                                    class="form-control btn-primary" value="Submit">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">

                                <!-- Project Card Example -->
                                <div class="card shadow mb-4">
                                    <div class="card-header py-3">
                                        <h6 class="m-0 font-weight-bold text-primary">View Images</h6>
                                    </div>
                                    <form action="#" method="post" enctype="multipart/form-data">
                                        <div class="card-body">
                                            <table style="width: 100%;border-collapse:separate;border-spacing:0 15px;">
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Action</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <hr width="250%">
                                                    </td>
                                                </tr>
                                                <?php
                                                $sql = "SELECT * FROM `tbl_gallery` WHERE `img_status` = 1";
                                                $result = mysqli_query($con, $sql);
                                                while ($row = mysqli_fetch_array($result)) { ?>
                                                    <tr>
                                                        <td><a href="/parmas/assets/img/gallery/<?= $row['img_location'] ?>" target="_blank"><img src="/parmas/assets/img/gallery/<?= $row['img_location'] ?>"
                                                                alt="" style="width: 43px;height: 43px;"></a></td>
                                                        <td><a href="remove_images.php?id=<?= $row['img_id'] ?>"
                                                                class="btn btn-danger">Delete</a></td>
                                                    </tr>
                                                <?php } ?>
                                            </table>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <footer class="sticky-footer bg-white">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright &copy; parmas</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/js/sb-admin-2.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script> -->

        <script src="/parmas/assets/js/cdn/jquery.min.js"></script>
        <script src="/parmas/assets/js/cdn/bootstrap.bundle.min.js"></script>
        <script src="/parmas/assets/js/cdn/sb-admin-2.min.js"></script>
        <script src="/parmas/assets/js/cdn/popper.min.js"></script>
        <script src="/parmas/assets/js/cdn/bootstrap.min.js"></script>
        <script src="/parmas/assets/js/cdn/baguetteBox.min.js"></script>
    </body>
    <?php
    if (isset($_POST['subBtn'])) {
        $image = $_FILES['image']['name'];
        $sql = "INSERT INTO `tbl_gallery`(`img_location`) VALUES ('$image')";
        mysqli_query($con, $sql);
        $targetdir = "../../assets/img/gallery/";
        $file_path = $targetdir . basename($image);
        move_uploaded_file($_FILES['image']['tmp_name'], $file_path);
        $yourURL = "gallery.php";
        echo ("<script>location.href='$yourURL'</script>");
    }
} else {
    $yourURL = "/parmas/index.php";
    echo ("<script>location.href='$yourURL'</script>");
}
?>
<script>
     function fileValidation() {
        var fileInput =
            document.getElementById('image');
        var filePath = fileInput.value;
        // Allowing file type
        var allowedExtensions =
            /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (!allowedExtensions.exec(filePath)) {
            $('#subBtn').attr("disabled", true);
            alert('only image files allowed');
            fileInput.value = '';
            return false;
        } else {
            $('#subBtn').attr("disabled", false);
        }
    }
</script>
</html>