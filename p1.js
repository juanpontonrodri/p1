
function validacion(){
  var correcto=new Boolean(true);
  var text1="";
  if(!check_dni()){
    text1+="DNI is not valid. Correct format:12345678A\n";

    correcto=false;
  }

  if(!check_login()){
    text1+="Login username has wrong format: between 4 and 8 characters (only ASCII lowercase letters and numbers)   \n";

    correcto=false;
  }

  if(!check_passwd()){
    text1+="Passwd has wrong format: between 6 and 12 characters (at least one uppercase letter, one lowercase letter (in both cases ASCII letters only, no accents), one number, and one symbol from set “+-*/” \n";

    correcto=false;
  }

  

  if(!correcto){
  alert(text1);
  return false;
  }
}

function check_boxes(){
  if(document.getElementById('cgenreall').checked){
    var boxes=document.getElementsByName("cgenre");
    
    boxes.forEach(element => {
      element.checked=true;
    });
    document.getElementById('cgenreunall').checked=false;

}}

function uncheck_boxes(){
  if(document.getElementById('cgenreunall').checked){
    var boxes=document.getElementsByName("cgenre");
    boxes.forEach(element => {
      element.checked=false;
    });
    document.getElementById('cgenreall').checked=false;

  }

}

function check_only() { 
  document.getElementById('cgenreunall').checked=false;
  document.getElementById('cgenreall').checked=false;
  }


function get_function(){
    document.getElementById('multipart').disabled = true; /Si uso get no puedo usar multipart/
    document.getElementById('reg_form').method="get";
    document.getElementById('reg_form').enctype="application/x-www-form-urlencoded";
}


function post_function(){
    document.getElementById('multipart').disabled = false;
    document.getElementById('reg_form').method="post";
    document.getElementById('reg_form').enctype="multipart/form-data";
}



function check_login() {
  if(document.getElementById('clogin').value.length == 0) return true;
		var cklogin = /^[a-z0-9]{4,8}$/;
    if (cklogin.test(document.getElementById('clogin').value)) {
      return true;
    }
    else return false;
    
}


function check_passwd() {
  if(document.getElementById('cpasswd').value.length == 0) return true;
		var ckpasswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[+,-,*,/]){6,12}/;
    if (ckpasswd.test(document.getElementById('cpasswd').value)) {
      return true;
    }
    else return false;
    
}

function check_dni(){
  if (document.getElementById('cdni').value.length == 0) return true;
    var cdni=document.getElementById('cdni').value;
    var numeros = /^[0-7]{1}[0-9]{7}[A-Za-z]{1}$/;
    var letra= /[a-zA-Z]/;
    if((numeros.test(cdni.substring(0,cdni.lenght-1)) && letra.test(cdni.charAt(cdni.length-1)))){
        return true;
    }
    else 

    return false;
}
