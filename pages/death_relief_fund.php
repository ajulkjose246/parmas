<!DOCTYPE html>
<html lang="en">

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
    <section class="mt-5 mb-5">
        <div class="container">
            <h2 class="text-center fw-bolder">ചെറുപുഷ്‌പ മരണസഹായ നിധി</h2>
            <hr class="divider">
            <div class="row">
                <div class="col-12 col-md-12 col-lg-4">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">കുടുംബനാഥന്റെ ഔദ്യോഗിക പേര്</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">വീട്ടുപേര്</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">ജനന തീയതി</label>
                        <input type="date" class="form-control" id="exampleFormControlInput1">
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">ഇപ്പോഴത്തെ വിലാസം </label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">സ്ഥിരമായ വിലാസം</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">കുടുംബകൂട്ടായ്മ വാർഡ്</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">ഫോൺ നമ്പർ </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">ലിംഗഭേദം</label><br>
                        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off">
                        <label class="btn btn-outline-secondary" for="success-outlined" style="width: 40%;">പുരുഷൻ </label>

                        <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
                        <label class="btn btn-outline-secondary" for="danger-outlined" style="width: 40%;"> സ്‌ത്രീ </label>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">ഫോൺ നമ്പർ </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12 col-md-12 col-lg-4">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">നോമിനിയുടെ പേര് </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">ജനന തീയതി</label>
                        <input type="date" class="form-control" id="exampleFormControlInput1">
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">കുടുംബനാഥനുമായുള്ള ബന്ധം </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">മൈനർ ആണെങ്കിൽ ബന്ധപ്പെടേണ്ട അടുത്ത വ്യക്തി </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                </div>
            </div>
            <hr>
            <div id="family_memb">
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-11">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"> മറ്റു കുടുംബാംഗങ്ങൾ </label>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-1">
                        <div class="mb-3 ">
                            <button class='btn btn-success' id="add_member"><i class="bi bi-plus-circle"></i></button>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">ഔദ്യോഗിക പേര്</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1">
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">ജനന തീയതി</label>
                            <input type="date" class="form-control" id="exampleFormControlInput1">
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">ലിംഗഭേദം</label><br>
                            <input type="radio" class="btn-check" name="options1-outlined" id="success1-outlined" autocomplete="off">
                            <label class="btn btn-outline-secondary" for="success1-outlined" style="width: 40%;">പുരുഷൻ </label>

                            <input type="radio" class="btn-check" name="options1-outlined" id="danger1-outlined" autocomplete="off">
                            <label class="btn btn-outline-secondary" for="danger1-outlined" style="width: 40%;"> സ്‌ത്രീ </label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">കുടുംബനാഥനുമായുള്ള ബന്ധം</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1">
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-12">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">റിമാർക്‌സ് </label>
                            <textarea class="form-control" rows="2"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-6 col-form-label" style="font-size: small;">പഴയ മരണസഹായനിധിയിൽ അംഗമായിരുന്നുവോ? </label>
                        <div class="col-sm-6">
                            <input type="radio" class="btn-check" name="yes_no" id="yes" autocomplete="off">
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
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault" style="font-size: small;">ഞാൻ മേൽ രേഖപ്പെടുത്തിയിട്ടുള്ള വിവരങ്ങൾ പൂർണ്ണമായും ശരിയാണെന്ന് സാക്ഷ്യപ്പെടുത്തുന്നു.</label>
            </div>
        </div>
    </section>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
<script src="/parmas/assets/js/cdn/jquery.min.js"></script>
<script>
    $(document).ready(function() {
        var fam_memb = 1
        $("#add_member").click(function() {
            fam_memb++
            $("#family_memb").append("<div class='row' id='fam_memb_" + fam_memb + "'> <div class='col-12 col-md-12 col-lg-11'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'> മറ്റു കുടുംബാംഗങ്ങൾ </label> </div> </div> <div class='col-12 col-md-12 col-lg-1'> <div class='mb-3 '> <button class='btn btn-danger' onclick='remove_education_fields(" + fam_memb + ");'><i class='bi bi-x-circle'></i></button> </div> </div> <div class='col-12 col-md-6 col-lg-3'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>ഔദ്യോഗിക പേര്</label> <input type='text' class='form-control' id='exampleFormControlInput1'> </div> </div> <div class='col-12 col-md-6 col-lg-3'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>ജനന തീയതി</label> <input type='date' class='form-control' id='exampleFormControlInput1'> </div> </div> <div class='col-12 col-md-6 col-lg-3'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>ലിംഗഭേദം</label><br> <input type='radio' class='btn-check' name='options" + fam_memb + "-outlined' id='success" + fam_memb + "-outlined' autocomplete='off'> <label class='btn btn-outline-secondary' for='success" + fam_memb + "-outlined' style='width: 40%;'>പുരുഷൻ </label> <input type='radio' class='btn-check' name='options" + fam_memb + "-outlined' id='danger" + fam_memb + "-outlined' autocomplete='off'> <label class='btn btn-outline-secondary' for='danger" + fam_memb + "-outlined' style='width: 40%;'> സ്‌ത്രീ </label> </div> </div> <div class='col-12 col-md-6 col-lg-3'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>കുടുംബനാഥനുമായുള്ള ബന്ധം</label> <input type='text' class='form-control' id='exampleFormControlInput1'> </div> </div> <div class='col-12 col-md-6 col-lg-12'> <div class='mb-3'> <label for='exampleFormControlInput1' class='form-label'>റിമാർക്‌സ് </label> <textarea class='form-control' rows='2'></textarea> </div> </div> </div>")

        })
    })

    function remove_education_fields(mid) {
        $('#fam_memb_' + mid).remove();
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