<?php
session_start();
require("../../connection/db_connect.php");
if(isset($_POST['amt']) && isset($_POST['usr_id'])){
    $amt=$_POST['amt'];
    $usr_id=$_POST['usr_id'];
    $payment_status="Pending";
    $added_on=date("j-n-Y");
    mysqli_query($con,"INSERT INTO `tbl_payment`(`amount`, `payment_status`, `payment_date`, `user_id`) 
    VALUES ('$amt','$payment_status','$added_on','$usr_id')");
    $_SESSION['OID']=mysqli_insert_id($con);
}

if(isset($_POST['payment_id']) && isset($_SESSION['OID']) && isset($_POST['usr_id']) && isset($_POST['amt'])){
    $pay_id=$_SESSION['OID'];
    $usr_id=$_POST['usr_id'];
    $payDate=date("j-n-Y");
    $amt=$_POST['amt'];
    $payment_id=$_POST['payment_id'];
    mysqli_query($con,"UPDATE `tbl_payment` SET `payment_status`='Success',`payment_id`='$payment_id' WHERE `id` =$pay_id");
    mysqli_query($con,"INSERT INTO `tbl_drf_payments`(`drf_user_id`, `drf_amount`) VALUES ('$usr_id','$amt')");
}
?>