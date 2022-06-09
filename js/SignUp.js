
function is_Email(youremail) {
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (youremail.match(email)) {
        return true;
    } else {
        return false;
    }
}

var arrayInput = document.getElementsByTagName('input');
var arrayError = document.getElementsByTagName('span');
var is_check = true;

function validateForm() {
    is_check = true;
    for (var i = 0; i < arrayError.length; i++) {
        arrayError[i].innerText = "";
    }

    if(!is_Email(arrayInput[0].value)){
        arrayError[0].innerText = "(*) Không đúng dịnh dạng";
        arrayError[0].style.color = 'red';
        is_check = false;
    }

    if(arrayInput[2].value.length < 8){
        arrayError[2].innerText = "(*) Chưa đủ 8 ký tự";
        arrayError[2].style.color='red';
        is_check=false;
    }

    if(arrayInput[2].value!=arrayInput[3].value){
        arrayError[3].innerText="(*)chưa khớp với pass";
        arrayError[3].style.color='red';
        is_check=false;
    }

    for(var i = 0; i< arrayInput.length;i++){
        if(arrayInput[i].value==""){
            arrayError[i].innerText="(*) Đang trống";
            arrayError[i].style.color='red';
            is_check=false;
        }
    }

    return is_check;
}