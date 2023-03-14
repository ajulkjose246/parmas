<?php
error_reporting(E_ERROR | E_PARSE);
require("../../connection/db_connect.php");
$search = $_POST["year"];
if ($search == "") {
    $search = '16-3-2023';
}
$query = "SELECT * FROM `tbl_user_offering` WHERE `offer_date` = '$search'";
$result = mysqli_query($con, $query);
if ($result) {
?>
    <table style="width: 100%;border-collapse:separate;border-spacing:0 15px;">
        <tr>
            <th>Date</th>
            <th>Offer Type</th>
            <th>Name</th>
            <th>Email</th>
            <th>Intentions</th>
        </tr>
        <?php
        while ($row = mysqli_fetch_array($result)) {
            $usr_id=$row['usr_id'];
            $offer=$row['offer_id'];
            
            $query = "SELECT `usr_fname`,`usr_sname` FROM `tbl_register` WHERE `usr_id` ='$usr_id'";
            $result = mysqli_query($con, $query);
            $user=mysqli_fetch_array($result);

            $query = "SELECT `offer_name` FROM `tbl_offering` WHERE `offer_id` ='$offer'";
            $result = mysqli_query($con, $query);
            $offer=mysqli_fetch_array($result);
        ?>
            <tr>
                <td><?= $row['offer_date'] ?></td>
                <td><?= $offer['offer_name'] ?></td>
                <td><?= $user['usr_fname'] ?><?= $user['usr_sname'] ?></td>
                <td><?= $row['usr_email'] ?></td>
                <td><?= $row['usr_intentions'] ?></td>
            </tr>
    <?php
        }
    }
    ?>
    </table>