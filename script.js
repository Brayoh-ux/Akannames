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