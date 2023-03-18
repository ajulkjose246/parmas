<?php
if(isset($_POST['email'])){
	$uid=$_POST['uid'];
    $con = mysqli_connect("localhost", "root", "","db_parmas");
    $email = $_POST['email'];
    $query = "select * from tbl_login  where usr_email='$email' AND `usr_id` !=$uid";
    $result = mysqli_query($con,$query);
    $count = mysqli_num_rows($result);
    echo mysqli_num_rows($result);
}
?>