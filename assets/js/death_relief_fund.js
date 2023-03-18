function validation(Value, RegEx, ErrId, ErrMsg) {
  var valid = RegEx.test(Value);
  if (!valid) {
    $("#" + ErrId).text(ErrMsg);
    // $("#subBtn").prop("disabled",true)
  } else {
    $("#" + ErrId).text("");
    return true
  }
}
var fname,hname
$("#fname").keyup(function(){
    fname=validation(this.value,/^[a-zA-Z ]+$/,'nameError','Enter a valid name');
})
$("#hname").keyup(function(){
    hname=validation(this.value,/^[a-zA-Z ]+$/,'houseError','Enter a valid House name');
})
$("#wardUnit").keyup(function(){
    wardUnit=validation(this.value,/^[a-zA-Z ]+$/,'wardUnitError','Enter a valid name');
})
$("#phone").keyup(function(){
    phone=validation(this.value,/^[6-9]\d{9}$/,'phoneError','Enter a valid Number');
})
$("#nomineeName").keyup(function(){
    nomineeName=validation(this.value,/^[a-zA-Z ]+$/,'nomineeNameError','Enter a Valid Nominee name');
})
$("#nomineeRelationshp").keyup(function(){
    nomineeRelationshp=validation(this.value,/^[a-zA-Z ]+$/,'nomineeRelationshipError','Enter a Valid Details');
})

$("#minor").keyup(function(){
    minor=validation(this.value,/^[a-zA-Z ]+$/,'minorError','Enter a Valid Details');
})

var r_name;
function fam_name_validate(id,name){
    var c_name = /^[a-z ]{3,}$/i;
        r_name = c_name.test(name)
        if (!r_name) {
            $("#fam_nameError" + id).text("Enter a Valid Details");
            // $("#famUpldBtn" + id).prop('disabled', true);
        } else {
            $("#fam_nameError" + id).text("");

        }
}
function fam_relation_validate(id,name){
    var c_name = /^[a-z ]{3,}$/i;
        r_name = c_name.test(name)
        if (!r_name) {
            $("#fam_relationError" + id).text("Enter a Valid Details");
            // $("#famUpldBtn" + id).prop('disabled', true);
        } else {
            $("#fam_relationError" + id).text("");

        }
}
function fam_remarks_validate(id,name){
    var c_name = /^[a-z ]{3,}$/i;
        r_name = c_name.test(name)
        if (!r_name) {
            $("#fam_remarksError" + id).text("Enter a Valid Details");
            // $("#famUpldBtn" + id).prop('disabled', true);
        } else {
            $("#fam_remarksError" + id).text("");

        }
}