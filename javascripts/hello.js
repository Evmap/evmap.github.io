var email = document.querySelector("#email");
var saveBtn = document.querySelector("#btn");
saveBtn.onclick = function() {
    var xhr = new XMLHttpRequest();
    if (email.value == '') {
	alert("Поле с email пусто :(");
    } else {
	var params = 'email=' + encodeURIComponent(email.value)
	xhr.open("GET", 'https://secret-dawn-16503.herokuapp.com/add?' + params , true)
	xhr.send();
	alert("Спасибо! А теперь к столу!")
    }
}
