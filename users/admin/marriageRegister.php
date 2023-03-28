<!DOCTYPE html>
<html lang="en">
<?php
session_start();
require("../../connection/db_connect.php");
$_SESSION['location'] = "/parmas/users/admin/marriageRegister.php";
$usr_status = $_SESSION['user']['usr_status'];
if ($usr_status == 1) {
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
                    <i class="fa-solid fa-ring"></i>
                        <span>Marriage Registrations</span></a>
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
                                    <a class="dropdown-item">Admin</a>
                                    <hr color="black">
                                    <a href="/parmas/connection/logout.php" class="dropdown-item" type="submit">Log Out</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div class="container-fluid">
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800  fw-bolder">Marriage Registrations</h1>

                        </div>
                        <div class="row">
                            <div class="col-lg-12 mb-4">
                                <div class="card shadow mb-4">
                                    <div class="card-header py-3">
                                        <div class="row">
                                            <div class="col-10">
                                                <h6 class="m-0 font-weight-bold text-primary">View Kuri A Details</h6>
                                            </div>
                                            <div class="col-2">
                                                <?php
                                                $result = mysqli_query($con, "SELECT * FROM `tbl_marriage_kuri_a` WHERE `progress` =25");
                                                $num = mysqli_num_rows($result)
                                                ?>
                                                <a href="marriageRegisterRequest.php" class="btn btn-primary"> Requests <span class="badge text-bg-secondary"><?= $num ?></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <table style="width: 100%;border-collapse:separate;border-spacing:0 15px;">
                                            <tr>
                                                <th>#</th>
                                                <th>Groom Name</th>
                                                <th>Groom Parish</th>
                                                <th>Groom Surname</th>
                                                <th>Bride Name</th>
                                                <th>Bride Parish</th>
                                                <th>Bride Surname</th>
                                                <th>Full Details</th>
                                            </tr>
                                            <?php
                                            $i = 0;
                                            $result = mysqli_query($con, "SELECT * FROM `tbl_marriage_kuri_a` WHERE `progress` between 35 and 100");
                                            while ($row = mysqli_fetch_array($result)) {
                                                $i = $i + 1;
                                            ?>
                                                <tr>
                                                    <td><?= $i ?></td>
                                                    <td><?= $row['GroomName'] ?></td>
                                                    <td><?= $row['GroomParish'] ?></td>
                                                    <td><?= $row['GroomSurname'] ?></td>
                                                    <td><?= $row['BrideName'] ?></td>
                                                    <td><?= $row['BrideParish'] ?></td>
                                                    <td><?= $row['BrideSurname'] ?></td>
                                                    <td><a href="ViewUserMarriageRegister.php?id=<?= $row['id'] ?>" style="text-decoration: none;">View</a></td>
                                                </tr>
                                            <?php } ?>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 mb-4">
                                <div class="card shadow mb-4">
                                    <div class="card-header py-3">
                                        <div class="row">
                                            <div class="col-10">
                                                <h6 class="m-0 font-weight-bold text-primary">View Kuri B Details</h6>
                                            </div>
                                            <div class="col-2">
                                                <?php
                                                $result = mysqli_query($con, "SELECT * FROM `tbl_marriage_kuri_a` WHERE `progress` =50");
                                                $num = mysqli_num_rows($result)
                                                ?>
                                                <a href="marriageRegisterRequestKuriB.php" class="btn btn-primary"> Requests <span class="badge text-bg-secondary"><?= $num ?></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <table style="width: 100%;border-collapse:separate;border-spacing:0 15px;">
                                            <tr>
                                                <th>#</th>
                                                <th>Groom Name</th>
                                                <th>Groom Parish</th>
                                                <th>Groom Surname</th>
                                                <th>Bride Name</th>
                                                <th>Bride Parish</th>
                                                <th>Bride Surname</th>
                                                <th>Kuri B</th>
                                                <th>Full Details</th>
                                            </tr>
                                            <?php
                                            $i = 0;
                                            $result = mysqli_query($con, "SELECT * FROM `tbl_marriage_kuri_a` WHERE `progress` between 75 and 100");
                                            while ($row = mysqli_fetch_array($result)) {
                                                $i = $i + 1;
                                            ?>
                                                <tr>
                                                    <td><?= $i ?></td>
                                                    <td><?= $row['GroomName'] ?></td>
                                                    <td><?= $row['GroomParish'] ?></td>
                                                    <td><?= $row['GroomSurname'] ?></td>
                                                    <td><?= $row['BrideName'] ?></td>
                                                    <td><?= $row['BrideParish'] ?></td>
                                                    <td><?= $row['BrideSurname'] ?></td>
                                                    <td><a href="../../assets/certificates/Marriage/<?= $row['marrKuriBFile'] ?>" target="_blank" style="text-decoration: none;">View</a></td>
                                                    <td><a href="ViewUserMarriageRegister.php?id=<?= $row['id'] ?>" style="text-decoration: none;">View</a></td>
                                                </tr>
                                            <?php } ?>
                                        </table>
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