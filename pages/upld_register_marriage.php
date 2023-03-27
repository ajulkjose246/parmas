<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
<!-- Button trigger modal -->
<button type="button" style="display: none;" id="succesBtn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-body">
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_Yk0pxWYfo6.json" background="transparent" speed="1" style=" height: 200px;" loop autoplay></lottie-player>
                <h5 class="text-center">Registration Success</h5>
                <h5 class="text-center text-danger">! After validating the marriage registration, we will notify you.</h5>
                <h6 class="text-center">(Automatically redirect the page)</h6>
            </div>
            <div class="modal-footer">
                <a href="/parmas/pages/register_marriage_p2.php" id="clsBtn" class="btn btn-secondary" style="display: none;">Close</a>
            </div>
        </div>
    </div>
</div>

<?php
session_start();
require("../connection/db_connect.php");
$uid = $_SESSION['user']['usr_id'];

// Groom Details
if (isset($_POST['GroomDiocese']) && isset($_POST['BrideDiocese']) && isset($_POST['MarriageProposalDate'])) {

    $GroomDiocese = $_POST['GroomDiocese'];
    $GroomParish = $_POST['GroomParish'];
    $GroomSurname = $_POST['GroomSurname'];
    $GroomName = $_POST['GroomName'];
    $GroomFather = $_POST['GroomFather'];
    $GroomMother = $_POST['GroomMother'];
    $Groomdob = $_POST['Groomdob'];
    $GroomBaptismDate = $_POST['GroomBaptismDate'];
    $GroomRemark = $_POST['GroomRemark'];

    // Bride Details
    $BrideDiocese = $_POST['BrideDiocese'];
    $BrideParish = $_POST['BrideParish'];
    $BrideSurname = $_POST['BrideSurname'];
    $BrideName = $_POST['BrideName'];
    $BrideFather = $_POST['BrideFather'];
    $BrideMother = $_POST['BrideMother'];
    $Bridedob = $_POST['Bridedob'];
    $BrideBaptismDate = $_POST['BrideBaptismDate'];
    $BrideRemark = $_POST['BrideRemark'];


    $MarriageProposalDate = $_POST['MarriageProposalDate'];
    $adDate = $_POST['adDate'];
    $MarriageDate = $_POST['MarriageDate'];

    $sql = "INSERT INTO `tbl_marriage_kuri_a`(`usr_id`, `GroomDiocese`, `GroomParish`, `GroomSurname`, `GroomName`, `GroomFather`, `GroomMother`, `Groomdob`, `GroomBaptismDate`, `GroomRemark`, `BrideDiocese`, `BrideParish`, `BrideSurname`, `BrideName`, `BrideFather`, `BrideMother`, `Bridedob`, `BrideBaptismDate`, `BrideRemark`, `MarriageProposalDate`, `adDate`, `MarriageDate`,`progress`)
     VALUES ('$uid','$GroomDiocese','$GroomParish','$GroomSurname','$GroomName','$GroomFather','$GroomMother','$Groomdob','$GroomBaptismDate','$GroomRemark','$BrideDiocese','$BrideParish','$BrideSurname','$BrideName','$BrideFather','$BrideMother','$Bridedob','$BrideBaptismDate','$BrideRemark','$MarriageProposalDate','$adDate','$MarriageDate',25)";
    $result = mysqli_query($con, $sql);
    if ($result) {
        echo ("<script>document.getElementById('succesBtn').click()</script>");
        echo ("<script>setTimeout(
            function() {
                document.getElementById('clsBtn').click();
            }, 4000);</script>");
    }
}
?>