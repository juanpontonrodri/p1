function get_function(){
    document.getElementById('multipart').disabled = true; /Si uso get no puedo usar multipart/
    document.getElementById('registration_form').method="get";
    document.getElementById('registration_form').enctype="application/x-www-form-urlencoded";
}


function post_function(){
    document.getElementById('multipart').disabled = false;
    document.getElementById('registration_form').method="post";
    document.getElementById('registration_form').enctype="multipart/form-data";
}


/*
function checkformats() {
    var clogin = document-getElementByName('clogin');
    if (clogin.length == 0) return true;
		var re = RegExp("^[6-9]\\d{8}$");
    if (tel.match(re) == null) {
      alert("Phone number has a wrong format");
      return false;
    }
    else return true;
}
*/

function checkdni(){
    cdni=document.getElementByName('cdni');
    var numeros = /^[0-7]{1}[0-9]{7}[A-Za-z]{1}$/;
    var letra= /[a-zA-Z]/;
    if((cdni="") || ((numeros.test(cdni.substring(0,cdni.lenght-1))==true) && (letra.test(cdni.charAt(cdni.length-1))==true))){
        
    }

}