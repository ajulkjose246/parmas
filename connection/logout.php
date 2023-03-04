<?php
session_start();
session_destroy();
unset($_SESSION['usr_id']);
$url = "/parmas/index.php";
echo ("<script>location.href='$url'</script>");
?>