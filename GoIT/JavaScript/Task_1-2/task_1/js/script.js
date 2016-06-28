var arr = [];

for (var i = 0; i < 5; i++) {
	arr.unshift(prompt('Введите имя', ''));
}

var enterName = prompt('Укажите свое имя', '');

for (var i = 0; i < arr.length; i++) {
    if (enterName == arr[i]) {
        alert(enterName + ' Вы успешно вошли');
        break;
    }
}
if(enterName != arr[i]){
    alert('Ошибка');
}


