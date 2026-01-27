let num, sum = null

alert('Введенные числа будут суммированы')

do {
    num = +prompt('Введите любое число от 0 до 9:')
    if (num == 0) {break} 
    else (sum += num)
}
while (num !== 0);
console.log(sum)