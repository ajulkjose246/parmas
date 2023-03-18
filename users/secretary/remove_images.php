<?php
    $id = $_GET['id'];
    require("../../connection/db_connect.php");
    $sql="UPDATE `tbl_gallery` SET `img_status`=0 WHERE `img_id` = $id";
    mysqli_query($con,$sql);
    $url = "gallery.php";
    echo ("<script>location.href='$url'</script>");
    ?>