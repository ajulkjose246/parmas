$(document).ready(function(){
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    let r_fname,r_sname,r_email,r_phone,r_pwd,cr_pwd,r_hname;
    $("#fname").keyup(function(){
        var fname = $("#fname").val();
        var c_fname = /^[a-z ]{3,}$/i;
        r_fname = c_fname.test(fname)
        if (!r_fname) {
            $("#f_error").text("Enter a valid First Name");
            $("#signup").prop('disabled', true);
        } else {
            $("#f_error").text("");
            valid()

        }
    })

    $("#sname").keyup(function(){
        var sname = $("#sname").val();
        var c_sname = /^[a-z ]{1,}$/i;
        r_sname = c_sname.test(sname)
        if (!r_sname) {
            $("#s_error").text("Enter a valid Second Name");
            $("#signup").prop('disabled', true);
        } else {
            $("#s_error").text("");
            valid()

        }
    })
    $("#hname").keyup(function(){
        var hname = $("#hname").val();
        var c_hname = /^[a-z ]{3,}$/i;
        r_hname = c_hname.test(hname)
        if (!r_hname) {
            $("#h_error").text("Enter a valid House Name");
            $("#signup").prop('disabled', true);
        } else {
            $("#h_error").text("");
            valid()

        }
    })

    $("#email").keyup(function(){
        var email = $("#email").val();
        var c_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        r_email = c_email.test(email)
        if (!r_email) {
            $("#e_error").text("Enter a valid Email");
            $("#signup").prop('disabled', true);
        } else {
            $("#e_error").text("");
            valid()

        }
    })
    $("#phone").keyup(function(){
        var phone = $("#phone").val();
        var c_phone = /^[789]\d{9}$/;
        r_phone = c_phone.test(phone)
        if (!r_phone) {
            $("#p_error").text("Enter a valid Number");
            $("#signup").prop('disabled', true);
        } else {
            $("#p_error").text("");
            valid()

        }
    })

    
    $("#pwd").keyup(function () {
        pwd = $("#pwd").val();
        var c_pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        r_pwd = c_pwd.test(pwd);
        if (!r_pwd) {
            $("#pwd_error").text("Enter Valid Password");
            $("#signup").prop('disabled', true);
        } else {
            $("#pwd_error").text("");
            valid()

        }
    })
    $("#cpwd").keyup(function () {
        cpwd = $("#cpwd").val();
        var c_pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        cr_pwd = c_pwd.test(cpwd);
        if (!cr_pwd) {
            // $("#cp_error").text("Enter Valid Password");
        } else if (pwd != cpwd) {
            $("#cp_error").text("Password does not match");
            $("#signup").prop('disabled', true);
        }
        else {
            $("#cp_error").text("");
            valid()
            pswd_suc = "true";

        }
    })
    function valid(){
        if (r_fname == true && r_sname == true && r_email == true && r_phone == true && r_pwd == true && cr_pwd == true && r_hname ==true) {
            $("#signup").prop('disabled', false);
        }
    }
})