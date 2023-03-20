<?php
require('../../connection/db_connect.php');
$sql = "SELECT * FROM `tbl_death_relief_fund`";
$result = $con->query($sql);
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}
$i=0;
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
            <div class="dandt">Date :'.date("d/m/Y").'</div>
            <div class="dandt">Time :'.date("h:i:s A").'</div>
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
                                <th>House Name</th>
                                <th>Phone</th>
                                <th>Ward</th>
                                <th>DOB</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>';
                            foreach ($data as $row) {
                                $i=$i+1;
                                $html .= '<tr>
                                                <td>' . $i . '</td>
                                                <td>' . $row['drf_name'] . '</td>
                                                <td>' . $row['drf_houseName'] . '</td>
                                                <td>' . $row['drf_phone'] . '</td>
                                                <td>' . $row['drf_ward'] . '</td>
                                                <td>' . $row['drf_dob'] . '</td>
                                                <td>' . $row['drf_createdOn'] . '</td>
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