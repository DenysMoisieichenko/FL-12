let a = prompt('Enter the "a" coefficient for the quadratic equation "a*x**2 + b*x + c = 0".');
let b = prompt('Enter the "b" coefficient for the quadratic equation "a*x**2 + b*x + c = 0".');
let c = prompt('Enter the "c" coefficient for the quadratic equation "a*x**2 + b*x + c = 0".');

if (a === '' || b === '' || c === '' || a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Invalid input data');
    console.log('Invalid input data');
} else {
    let discriminant = b * b - 4 * a * c;
    let denominator = 2 * a;
    
    if (discriminant === 0) {
        let x = -b / denominator;

        alert(`x = ${x}`);
        console.log(`x = ${x}`);
    } else if (discriminant > 0) {
        let x1 = ( - b + Math.sqrt(discriminant) ) / denominator;
        let x2 = ( - b - Math.sqrt(discriminant) ) / denominator;

        alert(`x1 = ${x1} and x2 = ${x2} `);
        console.log(`x1 = ${x1} and x2 = ${x2}`);
    } else {
        alert('no solution');
        console.log('no solution');
    }
}