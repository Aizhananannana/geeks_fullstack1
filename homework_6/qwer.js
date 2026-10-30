//Написать фунцию которая реализована в лалафо. Нужно прятать последние 2 цифры номера телефона. 
// Например: hidePhone("+996 555 123 123") → “+996 555 123 1xx”.

function phoneNumberr (number){
    return number.slice(0,-2) + "xx"
}
console.log(phoneNumberr("+996 555 123 123"))



// Написать функцию которая возвращает сколько раз в строке встречается определенный символ 
// (причем учесть буквы как верхнего так и нижнего регистра). Например: charCount(“Abrakadabra”, “a”) -> 5, 
// charCount(“hello”, “z”) -> 0.


function word(str, char){
    let count = 0;

    str = str.toLowerCase();
    char = char.toLowerCase();

    for(let i=0; i<str.length; i++){
        if(str[i] == char){
            count++;
        }
    }
    return count;
}
console.log(word("AAAAaaaa", "a"))
console.log(word("Abrakadabra", "a"))


//Написать функцию которая возвращает цену покупки с учетом скидки. 
// Например: getPrice(1000, 50) → 500. Покупка на 1000 сом с 50% скидкой будет стоить 500 сом.
//Еще пример: getPrice(4000, 25) → 3000. Подсказка: 4000 - 25% = 4000 - 1000 = 3000.

function pay(cost, persent){
    let s = cost * persent / 100
    let result = cost - s
    return result;
}
console.log(pay(1000, 50))


//Написать функцию переворота строки. СТАНДАРТНУЮ ФУНКЦИЮ REVERSE НЕ ИСПОЛЬЗОВАТЬ. 
// Например: myReverse("123456789") -> "987654321"

function myReverse(number){
    let result = "";
    for(let i=number.length - 1; i>=0; i--){
        result += number[i]
    }
    return result;
}
console.log(myReverse("987654321"));
