<?php
$id = $_GET['id'];
$name = $_GET['name'];
$profile = $_GET['profile'];
$date = date("Y-m-d");
require("../../connection/db_connect.php");
$sql = "SELECT * FROM `tbl_administration_position` WHERE `pos_id`=2";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result);
if ($row['pos_status'] == 0) {
    $sql = "UPDATE `tbl_login` SET`usr_status`=2 WHERE `usr_id` = $id";
    mysqli_query($con, $sql);
    $sql = "INSERT INTO `tbl_administration`(`usr_name`, `usr_position`, `usr_date`, `usr_profile`) VALUES ('$name',2,'$date','$profile')";
    mysqli_query($con, $sql);
    $sql = "UPDATE `tbl_administration_position` SET `pos_status`='1' WHERE `pos_id`=2";
    mysqli_query($con, $sql);
    $url = "administration.php";
    echo ("<script>location.href='$url'</script>");
} else {
    echo ("<script>alert('Already Selected')</script>");
    $url = "administration.php";
    echo ("<script>location.href='$url'</script>");
}
?>