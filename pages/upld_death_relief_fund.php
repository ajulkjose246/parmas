<?php
require("../connection/db_connect.php");
if (isset($_POST['subBtn'])) {

    // user details

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

    // Family members

    $fam_name1 = $_POST['fam_name1'];
    $fam_dob1 = $_POST['fam_dob1'];
    $fam_gender1 = $_POST['fam_gender1'];
    $fam_relation1 = $_POST['fam_relation1'];
    $fam_remarks1 = $_POST['fam_remarks1'];

    $sql = "INSERT INTO `tbl_death_relief_fund`(`drf_name`, `drf_houseName`, `drf_dob`, `drf_ward`, `drf_phone`, `drf_gender`, `drf_address`, `drf_currentAddress`, `drf_nomineeName`, `drf_nomineeDob`, `drf_nomineeRelationshp`, `drf_minor`) 
        VALUES ('$fname','$hname','$dob','$wardUnit','$phone','$gender','$address','$currentAddress','$nomineeName','$nomineeDob','$nomineeRelationshp',' $minor')";
    $result = mysqli_query($con, $sql);

    $drf_id = mysqli_insert_id($con);

    $sql = "INSERT INTO `tbl_drf_family_members`(`drf_id`, `drf_member_name`, `drf_member_dob`, `drf_member_gender`, `drf_member_fam_relation`, `drf_member_fam_remarks`) 
        VALUES ('$drf_id','$fam_name1','$fam_dob1','$fam_gender1','$fam_relation1','$fam_remarks1')";
    mysqli_query($con, $sql);
    $death_relief_fam_members_count = $_COOKIE['death_relief_fam_members_count'];
    for ($i = 2; $i <= $death_relief_fam_members_count; $i++) {
        if ($_COOKIE['death_relief_fam_members' . $i] != 0) {
            unset($_COOKIE['death_relief_fam_members' . $i]);
            echo ("<script>document.cookie = 'death_relief_fam_members' + $i + '=0';</script>");
            echo ("<script>document.cookie = 'death_relief_fam_members_count=0';</script>");
            echo ("<script>fam_memb = 1;</script>");
            $fam_name = $_POST['fam_name' . $i];
            $fam_dob = $_POST['fam_dob' . $i];
            $fam_gender = $_POST['fam_gender' . $i];
            $fam_relation = $_POST['fam_relation' . $i];
            $fam_remarks = $_POST['fam_remarks' . $i];

            $sql = "INSERT INTO `tbl_drf_family_members`(`drf_id`, `drf_member_name`, `drf_member_dob`, `drf_member_gender`, `drf_member_fam_relation`, `drf_member_fam_remarks`) 
        VALUES ('$drf_id','$fam_name','$fam_dob','$fam_gender','$fam_relation','$fam_remarks')";
            mysqli_query($con, $sql);                // mysqli_query($con, $sql);

        }
    }
    echo ("<script>alert('Success')</script>");
    echo ("<script>location.href='/parmas/pages/death_relief_fund.php'</script>");
}
