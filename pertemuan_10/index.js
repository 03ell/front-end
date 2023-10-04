// <!-- yang akan dipakai simbol titik 3 -->
// Rest Parameter
// fungsi 
// const foo = (... params) => {
//     console.log(params);
// };

// foo ("A", "B", "C"); // Output; {"A", "B", "C" } =>Tipe datanya ARRAY, Func foo itu memiliki 3 parameter.
// tidak bisa 4 (eror).

// Rest Parameter & Spread Operator

// Rest Parameter
// Tanpa Rest Parameter
// const penjumlahanArray = (...params) => {
//     let total = 0;
//     params.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };

penjumlahanArray(1,2,3,4,5,6,7,8,9,10);


// const penjumlahanArray = (a, b, c, ...params => {
//     let total = 0;
//     params.forEach((item) => {
//         total += item;
//     });
//     console.log(total);
// };

// penjumlahanArray(1,2,3,4,5,6,7,8,9,10);

// Spread Operator
// let array1 = [1, 2, 3, 4, 5];

// console.log(... array1);


//1. Duplikasi Array (yang dicopy bukan dpe nama)
// let array2 = [... array1];
// console.log(array2);
// array1.push(6);
// console.log(array2);
// console.log('Array 1 = ${array1}');
// console.log('Array 2 = ${array2}');

//2. Menggabungkan Array
// let array1 = [1, 2, 3];
// let array2 = [5, 6, 7];
// let array3 = [8, 9, 10];

// let combineArray5 = array1.concat(4, array2, array3);
// console.log(combineArray5);

// let combineArray6 = [...array1, 4, ...array2, ...array3);
// console.log(combineArray6);


// Desrtructuring

