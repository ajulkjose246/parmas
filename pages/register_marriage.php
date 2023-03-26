<!DOCTYPE html>
<html lang="en">
<?php
session_start();
error_reporting(E_ERROR | E_PARSE);
require("../connection/db_connect.php");
$uid = $_SESSION['user']['usr_id'];

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
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/parmas/index.php">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Register Marriage</li>
                                </ol>
                            </nav>
                            <h3 class="text-center mb-4" style="font-weight: 1000;">താമരശ്ശേരി രൂപത</h3>
                            <h6 class="text-center mb-4" style="font-weight: 600;">സെന്റ് ജോർജ് ചർച്ച്, അടക്കക്കുണ്ട് </h6>
                            <h5 class="text-center mb-4" style="font-weight: 600;">വിവാഹപരസ്യക്കുറി</h5>
                            <hr>
                            <form class="form-card akjFval" method="POST" action="upld_register_marriage.php">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <h4 class="text-center fw-bolder">വരൻ</h4>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">രൂപത</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Details" name="GroomDiocese" id="GroomDiocese" required></input>

                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">ഇടവക</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Details" name="GroomParish" id="GroomParish" required>
                                        </div>

                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">വീട്ടുപേര്</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Surname" name="GroomSurname" id="GroomSurname" required>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">പേര്</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Name" name="GroomName" id="GroomName" required>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">പിതാവ്</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Name" name="GroomFather" id="GroomFather" required>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">മാതാവ്</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Name" name="GroomMother" id="GroomMother" required>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">ജനന തീയതി</label>
                                            <input type="date" class="form-control " name="Groomdob" id="Groomdob">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">മാമ്മോദീസ തീയതി</label>
                                            <input type="date" class="form-control " name="GroomBaptismDate" id="GroomBaptismDate">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">റിമാർക്ക്</label>
                                            <textarea class="form-control akjval" RegExp="^[a-zA-Z 0-9,]+$" ErrMsg="Enter a Valid Details" name="GroomRemark" id="GroomRemark" rows="2" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <h4 class="text-center fw-bolder">വധു</h4>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">രൂപത</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Details" name="BrideDiocese" id="BrideDiocese" required></input>

                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">ഇടവക</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Details" name="BrideParish" id="BrideParish" required>
                                        </div>

                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">വീട്ടുപേര്</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Surname" name="BrideSurname" id="BrideSurname" required>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">പേര്</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Name" name="BrideName" id="BrideName" required>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">പിതാവ്</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Name" name="BrideFather" id="BrideFather" required>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">മാതാവ്</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Name" name="BrideMother" id="BrideMother" required>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">ജനന തീയതി</label>
                                            <input type="date" class="form-control " name="Bridedob" id="Bridedob">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">മാമ്മോദീസ തീയതി</label>
                                            <input type="date" class="form-control " name="BrideBaptismDate" id="BrideBaptismDate">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">റിമാർക്ക്</label>
                                            <textarea class="form-control akjval" RegExp="^[a-zA-Z 0-9,]+$" ErrMsg="Enter a Valid Details" name="BrideRemark" id="BrideRemark" rows="2" required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">വിവാഹവാഗ്‌ദാനം നടത്തിയ തീയതി</label>
                                            <input type="date" class="form-control" name="MarriageProposalDate" id="MarriageProposalDate" required>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">പരസ്യത്തിന് നിർദ്ദേശിച്ചിരിക്കുന്ന തീയതികൾ </label>
                                            <input type="date" class="form-control" name="adDate" id="adDate" required>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">വിവാഹം നടത്തുവാൻ ഉദ്ദേശിക്കുന്ന തീയതി</label>
                                            <input type="date" class="form-control" name="MarriageDate" id="MarriageDate" required>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-12 text-center mt-3">
                                        <input type="submit" name="subBtn" id="subBtn" class="btn btn-primary">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <?php
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