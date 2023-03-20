<?php
error_reporting(E_ERROR | E_PARSE);
require("../../connection/db_connect.php");
$search = $_POST["search"];
$query = "SELECT * FROM `tbl_death_relief_fund` WHERE `drf_name` LIKE '%$search%' OR `drf_houseName` LIKE '%$search%' OR `drf_ward` LIKE '%$search%' OR `drf_phone` LIKE '%$search%'";
$result = mysqli_query($con, $query);
if ($result) {
?>
    <table style="width: 100%;border-collapse:separate;border-spacing:0 15px;">
        <tr>
            <th>Name</th>
            <th>House Name</th>
            <th>DOB</th>
            <th>Ward</th>
            <th>Phone</th>
            <th>Print</th>
        </tr>
        <?php
        while ($row = mysqli_fetch_array($result)) {
            $id=$row['drf_id']?>
            <tr>
                <td><?= $row['drf_name'] ?></td>
                <td><?= $row['drf_houseName'] ?></td>
                <td><?= $row['drf_dob'] ?></td>
                <td><?= $row['drf_ward'] ?></td>
                <td><?= $row['drf_phone'] ?></td>
                <td><a href="drf_user_data_pdf.php?id=<?=$id?>" target="_blank" class="btn btn-primary"><i class="bi bi-printer"></i> Print</a></td>
            </tr>
    <?php
        }
    }
    ?>
    </table>