"use strict";

// Задание 1:
// 1. Создать две переменные и спросить у пользователя значения для данных
// переменных. Одна переменная будет хранить имя пользователя, другая его возраст.

// const userName = prompt("Enter your name: ");
// const userAge = Number(prompt("Enter your age: "));
// console.log(userName, userAge);

// 2. Вывести на экран текст:
// “Добро пожаловать, `имя`. Ваше количество оборотов вокруг солнца - `возраст`.”

// alert(
//   `Welcome, ${userName}. Number of your turns around the Sun is ${userAge}`
// );

// Тайминг: 15 минут.

// Задание 2:

// 1. Найти остаток от деления переменных `a` на `b`, где a = 13, b = 5.

// const a = 13;
// const b = 5;
// const result = a % b;
// console.log(result);

// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// let a;
// alert(a);
// ```
// undefined
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert("abc" * 3);
// ```
// NaN
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert(1 / 0);
// alert(-1 / 0);
// ```
// Infinity
// -Infinity
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('2' * '3');
// ```
// 6
// Тайминг: 20 минут.

// Задание 3:
// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется
// в консоли. Определите, в какой строке кода случилась ошибка.

// fksnbvsivjkshdvhvsbidvcvsvdvcvshdvhvc;
// line 58

// 2. Необходимо вывести в консоль результат суммы переменных a = '2', b = '3'.

// const a = "2";
// const b = "3";
// console.log(a + b);

// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести весь
// текст ниже, одной строкой с переносами строк:

// Сумма чисел равна “результат”.
// Разность чисел равна “результат”.
// Произведение чисел равно “результат”.
// Частное чисел равно “результат”.
// Остаток от деления чисел равен “результат”.

// const num1 = Number(prompt("Enter the first number: "));
// const num2 = Number(prompt("Enter the second number: "));
// console.log(`The sum of the numbers is ${num1 + num2}
// The difference of the numbers is ${num1 - num2}
// The multiplication of the numbers is ${num1 * num2}
// The division of the numbers is ${(num1 / num2).toFixed(2)}
// The residue of the division of the numbers is ${num1 % num2}`);

// Тайминг: 20 минут.

// 1. Не запуская код, определите, что выводится в консоль:

// ```
// console.log(String(true));
// console.log('a' + true);
// console.log(Number(true));
// console.log(true + 1);
// console.log(true + true);
// console.log(true - true);
// console.log(String(true) + Number(true));
// ```

// Тайминг: 20 минут.

// Задание 5:
// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.

// const num = Number(prompt("Enter a number: "));
// if (num > 5) {
//   console.log("The number is greater than 5");
// } else if (num < 5) {
//   console.log("The number is less than 5");
// } else if (num === 5) {
//   console.log("The number equals 5");
// } else {
//   console.log("Something is wrong");
// }

// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.

// const test1 = 5;
// const test2 = Number("5");
// const test3 = false;
// console.log((test1 === test2) === test3);

// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.

// const num1 = Number(prompt("Enter the first number: "));
// const num2 = Number(prompt("Enter the second number: "));
// console.log(
//   num1 < num2 ? `Минимальное число ${num1}` : `Минимальное число ${num2}`
// );
// console.log(`Минимальное число ${Math.min(num1, num2)}`);
// if (num1 < num2) {
//   console.log(`Минимальное число ${num1}`);
// } else {
//   console.log(`Минимальное число ${num2}`);
// }

// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”

// const num1 = Number(
//   prompt("Enter the number, which is greater than 0, but less than 15: ")
// );
// if (num1 > 0 && num1 < 15) {
//   console.log(`Спасибо за число ${num1}`);
// } else {
//   console.log(`А вы, я смотрю, хулиганите! ${num1} - неверное значение.`);
// }

// Тайминг: 25 минут.
