var edu = 0;
var hea = 0;
var con = 0;
function myfunc(){
$("input").each(function() {
  if($(this).is(':checked')) {
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


if(edu >= hea && edu >= con){
    alert("We have concluded that you are best suited to the education path, you will be sent to the education job database where you can learn more.");
    window.open('./education.html', '_self');
}
else if(hea >= edu && hea >= con){
    alert("We have concluded that you are best suited to the health path, you will be sent to the health job database where you can learn more.");
    window.open('./health.html', '_self');
}
else{
    alert("We have concluded that you are best suited to the construction path, you will be sent to the construction job database where you can learn more.");
    window.open('./construction.html', '_self');  
}
}