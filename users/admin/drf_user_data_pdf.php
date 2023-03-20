<?php
require('../../connection/db_connect.php');
$uid = $_GET['id'];
$sql = "SELECT * FROM `tbl_death_relief_fund` WHERE `drf_id` =$uid ";
$result = $con->query($sql);
$row=mysqli_fetch_array($result);
$sql = "SELECT * FROM `tbl_drf_family_members` WHERE `drf_id` = $uid ";
$result = $con->query($sql);
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
            .center{
                text-align: center;
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
                                <th>Name</th>
                                <td>'.$row['drf_name'].'</td>
                            </tr>
                            <tr>
                                <th>House Name</th>
                                <td>'.$row['drf_houseName'].'</td>
                            </tr>
                            <tr>
                                <th>DOB</th>
                                <td>'.$row['drf_dob'].'</td>
                            </tr>
                            <tr>
                                <th>Ward</th>
                                <td>'.$row['drf_ward'].'</td>
                            </tr>
                            <tr>
                                <th>Phone Number</th>
                                <td>'.$row['drf_phone'].'</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>'.$row['drf_gender'].'</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>'.$row['drf_address'].'</td>
                            </tr>
                            <tr>
                                <th>Current Address</th>
                                <td>'.$row['drf_currentAddress'].'</td>
                            </tr>
                            <tr>
                                <th>Nominee Name</th>
                                <td>'.$row['drf_nomineeName'].'</td>
                            </tr>
                            <tr>
                                <th>Nominee DOB</th>
                                <td>'.$row['drf_nomineeDob'].'</td>
                            </tr>
                            <tr>
                                <th>Nominee Relationship</th>
                                <td>'.$row['drf_nomineeRelationshp'].'</td>
                            </tr>
                            <tr>
                                <th>Date</th>
                                <td>'.$row['drf_createdOn'].'</td>
                            </tr>';
                            while($row1=mysqli_fetch_array($result)){
                                $i=$i+1;
                                $html .= ' <tr>
                                                <th colspan="2" class="center">Family Member - '.$i.'</th>
                                            </tr>
                                        <tr>
                                            <th>Name</th>
                                            <td>' . $row1['drf_member_name'] . '</td>
                                        </tr>
                                        <tr>
                                            <th>DOB</th>
                                            <td>' . $row1['drf_member_dob'] . '</td>
                                        </tr>
                                        <tr>
                                            <th>Gender</th>
                                            <td>' . $row1['drf_member_gender'] . '</td>
                                        </tr>
                                        <tr>
                                            <th>Relation</th>
                                            <td>' . $row1['drf_member_fam_relation'] . '</td>
                                        </tr>
                                        <tr>
                                            <th>Remarks</th>
                                            <td>' . $row1['drf_member_fam_remarks'] . '</td>
                                        </tr>';
                            }
                            
                            $html .= '</thead>
                        <tbody>
            </tbody>
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