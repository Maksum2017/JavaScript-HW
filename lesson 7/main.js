'use strict'
// Task 1.
// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

console.log('Task 1.');
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrUsers = [];
for (let i = 1; i < 11; i++)
    arrUsers.push(new User(i, 'name' + i, 'surname' + i, 'email' + i, 'phone' + i));
console.log(arrUsers);



// Task 2.
// #2ikXsE2WiKZ
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter).
console.log('Task 2.');
let arrUsers2 = arrUsers.filter(value => value.id % 2 === 0);
console.log(arrUsers2);



// Task 3.
// #pOeHKct
// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('Task 3.');
arrUsers.sort((ob1, ob2) => ob1.id - ob2.id);
console.log(arrUsers);



// Task 4.
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити порожній масив, наповнити масив 10 об'єктами Client
console.log('Task 4.');
function Client(id, name, surname, email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let arrClient = [];
for (let i = 1; i < 11; i++)
    arrClient.push(new Client(i, 'name' + i, 'surname' + i, 'email' + i, 'phone' + i,));
arrClient[0].order = ['product1', 'product2', "product3"];
arrClient[1].order = ['product1', 'product2'];
arrClient[2].order = ['product1', 'product2', "product3"];
arrClient[3].order = ['product1', 'product2', "product3", "product4", "product5"];
arrClient[4].order = ['product1', 'product2'];
arrClient[5].order = ['product1', 'product2', "product3"];
arrClient[6].order = ['product1'];
arrClient[7].order = ['product1', 'product2', "product3"];
arrClient[8].order = ['product1', 'product2', "product3", 'product4'];
arrClient[9].order = ['product1', 'product2'];
console.log(arrClient);



// Task 5.
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання). Відсортувати його по-кількості товарів в полі order по зростанню. (sort)
console.log('Task 5.');
arrClient.sort((ob1, ob2) => ob1.order.length - ob2.order.length);
console.log(arrClient);



// Task 6.
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('Task 6.');
function Car(model, manufacturer, year, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.info = function (){
        for (const el in this) {
            if(typeof this[el] === 'function') break;
            console.log(el + ': ' + this[el]);
        }
    }
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newYear){
        this.year = newYear;
    }
    this.addDriver = function (driver){
        this.driver = driver;
    }
}
let f32 = new Car('series 4', 'BMW', 2017, 250, 3);
f32.drive();
f32.info();
f32.increaseMaxSpeed(270);
console.log(f32.maxSpeed);
f32.addDriver({name: 'Den', age: 20});
console.log(f32);



// Task 7.
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('Task 7.');
class Car1{
    constructor(model, manufacturer, year, maxSpeed, engineCapacity){
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    info(){
        for (const el in this) {
            if(typeof this[el] === 'function') break;
            console.log(el + ': ' + this[el]);
        }
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    increaseMaxSpeed (newSpeed){
        this.maxSpeed = newSpeed;
    }
    changeYear (newYear){
        this.year = newYear;
    }
    addDriver (driver){
        this.driver = driver;
    }
}



// Task 8.
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log('Task 8.');
class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince{
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince('prince1', 17, 7);
let arrCinderella = [];
for (let i = 1; i < 11; i++)
    arrCinderella.push(new Cinderella('name' + i, 'age' + i, i));
console.log(arrCinderella.find(value => value.footSize === prince.shoeSize));



// Task 9.
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter.
console.log('Task 9.');
Array.prototype.myForEach = function (_callback){
    for (const el of this)
        _callback(el);
}
Array.prototype.myFilter = function (_predicate){
    const _arr = [];
    for (const el of this)
        if (_predicate(el)) _arr.push(el);
    return _arr;
}
let arr = [3, 5, 6, 1];
arr.myForEach(value => console.log(value));
let arr1 = arr.myFilter(value => value > 4);
console.log(arr1);