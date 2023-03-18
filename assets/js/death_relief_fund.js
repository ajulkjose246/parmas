function validation(Value, RegEx, ErrId, ErrMsg) {
  var valid = RegEx.test(Value);
  if (!valid) {
    $("#" + ErrId).text(ErrMsg);
    $("#subBtn").prop("disabled",true)
    return false;
  } else {
    $("#" + ErrId).text("");
    
    return true;
  }
}
var fname, hname;
$("#fname").keyup(function () {
  fname = validation(
    this.value,
    /^[a-zA-Z ]+$/,
    "nameError",
    "Enter a valid name"
  );
  formValidation()
});
$("#hname").keyup(function () {
  hname = validation(
    this.value,
    /^[a-zA-Z ]+$/,
    "houseError",
    "Enter a valid House name"
  );
  formValidation()
});
$("#wardUnit").keyup(function () {
  wardUnit = validation(
    this.value,
    /^[a-zA-Z ]+$/,
    "wardUnitError",
    "Enter a valid name"
  );
  formValidation()
});
$("#phone").keyup(function () {
  phone = validation(
    this.value,
    /^[6-9]\d{9}$/,
    "phoneError",
    "Enter a valid Number"
  );
  formValidation()
});
$("#nomineeName").keyup(function () {
  nomineeName = validation(
    this.value,
    /^[a-zA-Z ]+$/,
    "nomineeNameError",
    "Enter a Valid Nominee name"
  );
  formValidation()
});
$("#nomineeRelationshp").keyup(function () {
  nomineeRelationshp = validation(
    this.value,
    /^[a-zA-Z ]+$/,
    "nomineeRelationshipError",
    "Enter a Valid Details"
  );
  formValidation()
});

$("#minor").keyup(function () {
  minor = validation(
    this.value,
    /^[a-zA-Z ]+$/,
    "minorError",
    "Enter a Valid Details"
  );
  formValidation()
});

var r_name;
let fam_id = Array(4).fill(true).map(() => Array(4).fill(true));
for (let i = 0; i < fam_id.length; i++) {
    for (let j = 0; j < fam_id[i].length; j++) {
      fam_id[i][j]=false
    }
  }
function fam_name_validate(id, name) {
  var c_name = /^[a-z ]{3,}$/i;
  r_name = c_name.test(name);
  if (!r_name) {
    $("#fam_nameError" + id).text("Enter a Valid Details");
    $("#subBtn").prop("disabled",true)
    fam_id[id-1][0] = false;
  } else {
    $("#fam_nameError" + id).text("");
    fam_id[id-1][0] = true;
    formValidation()
  }
}
function fam_relation_validate(id, name) {
  var c_name = /^[a-z ]{3,}$/i;
  r_name = c_name.test(name);
  if (!r_name) {
    $("#fam_relationError" + id).text("Enter a Valid Details");
    $("#subBtn").prop("disabled",true)
    fam_id[id-1][1] = false;
  } else {
    $("#fam_relationError" + id).text("");
    fam_id[id-1][1] = true;
    formValidation()
  }
}
function fam_remarks_validate(id, name) {
  var c_name = /^[a-z ]{3,}$/i;
  r_name = c_name.test(name);
  if (!r_name) {
    $("#fam_remarksError" + id).text("Enter a Valid Details");
    $("#subBtn").prop("disabled",true)
    fam_id[id-1][2]=false
  } else {
    $("#fam_remarksError" + id).text("");
    fam_id[id-1][2]=true
    formValidation()
  }
}
// $("#subBtn").click(function(){
    
// })
var errors=0;

function formValidation(){
    if(fname==true && hname==true && wardUnit==true && phone==true&& nomineeName ==true && nomineeRelationshp==true && minor ==true){
        for (let i = 0; i < fam_id.length; i++) {
            for (let j = 0; j < fam_id[i].length; j++) {
                console.log(fam_id[i][j])
              if(fam_id[i][j]==false){
                errors=1
              }
            }
          }
          if(errors!=1){
              $("#subBtn").prop("disabled",false)
          }
    }
}