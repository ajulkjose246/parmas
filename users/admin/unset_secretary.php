<?php
    $id = $_GET['id'];
    require("../../connection/db_connect.php");
    $sql="UPDATE `tbl_login` SET`usr_status`=3 WHERE `usr_id` = $id";
    mysqli_query($con,$sql);
    $sql="UPDATE `tbl_administration` SET`usr_status`= 1 WHERE `usr_position` = 2 AND `usr_status` = 0";
    mysqli_query($con,$sql);
    $sql="UPDATE `tbl_administration_position` SET `pos_status`='0' WHERE `pos_id`=2";
    mysqli_query($con,$sql);
    $url = "administration.php";
    echo ("<script>location.href='$url'</script>");
    ?>