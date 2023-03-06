function checkForm(el) {

	var name = el.name.value; 
	var pass = el.pass.value; 
	var repass = el.repass.value; 
	var state = el.state.value; 

	var fail = "";

	if (name == "" || pass == "" || repass == "" || state == "")
		fail = "Заполните все поля";
	else if (name.length <= 1 || name.length > 50)
		fail = "Введите коректное имя";
	else if (pass != repass)
		fail = "Пароли должны совподать";
	else if (pass. split("!").length > 1)
		fail = "Некорректный пароль";

	if (fail != ""){
		document.getElementById("eror").innerHTML = fail;

		return false;
	}	else {
		alert("Вход успешно выполнен");
		return true;
	}
}