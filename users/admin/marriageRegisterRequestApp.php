<?php
error_reporting(E_ERROR | E_PARSE);
require("../../connection/db_connect.php");
$id = $_POST["id"];
$result=mysqli_query($con,"UPDATE `tbl_marriage_kuri_a` SET `progress`='35' WHERE `id` =$id");

?>