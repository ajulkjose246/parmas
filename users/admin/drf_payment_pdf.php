<?php
require('../../connection/db_connect.php');
$sql = "SELECT * FROM `tbl_drf_payments` ORDER BY `onCreate` DESC";
$result = $con->query($sql);
$i = 0;
$html = '<html>
    <head>
        <style>
            table {
                font-family: Arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
            }
            
            thead {
                background-color: #eee;
                text-align: left;
            }
            
            th, td {
                padding: 12px;
                text-align: left;
                border-bottom: 1px solid #ddd;
            }
            
            th {
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            tbody tr:nth-child(even) {
                background-color: #f2f2f2;
            }
            
            tbody tr:hover {
                background-color: #ddd;
            }
            .heading{
                text-align:center;
                font-family: Arial, Helvetica, sans-serif;
            }
            .dandt{
                text-align: right;
            }
        </style>
    </head>
    <body>
        <div class="container">
        <div class="row">
            <div class="dandt">Date :' . date("d/m/Y") . '</div>
            <div class="dandt">Time :' . date("h:i:s A") . '</div>
        </div>
        <h2 class="heading">Death Relief Fund User Details</h2>
        <h3 class="heading">St. George Church, Adakkakundu</h3>
            <div class="row">
                <div class="col">
                    <table class="table-responsive table-hover">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>';
                            while ($row = mysqli_fetch_array($result)) {
                                $i = $i + 1;
                                $uid = $row['drf_user_id'];
                                $result1 = mysqli_query($con, "SELECT * FROM `tbl_register` WHERE `usr_id` = $uid");
                                $row1 = mysqli_fetch_array($result1);
                                $html .= '<tr>
                                                <td>' . $i . '</td>
                                                // <td>' . $row1['usr_fname'] . '' . $row1['usr_sname'] . '</td>
                                                <td>' . $row['drf_amount'] . '</td>
                                                <td>' . $row['onCreate'] . '</td>
                                        </tr>';
                            }
                            $html .= '</tbody>
                    </table>
                </div>
            </div>
        </div>
    </body>
</html>';

require_once '../../dompdf/autoload.inc.php';

use Dompdf\Dompdf;

$dompdf = new Dompdf();

$dompdf->loadHtml($html);
$dompdf->setPaper('A3');
$dompdf->render();
$dompdf->stream('Death Relief Fund', array("Attachment" => 0));
