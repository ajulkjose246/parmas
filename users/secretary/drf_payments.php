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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
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
                <li class="nav-item active">
                    <a class="nav-link" href="view_drf_details.php">
                        <i class="fa-solid fa-users"></i>
                        <span>View Death Relief Fund</span></a>
                </li>
                <hr class="sidebar-divider d-none d-md-block">
            </ul>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                            <h1 class="h3 mb-0 text-gray-800  fw-bolder">Death Relief Fund</h1>

                        </div>
                        <div class="row">
                            <div class="col-lg-12 mb-4">
                                <!-- Illustrations -->
                                <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                        <div class="row">
                                            <div class="col-9">
                                                <h6 class="m-0 font-weight-bold text-primary">Payment Details</h6>
                                            </div>
                                            <div class="col-3">
                                                <a href="drf_payment_pdf.php" target="_blank" class="btn btn-primary"><i class="bi bi-printer"></i> Print Payment Details</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <select id="kcym_year" onchange="kcym_sort_year()" class="form-control">
                                            <?php
                                            $result = mysqli_query($con, "SELECT DISTINCT(YEAR(`onCreate`)) AS year FROM `tbl_drf_payments`");
                                            while ($row = mysqli_fetch_array($result)) { ?>
                                                <option value="<?= $row['year'] ?>"><?= $row['year'] ?></option>
                                            <?php
                                            } ?>
                                        </select>
                                        <div id="result"></div>
                                    </div>
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
        <script src="/parmas/assets/js/cdn/jquery.min.js"></script>
        <script src="/parmas/assets/js/cdn/bootstrap.bundle.min.js"></script>
        <script src="/parmas/assets/js/cdn/sb-admin-2.min.js"></script>
        <script src="/parmas/assets/js/cdn/popper.min.js"></script>
        <script src="/parmas/assets/js/cdn/bootstrap.min.js"></script>
        <script src="/parmas/assets/js/cdn/baguetteBox.min.js"></script>
    </body>
<?php
} else {
    $yourURL = "/parmas/index.php";
    echo ("<script>location.href='$yourURL'</script>");
}
?>
<script>
    $(document).ready(function() {
        kcym_sort_year();
    })

    function kcym_sort_year() {
        var year = $('#kcym_year').find(":selected").val();
        $.ajax({
            url: "sort_drf_payments.php",
            method: "post",
            data: {
                year: year
            },
            success: function(data) {
                $('#result').html(data);
            }
        });
    }
</script>

</html>