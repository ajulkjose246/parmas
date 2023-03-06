<?php
error_reporting(E_ERROR | E_PARSE);
require("../../connection/db_connect.php");
$search = $_POST["year"];
if ($search == null) {
    $search = '2023';
}
$query = "SELECT * FROM `tbl_kcym` WHERE `usr_date` LIKE '%$search%'";
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
                    <td>President</td>
                <?php } elseif ($row['usr_position'] == 2) { ?>
                    <td>Vice president</td>
                <?php } elseif ($row['usr_position'] == 3) { ?>
                    <td>Secretary</td>
                <?php } elseif ($row['usr_position'] == 4) { ?>
                    <td>Joint secretary</td>
                <?php } elseif ($row['usr_position'] == 5) { ?>
                    <td>Treasurer</td>
                <?php } elseif ($row['usr_position'] == 6) { ?>
                    <td>Executive 1</td>
                <?php } elseif ($row['usr_position'] == 7) { ?>
                    <td>Executive 2</td>
                <?php } elseif ($row['usr_position'] == 8) { ?>
                    <td>Executive 3</td>
                <?php } else { ?>
                    <td>Executive 4</td>
                <?php } ?>
                <td><?= $row['usr_date'] ?></td>
            </tr>
    <?php
        }
    }
    ?>
    </table>