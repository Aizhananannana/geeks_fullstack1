
//Task 1
function get(start, end, step = 1) {
    let m = [];

    for (let i = start; i <= end; i += step) {
        m.push(i);
    }

    return m;
}

console.log(get(1, 10));
console.log(get(10, 30, 5));


//Task 2
function split(sum, people) {
    let m = [];
    let amount = Math.floor(sum / people);
    for (let i = 0; i < people; i++) {
        m.push(amount);
    }
    m[0] += sum % people;
    return m;
}
console.log(split(100, 4));
console.log(split(2500, 5));
console.log(split(1000, 3));