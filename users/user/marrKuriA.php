
<?php
require('../../connection/db_connect.php');
$sql = "SELECT * FROM `tbl_marriage_kuri_a` WHERE `usr_id` = 26";
$result = $con->query($sql);
$row=mysqli_fetch_array($result);
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
        .center{
            text-align: center;
        }
        </style>
    </head>
    <body>
        <div class="container">
        <div class="row">
            <div class="dandt">Date :' . date("d/m/Y") . '</div>
            <div class="dandt">Time :' . date("h:i:s A") . '</div>
        </div>
        <h2 class="heading">Marriage Register</h2>
        <h3 class="heading">St. George Church, Adakkakundu</h3>
            <div class="row">
                <div class="col">
                    <table class="table-responsive table-hover">
                        <thead>
                            <tr>
                                <th>Groom Diocese</th>
                                <td> : '.$row['GroomDiocese'].'</td>
                                <th>Bride Diocese </th>
                                <td> : '.$row['BrideDiocese'].'</td>
                            </tr>
                            <tr>
                                <th>Groom Parish</th>
                                <td> : '.$row['GroomParish'].'</td>
                                <th>Bride Parish </th>
                                <td> : '.$row['BrideParish'].'</td>
                            </tr>
                            <tr>
                                <th>Groom Surname</th>
                                <td> : '.$row['GroomSurname'].'</td>
                                <th>Bride Surname </th>
                                <td> : '.$row['BrideSurname'].'</td>
                            </tr>
                            <tr>
                                <th>Groom Name</th>
                                <td> : '.$row['GroomName'].'</td>
                                <th>Bride Name </th>
                                <td> : '.$row['BrideName'].'</td>
                            </tr>
                            <tr>
                                <th>Groom Father</th>
                                <td> : '.$row['GroomFather'].'</td>
                                <th>Bride Father </th>
                                <td> : '.$row['BrideFather'].'</td>
                            </tr>
                            <tr>
                                <th>Groom Mother</th>
                                <td> : '.$row['GroomMother'].'</td>
                                <th>Bride Mother </th>
                                <td> : '.$row['BrideMother'].'</td>
                            </tr>
                            <tr>
                                <th>Groom DOB</th>
                                <td> : '.$row['Groomdob'].'</td>
                                <th>Bride DOB </th>
                                <td> : '.$row['Bridedob'].'</td>
                            </tr>
                            <tr>
                                <th>Groom BaptismDate</th>
                                <td> : '.$row['GroomBaptismDate'].'</td>
                                <th>Bride BaptismDate </th>
                                <td> : '.$row['BrideBaptismDate'].'</td>
                            </tr>
                            <tr>
                                <th>Groom Remark</th>
                                <td> : '.$row['GroomRemark'].'</td>
                                <th>Bride Remark</th>
                                <td> : '.$row['BrideRemark'].'</td>
                            </tr>
                            <tr class="text-center">
                                <th colspan="3">Marriage Proposal Date </th>
                                <td> : '.$row['MarriageProposalDate'].'</td>
                            </tr>
                            <tr class="text-center">
                                <th colspan="3">The dates specified for the ad</th>
                                <td> : '.$row['adDate'].'</td>
                            </tr>
                            <tr class="text-center">
                                <th colspan="3">The date of marriage</th>
                                <td> : '.$row['MarriageDate'].'</td>
                            </tr>
                        </thead>
                        <tbody>';
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
?>

