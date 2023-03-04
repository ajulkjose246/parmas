<?php
    $id = $_GET['id'];
    require("../../connection/db_connect.php");
    $sql="UPDATE `tbl_announcement` SET `status`='[value-4]' WHERE `id` = $id";
    mysqli_query($con,$sql);
    $url = "announcements.php";
    echo ("<script>location.href='$url'</script>");
    ?>