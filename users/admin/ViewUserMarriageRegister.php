<!DOCTYPE html>
<html lang="en">
<?php
session_start();
require("../../connection/db_connect.php");
$previousUrl = $_SESSION['location'];
$usr_status = $_SESSION['user']['usr_status'];
$mRid = $_GET['id'];
if ($usr_status == 1) {
    $result = mysqli_query($con, "SELECT * FROM `tbl_marriage_kuri_a` WHERE `id` =$mRid");
    $row = mysqli_fetch_array($result);
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
                            <h1 class="h3 mb-0 text-gray-800  fw-bolder">Marriage Registration</h1>

                        </div>
                        <div class="row">
                            <div class="col-lg-12 mb-4">
                                <div class="card shadow mb-4">
                                    <div class="card-header py-3">
                                        <div class="row">
                                            <div class="col-10">
                                                <h6 class="m-0 font-weight-bold text-primary">View Details of ' <?= $row['GroomName'] ?> & <?= $row['BrideName'] ?> '</h6>
                                            </div>
                                            <div class="col-2">
                                                <a href="<?= $previousUrl ?>" class="btn btn-primary"> Back</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <table style="width: 100%;border-collapse:separate;border-spacing:0 15px;">
                                            <tr>
                                                <th>Groom Diocese </th>
                                                <td> : <?= $row['GroomDiocese'] ?></td>
                                                <th>Bride Diocese </th>
                                                <td> : <?= $row['BrideDiocese'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Groom Parish </th>
                                                <td> : <?= $row['GroomParish'] ?></td>
                                                <th>Bride Parish </th>
                                                <td> : <?= $row['BrideParish'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Groom Surname </th>
                                                <td> : <?= $row['GroomSurname'] ?></td>
                                                <th>Bride Surname </th>
                                                <td> : <?= $row['BrideSurname'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Groom Name </th>
                                                <td> : <?= $row['GroomName'] ?></td>
                                                <th>Bride Name </th>
                                                <td> : <?= $row['BrideName'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Groom Father </th>
                                                <td> : <?= $row['GroomFather'] ?></td>
                                                <th>Bride Father </th>
                                                <td> : <?= $row['BrideFather'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Groom Mother </th>
                                                <td> : <?= $row['GroomMother'] ?></td>
                                                <th>Bride Mother </th>
                                                <td> : <?= $row['BrideMother'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Groom DOB </th>
                                                <td> : <?= $row['Groomdob'] ?></td>
                                                <th>Bride DOB </th>
                                                <td> : <?= $row['Bridedob'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Groom Baptism Date </th>
                                                <td> : <?= $row['GroomBaptismDate'] ?></td>
                                                <th>Bride Baptism Date </th>
                                                <td> : <?= $row['BrideBaptismDate'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Groom Remark</th>
                                                <td> : <?= $row['GroomRemark'] ?></td>
                                                <th>Bride Baptism Remark </th>
                                                <td> : <?= $row['BrideRemark'] ?></td>
                                            </tr>
                                            <tr class="text-center">
                                                <th colspan="2">Marriage Proposal Date </th>
                                                <td> : <?= $row['MarriageProposalDate'] ?></td>
                                            </tr>
                                            <tr class="text-center">
                                                <th colspan="2">The dates specified for the ad</th>
                                                <td> : <?= $row['adDate'] ?></td>
                                            </tr>
                                            <tr class="text-center">
                                                <th colspan="2">The date of marriage</th>
                                                <td> : <?= $row['MarriageDate'] ?></td>
                                            </tr>
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