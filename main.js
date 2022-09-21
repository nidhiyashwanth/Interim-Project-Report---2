// Code to populate select tags with json data
var collegeNameArr = [];
//loop through the colleges and select the name by calling it by its id
    for(var i=0;i<colleges.length;i++){ 
    var value = colleges[i];
    if(collegeNameArr.includes(value.College_Name)){
        continue;
}
     else{
            var college_name = document.getElementById("college-name")
            college_name.innerHTML += "<option>"+ value.College_Name +"</option>"
            $(college_name).on('change',function(){
            });
            collegeNameArr.push(value.College_Name)
    }
}

//after selecting the college, select the caste names that a college accepts.
$("#college-name").on('change',function(){
    var value=$(this).val(); //get its selected value
    result = "";
    var Caste = [];
    for(var i=0;i<colleges.length;i++){
        if(colleges[i].College_Name === (value) && !Caste.includes(colleges[i].Caste)){
            Caste.push(colleges[i].Caste);
            result+="<option>"+colleges[i].Caste+"</option>"
        }
        else{
                continue;
        }
    }
    var college_caste = document.getElementById("caste-name")
    college_caste.innerHTML = result;
});

// Code to validate the input fields to check if they're numeric or not.
function validate(){
var formdata  = document.getElementsByClassName("collegeForm")
var This_id = $(this);
if(formdata[0].checkValidity()){
    document.getElementById('submitButton').removeAttribute("disabled");
}  
else{
    document.getElementById('submitButton').disabled = true
}
    let value = (This_id[0].checkValidity())? "":This_id[0].validationMessage;
    This_id.siblings("div")[0].innerHTML = value;
}
//enable the submit button after all the fields are validated and filled.
$(".form-control").keyup(validate); 