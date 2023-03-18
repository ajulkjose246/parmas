<?php
session_start();

require("../../connection/db_connect.php");
$user = $_SESSION['user'];
$user_id = $user['usr_id'];
    $fam_id=$_GET['id'];
    $sql="DELETE FROM `tbl_family_members` WHERE `user_id` =$user_id AND `fam_id` =$fam_id";
    mysqli_query($con,$sql);
    $url = "edit_family_members.php";
        echo ("<script>location.href='$url'</script>");
        ?>
