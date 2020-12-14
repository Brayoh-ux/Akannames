
var submission = function() {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var femaleNames = ["Akosua"," Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  
  
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var day = parseInt(document.getElementById("day").value);
  var name =(document.getElementById("name").value);

  
  var date0fbirth = new Date(year + "/" + month + "/" + day);
  var results = date0fbirth.getDay();
  var output = document.getElementById("output");
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  
  if (name=="" || (year < 0 || year =="") || (month < 1) || (month > 31 ) || (month =="") || (day < 0 || day > 31 || day =="") ) {
    alert ("Enter all spaces provided!");
    return false;
  }



  if(male.checked && year > 0 && month > 0 && month < 13 && day > 0 && day < 32) {
    output.style.background ="#643610"
    output.style.borderRadius = "8px"
    output.style.color = "#fff"
    output.innerHTML = name + " you were born on a " + days[results] + " and your Akan name is " + maleNames[results] +".";
  }
   else if(female.checked && year > 0 && month > 0 && month < 13 && day > 0 && day < 32) {
    output.style.background =" #072e38"
    output.style.color = "#fff"
    output.style.borderRadius = "8px"
    output.innerHTML = name + " you were born on a " + days[results] + " and your Akan name is " + femaleNames[results] +".";
}

};
