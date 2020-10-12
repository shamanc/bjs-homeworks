"use strict";

function getResult(a,b,c){
    // код для задачи №1 писать здесь

    let discriminant = b ** 2 - 4 * a * c;
    console.log(discriminant);
    
    let x = [];
    let xFirst = null;
    let xSecond = null;

    if (discriminant < 0) {
    //Если дискриминант меньше нуля, то корней нету. (пустой массив)

    } else if (discriminant === 0) {
    // Если дискриминант равен нулю, то корень один.
    // Пример: а=3 b=-18 c=27
    xFirst = -b / (2 * a);
    x.push(xFirst);

    } else {
    // Если дискриминант больше нуля, то существует 2 решения уравнения.
    // Пример: а=1 b=-70 c=600
    let d = Math.sqrt(discriminant);
    xFirst = (-b + d) / (2 * a);
    xSecond = (-b - d) / (2 * a);
    x.push(xFirst, xSecond);
    }

    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь

    if (marks.length > 5) {
        console.log(marks.length);      
        marks = marks.slice(0, 5);      
    }

    let averageMark = 0;
    for (let i = 0; i < marks.length; i++) {
        averageMark = averageMark + marks[i];
    }

    if (averageMark > 0)
    averageMark = averageMark / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let birthYear = dateOfBirthday.getFullYear();
    let curYear = new Date().getFullYear();
    let age = curYear - birthYear;

    let result;
    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
}