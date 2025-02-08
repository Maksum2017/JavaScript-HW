'use strict';
// Task 1.
// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль.
console.log('Task 1.');

let arr = [17, 'igor', true, 'nastya', 'apple', 3, false, 'people'];
arr[arr.length] = 'male';
arr[arr.length] = 'female';
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);



// Task 2.
// Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre.
console.log("\n\nTask 2.");

let book1 = {
    title: 'It',
    pageCount: 1344,
    genre: 'Horror'
}
let book2 = {
    title: 'A game of thrones',
    pageCount:900,
    genre: 'Fantasy'
}
let book3 = {
    title: 'Harry Potter and the philosopher\'s stone',
    pageCount: 352,
    genre: 'Adventure'
}
console.log(book1.title, book1.pageCount, book3.genre);



// Task 3.
// Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre, authors.
// Поле "автори" - являється масивом. Кожен автор має поля name та age.
console.log("\n\nTask 3.");

book1.authors = [{name: "Stephen", age: 66}, {name: "Igor", age: 30}];
book2.authors = [{name: "George", age: 54}, {name: "Nastya", age: 35}];
book3.authors = [{name: "Rowling", age: 59}, {name: "Roman", age: 44}];
console.log(book1);
console.log(book2);
console.log(book3);



// Task 4.
// Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username, password. Вивести в консоль пароль кожного користувача.
console.log("\n\nTask 4.");
let users = [
    {name: "Name1", userName: "UserName1", password: "password1"},
    {name: "Name2", userName: "UserName2", password: "password2"},
    {name: "Name3", userName: "UserName3", password: "password3"},
    {name: "Name4", userName: "UserName4", password: "password4"},
    {name: "Name5", userName: "UserName5", password: "password5"},
    {name: "Name6", userName: "UserName6", password: "password6"},
    {name: "Name7", userName: "UserName7", password: "password7"},
    {name: "Name8", userName: "UserName8", password: "password8"},
    {name: "Name9", userName: "UserName9", password: "password9"},
    {name: "Name10", userName: "UserName10", password: "password10"}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



// Task 5.
// Описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу.
console.log("\n\nTask 5.");

let week = [
    {name: "Monday", temps: {early: -1, afternoon: 3, evening: -2}},
    {name: "Tuesday", temps: {early: -2, afternoon: 1, evening: -4}},
    {name: "Wednesday", temps: {early: 3, afternoon: 6, evening: 1}},
    {name: "Thursday", temps: {early: 2, afternoon: 3, evening: 2}},
    {name: "Friday", temps: {early: 4, afternoon: 7, evening: 5}},
    {name: "Saturday", temps: {early: 5, afternoon: 6, evening: 5}},
    {name: "Sunday", temps: {early: 7, afternoon: 9, evening: 7}}
]
console.log(week[4].name, week[4].temps.afternoon);



// Task 6.
// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3
console.log("\n\nTask 6.");

let x = Math.floor((Math.random() * 21) -10);   // Діапазон від -10 до 10(включно).
console.log("X: " + x);

if (typeof x !== "number")  // перевірка чи значення числове.
    console.log("Error");
else if (x)
    console.log(true);
else
    console.log(false);



// Task 7.
// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
console.log("\n\nTask 7.");

let time = Math.floor(Math.random() * 60);
console.log("Time: " + time);

if (time < 0 || time >= 60)
    console.log("Error");
else if (time < 15)
    console.log("Quarter 1");
else if (time < 30)
    console.log("Quarter 2");
else if (time < 45)
    console.log("Quarter 3");
else
    console.log("Quarter 4");



// Task 8.
// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку
// половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
console.log("\n\nTask 8.");

let day = Math.ceil(Math.random() * 31);
console.log("Day: " + day);

if (day <= 0 || day > 31)
    console.log("Error");
else if (day < 11)
    console.log("Part 1");
else if (day < 21)
    console.log("Part 2");
else
    console.log("Part 3");



// Task 9.
// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
console.log("\n\nTask 9.");

let dayOfWeek = Math.ceil(Math.random() * 7);
console.log("Day of the week: " + dayOfWeek);

switch (dayOfWeek)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Error");
}



// Task 10.
// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати коли введені рівні числа.
console.log("\n\nTask 10.");

let x1 = 1, x2 = 7;
console.log((x1 >= x2) ? (x1 === x2) ? "Equal" : x1 : x2);



// Task 11.
// Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default" якщо ви намагаєтесь присвоїти в
// неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
console.log("\n\nTask 11.");

let x3 = null;
if(!x3){
    x3 = "default";
}
console.log(x3);



// Task 12.
// З файлу arrays.js (лежить в папці 2023 plan) взяти масив coursesAndDurationArray. За допомоги іф перевірити
// кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
console.log("\n\nTask 12.");

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5)
    console.log(coursesAndDurationArray[0].title + " Super!");
if(coursesAndDurationArray[1].monthDuration > 5)
    console.log(coursesAndDurationArray[1].title + " Super!");
if(coursesAndDurationArray[2].monthDuration > 5)
    console.log(coursesAndDurationArray[2].title + " Super!");
if(coursesAndDurationArray[3].monthDuration > 5)
    console.log(coursesAndDurationArray[3].title + " Super!");
if(coursesAndDurationArray[4].monthDuration > 5)
    console.log(coursesAndDurationArray[4].title + " Super!");
if(coursesAndDurationArray[5].monthDuration > 5)
    console.log(coursesAndDurationArray[5].title + " Super!");