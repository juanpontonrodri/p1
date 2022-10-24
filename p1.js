
function validacion(){

  if(checkdni()==false){
    let text1="DNI is not valid. Correct format:12345678A"
    return false;
  }


  alert(text1);
}

function check_boxes(){
  if(document.getElementById("cgenreall").checked==true){
    var boxes=document.getElementsByName("cgenre");
    
    boxes.forEach(element => {
      element.checked=true;
    });
    document.getElementById('cgenreunall').checked=false;

}}

function uncheck_boxes(){
  if(document.getElementById('cgenreunall').checked==true){
    var boxes=document.getElementsByName("cgenre");
    boxes.forEach(element => {
      element.checked=false;
    });
    document.getElementById("cgenreall").checked=false;

  }

}

function check_only() { 
  document.getElementById('cgenreunall').checked=false;
  document.getElementById("cgenreall").checked=false;
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
    console.log("cheking")
    cdni=document.getElementsByName('cdni');
    var numeros = /^[0-7]{1}[0-9]{7}[A-Za-z]{1}$/;
    var letra= /[a-zA-Z]/;
    if((cdni="") || ((numeros.test(cdni.substring(0,cdni.lenght-1))==true) && (letra.test(cdni.charAt(cdni.length-1))==true))){
        return true;
    }
    else 
    return false;
}