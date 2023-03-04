<?php
session_start();
require("../connection/db_connect.php");
if(isset($_POST['amt']) && isset($_POST['name']) && isset($_POST['usr_id'])){
    $amt=$_POST['amt'];
    $offer_name=$_POST['name'];
    $usr_id=$_POST['usr_id'];
    $payment_status="Success";
    $added_on=date('Y-m-d h:i:s');
    mysqli_query($con,"insert into tbl_payment(amount,payment_status,user_id,added_on,offer_type) values('$amt','$payment_status','$usr_id','$added_on','$offer_name')");
    $_SESSION['OID']=mysqli_insert_id($con);
}


if(isset($_POST['payment_id']) && isset($_SESSION['OID'])){
    $payment_id=$_POST['payment_id'];
    mysqli_query($con,"update payment set payment_status='complete',payment_id='$payment_id' where id='".$_SESSION['OID']."'");
}
?>