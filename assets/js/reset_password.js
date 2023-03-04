$(document).ready(function(){
    var r_pwd=true,cr_pwd=true;
    $("#pwd").keyup(function () {
        pwd = $("#pwd").val();
        var c_pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        r_pwd = c_pwd.test(pwd);
        if (!r_pwd) {
            $("#pwd_error").text("Enter Valid Password");
            $("#update").prop('disabled', true);
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
            $("#cp_error").text("Enter Valid Password");
            $("#update").prop('disabled', true);
        } else if (pwd != cpwd) {
            $("#cp_error").text("Password does not match");
            $("#update").prop('disabled', true);
        }
        else {
            $("#cp_error").text("");
            pswd_suc = true;
            valid()

        }
    })
    function valid(){
        if (r_pwd == true && cr_pwd == true) {
            $("#update").prop('disabled', false);
        }
    }
})