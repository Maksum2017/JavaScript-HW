'use strict'
// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій.

// Task 1.
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами a і b.
document.write('<h3>Task 1.</h3>');

let areaRectangle = (a, b) => a * b;
document.write(areaRectangle(4, 5));



// Task 2.
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r.
document.write('<br><br><h3>Task 2.</h3>');

let areaCircle = (r) => Math.PI * (r * 2);
document.write(areaCircle(7));



// Task 3.
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r.
document.write('<br><br><h3>Task 3.</h3>');

let areaCylinder = (h, r) => 2 * Math.PI * r * (h + r);
document.write(areaCylinder(7, 10));



// Task 4.
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент.
document.write('<br><br><h3>Task 4.</h3>');

let showArray = (array) => {
    for (const el of array) {
        document.writeln(el);
    }
}
showArray([3, 4, 'good', false]);



// Task 5.
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент.
document.write('<br><br><h3>Task 5.</h3>');

let createH2 = (text) => document.write(`<h2>${text}</h2>`);
createH2('Test h2');



// Task 6.
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий.
document.write('<br><br><h3>Task 6.</h3>');

let createUl1 = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
createUl1('Test ul1');



// Task 7.
// #0Kxco1edSN
// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write.
document.write('<br><br><h3>Task 7.</h3>');

let createUl2 = (text, x) => {
    document.write(`<ul>`);
    while(x--){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createUl2('Test ul2', 4);



// Task 8.
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві),
// та будує для них список (ul li) та виводить його через document.write.
document.write('<br><br><h3>Task 8.</h3>');

let buildUl = (...arr) => {
    document.write(`<ul>`);
    for (const el of arr) {
        document.write(`<li>${el}</li>`);
    }
    document.write(`</ul>`);
}
buildUl(3, 4, 'good', false);



// Task 9.
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.
document.write('<br><br><h3>Task 9.</h3>');

let showObject = (array) => {
    for (const el of array) {
        document.write(`<div>`);
        for (const key in el) {
            document.write(key, ':', el[key], ' ');
        }
        document.write(`</div>`);
    }
}
showObject([{id: 1, name: 'Vasya', age: 20}, {id: 2, name: 'Sasha', age: 24}])



// Task 10.
// #pghbnSB
// - створити функцію яка повертає найменше число з масиву.
document.write('<br><br><h3>Task 10.</h3>');

let getMin = (array) => {
    let min = array[0]
    for (let i = 1; i < array.length; i++)
        if (min > array[i]) min = array[i];
    return min;
}
document.write(getMin([3, 5, -3, 4, 1, 7]));



// Task 11.
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
document.write('<br><br><h3>Task 11.</h3>');

let sum = (arr) => {
    let sum = 0;
    for (const el of arr)
        sum+=el;
    return sum;
}
document.write(sum([3, 5, -3, 4, 1, 7]));



// Task 12.
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах.
// Приклад swap([11,22,33,44],0,1) //=> [22,11,33,44]
document.write('<br><br><h3>Task 12.</h3>');

let swap = (arr, index1, index2) => {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}
let arr = [3, 5, -3, 4, 1, 7]
swap(arr, 2, 5)
showArray(arr);



// Task 13.
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
document.write('<br><br><h3>Task 13.</h3>');

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const el of currencyValues)
        if (el.currency === exchangeCurrency) return sumUAH / el.value;
}
document.write(exchange(10000,[{currency:'USD',value:25}, {currency:'EUR',value:42}],'USD'));