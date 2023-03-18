<?php
error_reporting(E_ERROR | E_PARSE);
require("../../connection/db_connect.php");
$search = $_POST["year"];
if ($search == null) {
    $search = '2023';
}
$query = "SELECT * FROM `tbl_administration` WHERE `usr_date` LIKE '%$search%'";
$result = mysqli_query($con, $query);
if ($result) {
?>
    <table style="width: 100%;border-collapse:separate;border-spacing:0 15px;">
        <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Date</th>
        </tr>
        <?php
        while ($row = mysqli_fetch_array($result)) { ?>
            <tr>
                <td><?= $row['usr_name'] ?></td>
                <?php
                if ($row['usr_position'] == 1) { ?>
                    <td>Vicar</td>
                <?php } elseif ($row['usr_position'] == 2) { ?>
                    <td>Assistant Vicar</td>
                <?php } elseif ($row['usr_position'] == 3) { ?>
                    <td>Chairman</td>
                <?php } elseif ($row['usr_position'] == 4) { ?>
                    <td>Secretary</td>
                <?php } elseif ($row['usr_position'] == 5) { ?>
                    <td>Vice Chairman</td>
                <?php } elseif ($row['usr_position'] == 6) { ?>
                    <td>Joint Secretary</td>
                <?php } elseif ($row['usr_position'] == 7) { ?>
                    <td>Treasearer</td>
                <?php } ?>
                <td><?= $row['usr_date'] ?></td>
            </tr>
    <?php
        }
    }
    ?>
    </table>