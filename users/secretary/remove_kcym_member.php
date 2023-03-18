<?php
    $id = $_GET['id'];
    $pos_id = $_GET['pos_id'];
    require("../../connection/db_connect.php");
    $sql="UPDATE `tbl_kcym` SET`usr_status`=0 WHERE `id` = $id";
    mysqli_query($con,$sql);
    $sql="UPDATE `tbl_kcym_position` SET `pos_status`=0 WHERE `pos_id` = $pos_id ";
    mysqli_query($con,$sql);
    $url = "kcym.php";
    echo ("<script>location.href='$url'</script>");
    ?>