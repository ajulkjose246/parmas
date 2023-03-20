<?php
require('../../connection/db_connect.php');
$query = 'SELECT * FROM `tbl_death_relief_fund`';
$result = mysqli_query($con, $query);
if ($result) {
?>
    <table style='width: 100%;border-collapse:separate;border-spacing:0 15px;'>
        <tr>
            <th>Name</th>
            <th>House Name</th>
            <th>DOB</th>
            <th>Ward</th>
            <th>Phone</th>
        </tr>
        <?php
        while ($row = mysqli_fetch_array($result)) {?>
            <tr>
                <td><?= $row['drf_name'] ?></td>
                <td><?= $row['drf_houseName'] ?></td>
                <td><?= $row['drf_dob'] ?></td>
                <td><?= $row['drf_ward'] ?></td>
                <td><?= $row['drf_phone'] ?></td>
            </tr>
    <?php
        }
    }
    ?>
    </table>