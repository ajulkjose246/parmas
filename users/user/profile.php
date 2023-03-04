<!DOCTYPE html>
<html lang="en">
<?php
session_start();
// error_reporting(E_ERROR | E_PARSE);

require("../../connection/db_connect.php");
$user = $_SESSION['user'];
?>

<head>
    <meta charset="utf-8">
    <title>PARMAS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/bootstrap.min.css">
    <link rel="stylesheet" href="/parmas/assets/css/cdn/fontawesome.css">
    <link rel="stylesheet" href="/parmas/assets/css/profile.css">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="my-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/parmas/index.php">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">My Profile</li>
                        </ol>
                    </nav>
                    <hr>
                </div>
                <form class="file-upload">
                <div class="row mb-5 gx-5">
                        <div class="col-xxl-4">
                            <div class="bg-secondary-soft px-4 py-5 rounded">
                                <div class="row g-3">
                                    <div class="text-center">
                                        <div class="square position-relative display-2 mb-3">
                                            <img src="/parmas/assets/img/profile/<?= $user['usr_profile'] ?>">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-8 mb-5 mb-xxl-0">
                            <div class="bg-secondary-soft px-4 py-5 rounded">
                                <div class="row g-3">
                                    <h4 class="mb-4 mt-0">Contact detail</h4>
                                    <div class="col-md-6">
                                        <label class="form-label">First Name</label>
                                        <input type="text" class="form-control" placeholder="" aria-label="First name"
                                            value="<?= $user['usr_fname'] ?>" disabled>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" class="form-control" placeholder="" aria-label="Last name"
                                            value="<?= $user['usr_sname'] ?>" disabled>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Phone number</label>
                                        <input type="text" class="form-control" placeholder="" aria-label="Phone number"
                                            value="<?= $user['usr_phone'] ?>" disabled>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Email</label>
                                        <input type="text" class="form-control" placeholder="" aria-label="Phone number"
                                            value="<?= $user['usr_email'] ?>" disabled>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">House Name</label>
                                        <input type="email" class="form-control" id="inputEmail4"
                                            value="<?= $user['usr_houseName'] ?>" disabled>
                                    </div>
                                    <?php if ($user['usr_bapName'] != null) { ?>
                                        <div class="col-md-6">
                                            <label for="inputEmail4" class="form-label">Baptism Name</label>
                                            <input type="text" name="usr_bapName" class="form-control"
                                                value="<?= $user['usr_bapName'] ?>" disabled>
                                        </div>
                                    <?php } ?>
                                    <?php if ($user['usr_ward'] != null) { ?>
                                        <div class="col-md-6">
                                            <label for="inputEmail4" class="form-label">Family Unit</label>
                                            <?php if ($user['usr_ward'] == 1) { ?>
                                                <input type="text" name="usr_ward" class="form-control"
                                                    value="St Xavier Family Unit" disabled>
                                            <?php } else if ($user['usr_ward'] == 2) { ?>
                                                    <input type="text" name="usr_ward" class="form-control"
                                                        value="St Vincent Family Unit" disabled>
                                            <?php } else if ($user['usr_ward'] == 3) { ?>
                                                        <input type="text" name="usr_ward" class="form-control"
                                                            value="St Pius Family Unit" disabled>
                                            <?php } else if ($user['usr_ward'] == 4) { ?>
                                                            <input type="text" name="usr_ward" class="form-control"
                                                                value="St Sebastian Family Unit" disabled>
                                            <?php } else if ($user['usr_ward'] == 5) { ?>
                                                                <input type="text" name="usr_ward" class="form-control"
                                                                    value="St Paul Family Unit" disabled>
                                            <?php } else if ($user['usr_ward'] == 6) { ?>
                                                                    <input type="text" name="usr_ward" class="form-control"
                                                                        value="St Thomas Family Unit" disabled>
                                            <?php } else if ($user['usr_ward'] == 7) { ?>
                                                                        <input type="text" name="usr_ward" class="form-control"
                                                                            value="Mother Teresa Family Unit" disabled>
                                            <?php } else if ($user['usr_ward'] == 8) { ?>
                                                                            <input type="text" name="usr_ward" class="form-control"
                                                                                value="St Teresa Family Unit" disabled>
                                            <?php } ?>
                                        </div>
                                    <?php } ?>
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label text-light">w</label>
                                        <a href="/parmas/users/user/edit_profile.php"
                                            class="form-control btn btn-primary">Update Your
                                            Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

</html>