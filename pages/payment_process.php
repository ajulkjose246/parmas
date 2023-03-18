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

if(isset($_POST['payment_id']) && isset($_SESSION['OID']) && isset($_POST['usr_id']) && isset($_POST['usr_email']) && isset($_POST['offer_msg']) && isset($_POST['name']) && isset($_POST['payDate'])){
    $pay_id=$_SESSION['OID'];
    $usr_id=$_POST['usr_id'];
    $usr_email=$_POST['usr_email'];
    $offer_msg=$_POST['offer_msg'];
    $offer_name=$_POST['name'];
    $payDate=$_POST['payDate'];
    $payment_id=$_POST['payment_id'];
    mysqli_query($con,"UPDATE `tbl_payment` SET `payment_status`='Success',`payment_id`='$payment_id' WHERE `id` =$pay_id");
    mysqli_query($con,"INSERT INTO `tbl_user_offering`(`usr_id`, `usr_email`, `usr_intentions`, `offer_date`,`offer_id`) VALUES ('$usr_id','$usr_email','$offer_msg','$payDate','$offer_name')");
}
?>