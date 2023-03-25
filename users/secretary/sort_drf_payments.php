<?php
error_reporting(E_ERROR | E_PARSE);
require("../../connection/db_connect.php");
$search = $_POST["year"];

$query = "SELECT * FROM `tbl_drf_payments` WHERE `onCreate` LIKE '%$search%'";
$result = mysqli_query($con, $query);
if ($result) {
?>
    <table style="width: 100%;border-collapse:separate;border-spacing:0 15px;">
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
        </tr>
        <?php
        $i = 0;
        while ($row = mysqli_fetch_array($result)) {
            $uid = $row['drf_user_id'];
            $result = mysqli_query($con, "SELECT * FROM `tbl_register` WHERE `usr_id` =$uid");
            $row1 = mysqli_fetch_array($result);
            $i = $i + 1;
        ?>
            <tr>
                <td><?= $i ?></td>
                <td><?= $row1['usr_fname'] ?><?= $row1['usr_sname'] ?></td>
                <td><?= $row['drf_amount'] ?></td>
                <td><?= $row['onCreate'] ?></td>
            </tr>
    <?php
        }
    }
    ?>
    </table>