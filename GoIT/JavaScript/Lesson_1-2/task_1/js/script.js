var arr = [];

for (var i = 0; i < 5; i++) {
	arr.unshift(prompt('Введите имя', ''));
}

var enter = prompt('Укажите свое имя', '');

if (enter == arr[0] || enter == arr[1] || enter == arr[2] || enter == arr[3] || enter == arr[4]) {
		alert('Вы успешно вошли ' + enter); 
	} else {
		alert('Ошибка');
	}


