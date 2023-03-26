<!DOCTYPE html>
<html lang="en">
<?php
session_start();
require("../../connection/db_connect.php");
$usr_status = $_SESSION['user']['usr_status'];
if ($usr_status == 1) {
    ?>
<?php
    $sql="SELECT COUNT(*) as count FROM `tbl_register`";
    $result=mysqli_query($con,$sql);
    $row=mysqli_fetch_array($result);
    $total_users=$row['count'];

    $sql="SELECT sum(`amount`) as total  FROM `tbl_payment`";
    $result=mysqli_query($con,$sql);
    $row=mysqli_fetch_array($result);
    $total_amt=$row['total'];

?>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>PARMAS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

        <link rel="stylesheet" href="/parmas/assets/css/cdn/fontawesome.css">
        <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap.min.css">
        <link rel="stylesheet" href="/parmas/assets/css/cdn/sb-admin-2.min.css">
        
    </head>

    <body id="page-top">
        <div id="wrapper">
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <!-- <i class="fas fa-laugh-wink"></i> -->
                    </div>
                    <div class="sidebar-brand-text mx-3"><img src="/parmas/assets/img/logo.png" style="width: 78px;"> PARMAS</div>
                </a>
                <hr class="sidebar-divider my-0">
                <li class="nav-item active">
                    <a class="nav-link" href="admin_home.php">
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
                    <a class="nav-link" href="offering_details.php">
                        <i class="fa-solid fa-users"></i>
                        <span>Offering Details</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="view_drf_details.php">
                        <i class="fa-solid fa-users"></i>
                        <span>View Death Relief Fund</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="marriageRegister.php">
                        <i class="fa-solid fa-users"></i>
                        <span>Marriage Registrations</span></a>
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
                                    <a class="dropdown-item">Admin</a>
                                    <hr color="black">
                                    <a href="/parmas/connection/logout.php" class="dropdown-item" type="submit">Log Out</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div class="container-fluid">
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800  fw-bolder">Dashboard</h1>

                        </div>
                        <div class="row">
                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-left-primary shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Offerings</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800">₹<?= $total_amt?></div>
                                            </div>
                                            <div class="col-auto">
                                            <i class="fa-solid fa-indian-rupee-sign  fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-left-success shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Users</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800"><?=$total_users?></div>
                                            </div>
                                            <div class="col-auto">
                                                <i class="fa-solid fa-users fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
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

</html>