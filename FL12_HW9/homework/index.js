function convert() {
    let arr = [];
    
    for (let elem of arguments) {
        if ( elem === `${elem}`) {
            arr.push(+elem);
        } else {
            arr.push(`${elem}`);
        }
    }

    return arr;
}

console.log( convert('1', 2, 3, '4') );

function executeforEach(arr, func) {
    for (let elem of arr) {
        func(elem);
    }
}

executeforEach([1,2,3], function(elem) { 
    console.log(elem * 2);
}); 

function mapArray(arr, func) {
    let resultArray = [];
    
    executeforEach(arr, function(elem) {
        resultArray.push( func(+elem) );
    });

    return resultArray;
}

console.log( mapArray([2, '5', 8], function(elem) {
    return elem + 3;
}) );

function filterArray(arr, func) {
    let resultArray = [];

    executeforEach(arr, function(elem) {
        if ( func(elem) ) {
            resultArray.push(elem);
        }
    });

    return resultArray;
}

console.log( filterArray([2, 5, 8], function(elem) {
    return elem % 2 === 0;
}) );

function flipOver(str) {
    let resultString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        resultString += str[i];
    }

    return resultString;
}

console.log( flipOver('hey world') );

function makeListFromRange( [a, b] ) {
    let resultArray = [];

    for (let elem = a; elem <= b; elem++) {
        resultArray.push(elem);
    }

    return resultArray;
}

console.log( makeListFromRange([2, 7]) );

function getArrayOfKeys(arr) {
    let resultArray = [];

    executeforEach(arr, function(elem) {
        resultArray.push(elem.name);
    });

    return resultArray;
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

console.log( getArrayOfKeys(actors, 'name') );

function substitute(arr) {
    let resultArray = [];

    mapArray(arr, function(elem) {
        if (elem < 30) {
            resultArray.push('*');
        } else {
            resultArray.push(elem);
        }
    });

    return resultArray;
}

console.log( substitute( [58, 14, 48, 2, 31, 29] ) );

function getPastDay(date, numOfDays) {
    const dayMilliseconds = 24 * 60 * 60 * 1000;
    let passedDate = date.getTime() - numOfDays * dayMilliseconds;
    let days = new Date(passedDate);

    return days.getDate();
}

const date = new Date(2019, 0, 2);

console.log( getPastDay(date, 1) );
console.log( getPastDay(date, 2) );
console.log( getPastDay(date, 365) );

function formatDate(date) {
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let hour = date.getHours();

    if (hour < 10 ) {
        hour = `0${hour}`;
    }

    let minute = date.getMinutes();

    if (minute < 10 ) {
        minute = `0${minute}`;
    }
    
    return `${year}/${month}/${day} ${hour}:${minute}`;
}

console.log( formatDate( new Date('6/15/2018 09:15:00') ) );
console.log( formatDate( new Date() ) );