// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

const number = 2;

for (count = 1; count < 11; count++) {
    console.log ('Task1_result:', number ** count);
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function vozved (count, step) {
    for (; count < step + 1; count ++) {
        console.log ('Task1*_result:', number ** count);
    }
}
 vozved (3, 5);


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

const str = ':)';
let concat = str;

 for (count = 1; count < 6; count++) {
    console.log (concat);
    concat +=str;
}
   
// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function smile (str, numberOfRows) {
    concat = str;
    for (count = 1; count < numberOfRows + 1; count++) {
        console.log (concat);
        concat +=str;
    }
}

smile ('Js_is_cool ', 6);

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'


let regexpVouw = 'aeiouyAEIOUY'
let regexpCons = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

function countVouwCons (word) {
    let vouwel = 0;
    let consonant = 0;
    for (i = 0; i < word.length; i++) {
        if (regexpVouw.includes (word.charAt(i))) {
            vouwel++;  
        } else if (regexpCons.includes (word.charAt(i))) {
            consonant++;
        } else continue;
    }
    console.log ('Слово состоит из ' + vouwel + ' гласных и ' + consonant + ' согласных букв');
}

countVouwCons ('case');
countVouwCons ('Case');
countVouwCons ('Check-list');

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom (word) {
    word = word.toLowerCase();
    for (i = 0, j = word.length - 1; i < word.length +1, j > -1; i++, j--) {
        if (word.charAt(i) == word.charAt(j)) {
        result = "Word is palindrom"; 
        } else result = "Word isn't palindrom";
        break;
            }
        console.log (result);
    }

isPalindrom ('abba');
isPalindrom ('abbA');
isPalindrom ('АРОЗАупаланалапуазора')
isPalindrom ('рпаоапо')