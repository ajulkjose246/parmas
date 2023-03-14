<?php
session_start();
require("../connection/db_connect.php");
if(isset($_POST['amt']) && isset($_POST['name']) && isset($_POST['usr_id']) && isset($_POST['payDate'])){
    $amt=$_POST['amt'];
    $offer_name=$_POST['name'];
    $usr_id=$_POST['usr_id'];
    $payment_status="Pending";
    $added_on=$_POST['payDate'];
    mysqli_query($con,"INSERT INTO `tbl_payment`(`amount`, `payment_status`, `payment_date`, `user_id`, `offer_type`) VALUES ('$amt','$payment_status','$added_on','$usr_id','$offer_name')");
    $_SESSION['OID']=mysqli_insert_id($con);
}

if(isset($_POST['payment_id']) && isset($_SESSION['OID'])){
    $pay_id=$_SESSION['OID'];
    $payment_id=$_POST['payment_id'];
    mysqli_query($con,"UPDATE `tbl_payment` SET `payment_status`='Success',`payment_id`='$payment_id' WHERE `id` =$pay_id");
}
?>