var CC, YY, MM, d, dayValue;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", ];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validate(){
    var genders = document.getElementsByName("gender"); 
    if ( document.myForm.year.month.value == "" || document.myForm.year.value > 2100 || document.myForm.year.value <= 1900){
        aleart("Please provide a valid year of birth! e.g1995");
        document.myForm.year.focus();
        return false;
    }
    else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) || document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
        alert("Provide month between 1 and 12!");

        document.myForm.month.focus() ;
        return false; 
    }
    else if( document.myForm.date.value == "" || isNaN( document.myForm.month.value ) || document.myForm.month.value.length != 2|| document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
       alert( "Please provide a valid date that you were born in!" );
       document.myForm.day.focus() ;
       return false;
    }
    else if(genders[0].checked==false && genders[1].checked==false ) {
        alert("You must select male or female");
        return false;
    }
    else{
        return false;
    }
}


function claculateDayValue(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC - 1) + ( (5*YY/4) ) + ((26*(MM+1)/10) + DD)%7;
    console.log(d);
    return (Math.floor(d));
}


function getGender(){
    var genders = document.getElementsByName("gender");
    if (genders[0].checked == true){
        var gender = "male";
    }
    else if (genders[1].checked == true){
        var gender = "female";
    }
    else {
        return false;
    }
    switch(gender){
        case "male":
            if (dayValue == 1){
                alert("You were born on " +day[0] + " and Your akan name is " +male[0]+".");
            }
            else if(dayValue == -0){
                alert("You were born on "+day[6] + " and Your akan name is " +male[6]+"!");
            }
        break;
        case "female":
            if ( dayValue == 1){
                alert("You were born on "+day[0] + " and Your akan name is  " +female[0]+"."); 
            }
            else if(dayValue == 6){
                alert("You were born on " +day[5] + " and Your akan name is " + female[5]+"!")
            }
        break
        default:

    }
}

function findName(){
    dayValue = calculateDayValue();
    getGender();
}