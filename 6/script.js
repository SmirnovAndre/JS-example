// // посчитать матрицы!
// const matrixA = [
//     [1, 2], [3, 4]
// ]

// const matrixB = [
//     [5, 6], [7, 8]
// ]
// // ищем скалярное прозведение массивов
// function dotProduct(arr1, arr2) {
//     return arr1[0] * arr2[0] + arr1[1] * arr2[1];
// }
// // меняем строки и столбцы матрицы
// function rotate(arr) {
//     return arr[0].map(function (_, i) {
//         return arr.map(function (row) {
//             return row[i];
//         })
//     });
// }
// function matrixMultiply(m1, m2) {
//     //идем по каждой строке первой матрицы
//     return m1.map(function (row) {
//         // преобразовываем вторую матрицу и идем по каждой строке (которая в изначальной матрице были столбцами)
//         return rotate(m2).map(function (col) {
//             // ищем сколярное произведение строки и столбца
//             return dotProduct(row, col)
//         })
//     })
// }

// console.log(matrixMultiply(matrixA, matrixB));



// const numbers = [0, 1, 4, 7, 3, 2];
// function sum(arr) {
//     return arr.reduce(function (result, curr) {
//         return result + curr;
//     }, 0)
// }

// function divide(arr, maxSum) {
//     return arr.reduce(function (result, curr) {
//         // находим последний миссив
//         const lastResult = result[result.length - 1];
//         const sumOfLastResult = sum(lastResult);
//         if (sumOfLastResult + curr > maxSum) {
//             // ... spread operator
//             return [...result, [curr]];
//         }

//         return [
//             result.slice(0, result.length - 1), // берем весь result до последнего элемента

//             [...result[result.length - 1], curr],]; // берем последний элемент и добавляем текущее значение элемента
//     }, [[]])
// }

// console.log(divide(numbers, 5)); // [[0,1,4], [7], [3,2]]

// инкапсуляция это означает что у обьека есть
// состояние и поведение и что состояние должно меняться точно через поведение

// обьекто орентированное програмирование 

// след столб это абстракция - откидывание лишних параметров обьекта 

// все что мы пишем в обьекте должно соответствовать одному уровню абстракции 


// это просто обьект
// const car = {
//     color: 'red',
//     model: 'a8',

//     drive() {
//         ///.... что то внутри себя делает например меняет координаты
//     }
// };

// в ооп обьекта есть классы вот мы создали один из них, имя класса всегда с большой буквы

// function Car() {
//     this.color = 'red';
//     this.model = 'A8';
// }

// const car = new Car();

// console.log(car);




// function Car(color) {
//     this.color = color;
//     this.model = 'A8';
// }

// class Car {
//     constructor(color, model) {
//         this.color = color;
//         this.model = model;
//     }
// }

// const car = new Car('red', 'A8');
// const carBlack = new Car('black', 'A8');

// console.log(car);
// console.log(carBlack);


// class Calculator {
//     add(a, b) {
//         return a + b;
//     }
//     sub(a, b) {
//         return a - b;
//     }
//     multiplay(a, b) {
//         return a * b;
//     }
//     divide(a, b) {
//         return a / b;
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.add(1, 2));

// class Circle extends Shape {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     getPerimeter() {
//         return this.radius * 2 * Math.PI;
//     }
//     getSquare() {
//         return this.radius ** 2 * Math.PI;
//     }
//     setRadius(newRadius) {
//         this.radius = newRadius;
//     }
// }

// const circle = new Circle(2);
// circle.setRadius(4);
// console.log(circle.getPerimeter());
// console.log(circle.getSquare());


// след принцип ООП - наследование
// абстрактный класс
// class Shape {
//     getPerimeter() { }
// }

// 4 признак ООП полемарфизм - способность дочерних классов иметь 
// все свойства и методы родительского класс + свои собственные!

// 1 принцип  инкопсуляция
// 2 прицип абстракция
// 3 принцип наследование
// 4 принцип полеморфизм

class Smoothie {
    constructor(ingredients) {
        this.ingredients = ingredients;

        this.ingredientsMap = {
            'Banana': 0.5,
            'Strawberris': 1.5,
            'Blueberry': 1
        }
    }

    getCost() {
        const ingredientsMap = this.ingredientsMap
        const cost = this.ingredients.reduce(function (result, curr) {
            const inredientCost = ingredientsMap[curr];
            return result + inredientCost;
        }, 0)

        return `$${cost.toFixed(2)}`;
    }

    getName() {
        if (this.ingredients.length === 1) {
            return `${this.ingredients[0]} Smoothie`
        } else {
            const arraySortIngredients = this.ingredients.sort()
            const reversArraySortIngredients = arraySortIngredients.reverse()

            const name = reversArraySortIngredients.reduce(function (result, curr) {
                return `${curr} ${result}`;
            }, `Fusion`)
            return name;
        }
    }
}

const s1 = new Smoothie(["Banana"])
const s2 = new Smoothie(["Banana", "Strawberris", "Blueberry"]);

console.log(s1.ingredients);
console.log(s1.getCost());
console.log(s1.getName());
console.log(s2.ingredients);
console.log(s2.getCost());
console.log(s2.getName());










