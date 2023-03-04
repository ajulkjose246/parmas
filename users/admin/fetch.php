<?php
error_reporting(E_ERROR | E_PARSE);
require("../../connection/db_connect.php");
$output = '';
if (isset($_POST["query"])) {
	$search = $_POST["query"];
	$query = "
	SELECT tbl_login.usr_email,tbl_login.usr_id, tbl_login.usr_password, tbl_login.usr_status,tbl_register.usr_fname,tbl_register.usr_sname,tbl_register.usr_phone,tbl_register.usr_bapName,tbl_register.usr_ward,tbl_register.usr_profile,tbl_register.usr_houseName FROM `tbl_login` JOIN `tbl_register` ON tbl_login.usr_id = tbl_register.usr_id AND tbl_login.usr_status!=1
	WHERE usr_fname LIKE '%" . $search . "%'
	OR usr_sname LIKE '%" . $search . "%' 
	OR tbl_login.usr_email LIKE '%" . $search . "%' 
	OR usr_houseName LIKE '%" . $search . "%' 
	OR usr_bapName LIKE '%" . $search . "%' 
	OR usr_ward LIKE '%" . $search . "%'";
	$result = mysqli_query($con, $query);
}
if ($result) {
	?>
	<table style="width: 100%;border-collapse:separate;border-spacing:0 15px;">
		<tr>
			<th>First Name</th>
			<th>Second Name</th>
			<th>E-mail</th>
			<th>Action</th>
		</tr>
		<?php
		while ($row = mysqli_fetch_array($result)) { ?>
			<tr>
				<td><?= $row['usr_fname'] ?></td>
				<td><?= $row['usr_sname'] ?></td>
				<td><?= $row['usr_email'] ?></td>
				<?php if($row['usr_status']==3){?>
					<td><a href="set_secretary.php?id=<?=$row['usr_id']?>&name=<?=$row['usr_fname']?>&profile=<?=$row['usr_profile']?>" class="btn btn-primary">Set</a></td>
				<?php }else{?>
					<td><a href="unset_secretary.php?id=<?=$row['usr_id']?>" class="btn btn-primary">Unset</a></td>
				<?php } ?>
			</tr>
		<?php
		}
}
?>
</table>
