function fibonacci(n) {
    const list = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {  //  +0 = [0];
            list.push(0);
        } 
        else if (i === 1) { // +1 = [0, 1];
            list.push(1);
        } else {
            debugger;
            const newItem = list[i - 1] + list[i - 2];
            list.push(newItem);
            debugger;
        }
        
    }
    return list;
}
console.log(fibonacci(5));
console.log(fibonacci(10));


