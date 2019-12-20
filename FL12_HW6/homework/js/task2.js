let a = parseInt( prompt('enter length of the first side of the triangle') );
let b = parseInt( prompt('enter length of the second side of the triangle') );
let c = parseInt( prompt('enter length of the third side of the triangle') );

if (a === '' || b === '' || c === '' || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers');
} else if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if ( !(a + b > c) && !(a + c > b) && !(b + c > a) ) {
    alert('Triangle doesn’t exist');
} else if (a === b && a === c && b === c) {
    alert('Equilateral triangle');
} else if (a === b || a === c || b === c) {
    alert('Isosceles triangle');
} else {
    alert('Scalene triangle');
}