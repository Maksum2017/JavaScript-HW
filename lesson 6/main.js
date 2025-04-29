'use strict'
// Task 1.
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
document.write('<h3>Task 1.</h3>');
document.write('hello world'.length, ' ', 'lorem ipsum'.length, ' ', 'javascript is cool'.length);



// Task 2.
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
document.write('<br><br><h3>Task 2.</h3>');
document.write('hello world'.toUpperCase(), ' ', 'lorem ipsum'.toUpperCase(), ' ', 'javascript is cool'.toUpperCase());



// Task 3.
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
document.write('<br><br><h3>Task 3.</h3>');
document.write('HELLO WORLD'.toLowerCase(), ' ', 'LOREM IPSUM'.toLowerCase(), ' ', 'JAVASCRIPT IS COOL'.toLowerCase());



// Task 4.
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('Task 4.');
let str = ' dirty string   ';
console.log(str.trim());
console.log('\n\n');



// Task 5.
// #bfoJuse4ZzP
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
document.write('<br><br><h3>Task 5.</h3>');
function stringToArray(str){
    return str.split(' ');
}
str = 'Ревуть воли як ясла повні';
document.write(stringToArray(str)[1], ' ', stringToArray(str)[3]);



// Task 6.
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. За допомоги map перетворити всі об'єкти в масиві на стрінгові.
document.write('<br><br><h3>Task 6.</h3>');
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
numbers = numbers.map(value => value.toString());
document.write(numbers[1] + 2);



// Task 7.
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
console.log('Task 7.');
function sortNums(array, direction){
    return array.sort((n1, n2) => (direction) ? n1 - n2 : n2 - n1);
}
let nums = [11,21,3];
console.log(sortNums(nums, true));
console.log('\n\n');



// Task 8.
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log('Task 8.');
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((t1, t2) => t2.monthDuration - t1.monthDuration);
coursesAndDurationArray = coursesAndDurationArray.filter(value => (value.monthDuration > 5));
coursesAndDurationArray = coursesAndDurationArray.map((value, index) => { return { id: index + 1, ...value } });
console.log(coursesAndDurationArray);
console.log('\n\n');



// Task 9.
// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'diamond', 'heart', 'spade', 'clubs'
//     value: '', // '6'-'10', 'jack','queen','king','ace'
//     color:'', // 'red','black'
// }
console.log('Task 9.');
let deck = [
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' }
];
console.log(deck.find(value => (value.cardSuit === 'spade' && value.value === 'ace')));
console.log('\n');
console.log(deck.filter(value => value.value === '6'));
console.log('\n');
console.log(deck.filter(value => value.color === 'red'));
console.log('\n');
console.log(deck.filter(value => value.cardSuit === 'diamond'));
console.log('\n');
console.log(deck.filter(value => value.cardSuit === 'clubs' && value.value >= '9'));
console.log('\n\n');



// Task 10.
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log('Task 10.');
let newDeck = deck.reduce((previousValue, currentValue) => {
    if (currentValue.cardSuit === 'spade')
        previousValue.spades.push(currentValue);
    else if (currentValue.cardSuit === 'diamond')
        previousValue.diamonds.push(currentValue);
    else if (currentValue.cardSuit === 'heart')
        previousValue.hearts.push(currentValue);
    else if (currentValue.cardSuit === 'clubs' )
        previousValue.clubs.push(currentValue);
    return previousValue;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });
console.log(newDeck);
console.log('\n\n');



// Task 11.
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
console.log('Task 11.');
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(value => value.modules.find(value => value === 'sass')));
console.log('\n');
console.log(coursesArray.filter(value => value.modules.find(value => value === 'docker')));