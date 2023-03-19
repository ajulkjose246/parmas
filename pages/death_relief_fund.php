<!DOCTYPE html>
<html lang="en">
<?php
$fam_members_count = $_COOKIE['death_relief_fam_members_count'];
for ($i = 2; $i <= $fam_members_count; $i++) {
    echo ("<script>document.cookie = 'death_relief_fam_members' + $i + '=0';</script>");
    echo ("<script>document.cookie = 'death_relief_fam_members_count=0';</script>");
    echo ("<script>fam_memb = 1;</script>");
}
?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="/parmas/assets/css/death_relief_fund.css">
</head>

<body>
    <section>
        <div class="container-fluid mx-auto">
            <div class="row d-flex justify-content-center">
                <div class="col-11 ">
                    <div class="card">
                        <h3 class="text-center mb-4" style="font-weight: 1000;">ചെറുപുഷ്‌പ മരണസഹായ നിധി</h3>
                        <h5 class="text-center mb-4" style="font-weight: 600;">ലിറ്റിൽ ഫ്ളവർ ചർച്ച്, കടുവാക്കുളം</h5>
                        <hr>
                        <form class="form-card akjFval" method="POST" action="upld_death_relief_fund.php">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">കുടുംബനാഥന്റെ ഔദ്യോഗിക പേര് </label>
                                        <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid name" name="fname" id="fname" ></input>

                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">വീട്ടുപേര്</label>
                                        <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid House Name" name="hname" id="hname" >
                                    </div>
                                    
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">ജനന തീയതി</label>
                                        <input type="date" class="form-control " name="dob" id="dob" >
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">കുടുംബകൂട്ടായ്മ വാർഡ്</label>
                                        <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Ward Name" name="wardUnit" id="wardUnit" >
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">ഫോൺ നമ്പർ</label>
                                        <input type="text" class="form-control akjval" RegExp="^[6-9]\d{9}$" ErrMsg="Enter a Valid Phone Number" name="phone" id="phone" >
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label mb-3">ലിംഗഭേദം</label><br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="option1" checked >
                                            <label class="form-check-label" for="inlineRadio1">പുരുഷൻ</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="option2">
                                            <label class="form-check-label" for="inlineRadio2">സ്‌ത്രീ</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">ഇപ്പോഴത്തെ വിലാസം</label>
                                        <textarea class="form-control akjval" RegExp="^[a-zA-Z 0-9,]+$" ErrMsg="Enter a Valid Address" name="address" id="address" rows="2" ></textarea>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">സ്ഥിരമായ വിലാസം</label>
                                        <textarea class="form-control akjval" RegExp="^[a-zA-Z 0-9,]+$" ErrMsg="Enter a Valid Address" name="currentAddress" id="currentAddress" rows="2" ></textarea>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">നോമിനിയുടെ പേര്</label>
                                        <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid name" name="nomineeName" id="nomineeName" >
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">ജനന തീയതി</label>
                                        <input type="date" class="form-control" name="nomineeDob" id="nomineeDob" >
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">കുടുംബനാഥനുമായുള്ള ബന്ധം</label>
                                        <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid Relatoinship" name="nomineeRelationshp" id="nomineeRelationshp" >
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">മൈനർ ആണെങ്കിൽ ബന്ധപ്പെടേണ്ട അടുത്ത വ്യക്തി</label>
                                        <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg="Enter a Valid name" name="minor" id="minor" >
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div id="family_memb">
                                <div class="row">
                                    <div class="col-10 col-md-11 col-lg-11">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label"> മറ്റു കുടുംബാംഗങ്ങൾ </label>
                                        </div>
                                    </div>
                                    <div class="col-2 col-md-1 col-lg-1">
                                        <div class="mb-3 ">
                                            <a class='btn btn-success' id="add_member"><i class="bi bi-plus-circle"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">ഔദ്യോഗിക പേര്</label>
                                            <input type="text" class="form-control akjval" RegExp="^[a-zA-Z ]+$" ErrMsg='Enter a Valid Name' name="fam_name1" id="fam_name1">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">ജനന തീയതി</label>
                                            <input type="date" class="form-control" name="fam_dob1" id="fam_dob1">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label mb-3">ലിംഗഭേദം</label><br>

                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="fam_gender1" id="inlineRadio1" value="option1" checked>
                                                <label class="form-check-label" for="inlineRadio1">പുരുഷൻ</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="fam_gender1" id="inlineRadio2" value="option2">
                                                <label class="form-check-label" for="inlineRadio2">സ്‌ത്രീ</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">കുടുംബനാഥനുമായുള്ള ബന്ധം</label>
                                            <input type="text" class="form-control akjval" RegExp='^[a-zA-Z ]+$' ErrMsg='Enter a Valid Details' name="fam_relation1" id="fam_relation1">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-12">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">റിമാർക്‌സ് </label>
                                            <textarea class="form-control akjval" RegExp='^[a-zA-Z ]+$' ErrMsg='Enter a Valid Details' rows="2" name="fam_remarks1" id="fam_remarks1"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-12">
                                    <div class="row mb-3">
                                        <label for="inputEmail3" class="col-sm-6 form-label">പഴയ മരണസഹായനിധിയിൽ അംഗമായിരുന്നുവോ? </label>
                                        <div class="col-sm-6">
                                            <input type="radio" class="btn-check" name="yes_no" id="yes" autocomplete="off" >
                                            <label class="btn btn-outline-secondary" for="yes" style="width: 40%;">ആയിരുന്നു</label>
                                            <input type="radio" class="btn-check" name="yes_no" id="no" autocomplete="off">
                                            <label class="btn btn-outline-secondary" for="no" style="width: 40%;">അല്ല</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="benefits">
                            </div>
                            <hr>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" >
                                <label class="form-check-label" for="flexCheckDefault">ഞാൻ മേൽ രേഖപ്പെടുത്തിയിട്ടുള്ള വിവരങ്ങൾ പൂർണ്ണമായും ശരിയാണെന്ന് സാക്ഷ്യപ്പെടുത്തുന്നു.</label>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center mt-3">
                                    <input type="submit" name="subBtn" id="subBtn" class="btn btn-primary">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<script src="/parmas/assets/js/death_relief_fund.js"></script>
<script>
    $(document).ready(function() {
        var fam_memb = 1
        $("#add_member").click(function() {
            fam_memb++
            $("#family_memb").append("<div class='row' id='fam_memb_" + fam_memb + "'> <div class='col-10 col-md-11 col-lg-11'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'> മറ്റു കുടുംബാംഗങ്ങൾ </label> </div> </div> <div class='col-2 col-md-1 col-lg-1'> <div class='mb-3 '> <button class='btn btn-danger' onclick='remove_education_fields(" + fam_memb + ");'><i class='bi bi-x-circle'></i></button> </div> </div> <div class='col-12 col-md-6 col-lg-3'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>ഔദ്യോഗിക പേര്</label> <input  type='text' class='form-control akjval' RegExp='^[a-zA-Z ]+$' ErrMsg='Enter a Valid Details'  name='fam_name" + fam_memb + "' id='fam_name" + fam_memb + "'> </div> </div> <div class='col-12 col-md-6 col-lg-3'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>ജനന തീയതി</label> <input type='date' class='form-control' name='fam_dob" + fam_memb + "' id='fam_dob" + fam_memb + "'> </div> </div> <div class='col-12 col-md-6 col-lg-3'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label mb-3'>ലിംഗഭേദം</label><br> <div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='fam_gender" + fam_memb + "' id='inlineRadio1' value='option1'> <label class='form-check-label' for='inlineRadio1'>പുരുഷൻ</label> </div> <div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='fam_gender" + fam_memb + "' id='inlineRadio2' value='option2'> <label class='form-check-label' for='inlineRadio2'>സ്‌ത്രീ</label> </div> </div> </div> <div class='col-12 col-md-6 col-lg-3'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>കുടുംബനാഥനുമായുള്ള ബന്ധം</label><input type='text' class='form-control akjval' RegExp='^[a-zA-Z ]+$' ErrMsg='Enter a Valid Details' name='fam_relation" + fam_memb + "' id='fam_relation" + fam_memb + "'> </div> </div> <div class='col-12 col-md-6 col-lg-12'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>റിമാർക്‌സ് </label> <textarea class='form-control akjval' RegExp='^[a-zA-Z ]+$' ErrMsg='Enter a Valid Details' name='fam_remarks" + fam_memb + "' id='fam_remarks" + fam_memb + "' rows='2'></textarea> </div> </div> </div>")
            document.cookie = "death_relief_fam_members" + fam_memb + "=" + fam_memb;
            document.cookie = "death_relief_fam_members_count=" + fam_memb;
        })
    })

    function remove_education_fields(mid) {
        $('#fam_memb_' + mid).remove();
        document.cookie = "death_relief_fam_members" + mid + "=0";
    }
</script>
<script>
    $("#yes").click(function() {
        $("#benefits").html("<div class='row'> <div class='col-12 col-md-6 '> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>എത്രകാലം</label> <input type='text' class='form-control' id='exampleFormControlInput1'> </div> </div> <div class='col-12 col-md-6'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>ആനുകുല്യങ്ങൾ ലഭിച്ചിട്ടുണ്ടോ? </label> <input type='text' class='form-control' id='exampleFormControlInput1'> </div> </div> </div>")
    })
    $("#no").click(function() {
        $("#benefits").html("")
    })
</script>

</html>