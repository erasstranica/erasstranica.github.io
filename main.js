var edu = 0;
var hea = 0;
var con = 0;
function myfunc(){
$("input").each(function() {
    //alert($(this).name());
  if($(this).is(':checked')) {
      //alert($(this).val());
    if($(this).val() === 'education'){
        edu = edu + 1;
    }
    else if ($(this).val() === 'health'){
        hea = hea + 1;
    }
    else{
        con = con + 1;
    }
  }   
});
hea = hea + parseFloat($('#q9').val());

alert(hea);
alert(con);
alert(edu);
if(edu >= hea && edu >= con){
    window.open('./education.html', '_self');
}
else if(hea >= edu && hea >= con){
    window.open('./health.html', '_self');
}
else{
    window.open('./construction.html', '_self');  
}
}