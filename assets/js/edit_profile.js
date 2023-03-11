$(document).ready(function () {
    var r_fname = true, r_sname = true, r_email = true, r_phone = true, r_usr_ward = true, r_bap_name = true, r_hname = true, r_pwd = true;

    $("#fname").keyup(function () {
        var fname = $("#fname").val();
        var c_fname = /^[a-z ]{3,}$/i;
        r_fname = c_fname.test(fname)
        if (!r_fname) {
            $("#f_error").text("Enter a valid First Name");
            $("#Update").prop('disabled', true);
        } else {
            $("#f_error").text("");
            valids()

        }
    })

    $("#sname").keyup(function () {
        var sname = $("#sname").val();
        var c_sname = /^[a-z ]{1,}$/i;
        r_sname = c_sname.test(sname)
        if (!r_sname) {
            $("#s_error").text("Enter a valid Second Name");
            $("#Update").prop('disabled', true);
        } else {
            $("#s_error").text("");
            valids()

        }
    })
    $("#hname").keyup(function () {
        var hname = $("#hname").val();
        var c_hname = /^[a-z ]{3,}$/i;
        r_hname = c_hname.test(hname)
        if (!r_hname) {
            $("#h_error").text("Enter a valid House Name");
            $("#Update").prop('disabled', true);
        } else {
            $("#h_error").text("");
            valids()

        }
    })

    $("#email").keyup(function () {
        var email = $("#email").val();
        var c_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        r_email = c_email.test(email)
        if (!r_email) {
            $("#e_error").text("Enter a valid Email");
            $("#Update").prop('disabled', true);
        } else {
            $("#e_error").text("");
            $.ajax({
                url: '../../users/user/fetch.php',
                type: 'post',
                data: {
                    email: email,
                    uid: uid
                },
                success: function (data) {
                    if (data > 0) {
                        $('#e_error').html("<i class='bi bi-x-circle'></i>");
                        $("#Update").prop('disabled', true);
                    } else {
                        $('#e_error').html("<i class='bi bi-check-circle'></i>");
                        valids()
                    }
                }
            });


        }
    })
    $("#phone").keyup(function () {
        var phone = $("#phone").val();
        var c_phone = /^[789]\d{9}$/;
        r_phone = c_phone.test(phone)
        if (!r_phone) {
            $("#p_error").text("Enter a valid Number");
            $("#Update").prop('disabled', true);
        } else {
            $("#p_error").text("");
            valids()

        }
    })

    $("#bap_name").keyup(function () {
        var bap_name = $("#bap_name").val();
        var c_bap_name = /^[a-z ]{3,}$/i;
        r_bap_name = c_bap_name.test(bap_name)
        if (!r_bap_name) {
            $("#bap_error").text("Enter a valid Baptism Name");
            $("#Update").prop('disabled', true);
        } else {
            $("#bap_error").text("");
            valids()

        }
    })
    $("#pwd").keyup(function () {
        pwd = $("#pwd").val();
        var c_pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        r_pwd = c_pwd.test(pwd);
        if (!r_pwd) {
            if (pwd == "") {
                $("#pwd_error").text("");
                $("#Update").prop('disabled', false);
            } else {
                $("#pwd_error").text("Enter Valid Password");
                $("#Update").prop('disabled', true);
            }
        } else {
            $("#pwd_error").text("");
            valids()
        }
    })
    function valids() {
        if (r_fname == true && r_sname == true && r_email == true && r_phone == true && r_hname == true && r_bap_name == true) {
            $("#Update").prop('disabled', false);
        }
    }

})
function fileValidation() {
    var fileInput =
        document.getElementById('pro_upld');
    var filePath = fileInput.value;
    // Allowing file type
    var allowedExtensions =
        /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
        $('#Update').attr("disabled", true);
        alert('only image files allowed');
        fileInput.value = '';
        return false;
    } else {
        $('#Update').attr("disabled", false);
    }
}