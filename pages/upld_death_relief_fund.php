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
                <h6 class="text-center">(Automatically reload the page)</h6>
            </div>
            <div class="modal-footer">
                <a href="/parmas/pages/death_relief_fund.php" id="clsBtn" class="btn btn-secondary" style="display: none;">Close</a>
            </div>
        </div>
    </div>
</div>

<?php
require("../connection/db_connect.php");
$fname = $_POST['fname'];
$hname = $_POST['hname'];
$dob = $_POST['dob'];
$wardUnit = $_POST['wardUnit'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$address = $_POST['address'];
$currentAddress = $_POST['currentAddress'];

// nominee details

$nomineeName = $_POST['nomineeName'];
$nomineeDob = $_POST['nomineeDob'];
$nomineeRelationshp = $_POST['nomineeRelationshp'];
$minor = $_POST['minor'];

$sql = "INSERT INTO `tbl_death_relief_fund`(`drf_name`, `drf_houseName`, `drf_dob`, `drf_ward`, `drf_phone`, `drf_gender`, `drf_address`, `drf_currentAddress`, `drf_nomineeName`, `drf_nomineeDob`, `drf_nomineeRelationshp`, `drf_minor`) 
        VALUES ('$fname','$hname','$dob','$wardUnit','$phone','$gender','$address','$currentAddress','$nomineeName','$nomineeDob','$nomineeRelationshp',' $minor')";
$result = mysqli_query($con, $sql);
$drf_id = mysqli_insert_id($con);

// Family members

$fam_name = $_POST['fam_name'];
$fam_dob = $_POST['fam_dob'];
$fam_relation = $_POST['fam_relation'];
$fam_remarks = $_POST['fam_remarks'];


for ($i = 0; $i < count($fam_name); $i++) {
    $name = $fam_name[$i];
    $dob = $fam_dob[$i];
    $gender = $_POST['fam_gender' . $i + 1];
    $relation = $fam_relation[$i];
    $remarks = $fam_remarks[$i];
    $sql = "INSERT INTO `tbl_drf_family_members`(`drf_id`, `drf_member_name`, `drf_member_dob`, `drf_member_gender`, `drf_member_fam_relation`, `drf_member_fam_remarks`) 
        VALUES ('$drf_id','$name','$dob','$gender','$relation','$remarks')";
    mysqli_query($con, $sql);
}

echo ("<script>document.getElementById('succesBtn').click()</script>");
echo ("<script>setTimeout(
    function() {
        document.getElementById('clsBtn').click();
    }, 5000);</script>");
?>