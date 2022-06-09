
function is_Email(youremail) {
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (youremail.match(email)) {
        return true;
    } else {
        return false;
    }
}

var arrayInput = document.querySelectorAll('#input');
var arrayError = document.querySelectorAll('#span');
var type = document.getElementsByName('type');
var note = document.getElementsByName('message');
var note_err = document.getElementById('message')
var is_check = true;

function validateForm() {
    is_check = true;
    for (var i = 0; i < arrayError.length; i++) {
        arrayError[i].innerText = "";
    }

    if(!is_Email(arrayInput[1].value)){
        arrayError[1].innerText = "(*) Không đúng dịnh dạng";
        arrayError[1].style.color = 'red';
        is_check = false;
    }

    for(var i = 0; i< arrayInput.length;i++){
        if(arrayInput[i].value==""){
            arrayError[i].innerText="(*) Đang trống";
            arrayError[i].style.color='red';
            is_check = false;
        }
    }

    if (type[0].value == "") {
        arrayError[3].innerText = "(*) Chưa chọn"
        arrayError[3].style.color = "red"
        is_check = false
    }

    if (note.value < 200) {
        note_err.innerHTML = "Ghi chú phải trên 200 từ"
        note.style.border = "1px solid red"
        note.style.backgroundColor = "#fff7bc"
        is_check = false
    }

    return is_check;
}
