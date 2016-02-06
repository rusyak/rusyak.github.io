var a = prompt('Введите число', '');
var n = prompt('Введите степень', '');

function pow(a, n) {
    var b = a;

    for (var i = 1; i < n; i++) {
        b *= a;
    }

    return b;
}

console.log(pow(a, n));
