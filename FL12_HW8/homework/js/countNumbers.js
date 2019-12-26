function countNumbers(string) {
    let itemContainer = {};

    for (let item of string) {
        if (!isNaN(item)){
            if (!itemContainer[item]) { 
                itemContainer[item] = 1; 
            } else { 
                itemContainer[item] += 1;
            }
        }
    }
    return itemContainer;
}

console.log( countNumbers('erer384jj4444666888jfd123') );
console.log( countNumbers('jdjjka000466588kkkfs662555') );
console.log( countNumbers('') );