function makeNumber(string) {
    let itemContainer = '';

    for (let item of string) {
        if ( !isNaN(item) ) {
            itemContainer += item;
        }
    }
    return itemContainer;
}

console.log( makeNumber('erer384jjjfd123') );
console.log( makeNumber('123098h76gfdd') );
console.log( makeNumber('ijifjgdj') );
