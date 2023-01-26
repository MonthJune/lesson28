


let a = ['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'];
let b = [ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ];
let c = ['silvia', 'vasili', 'victor'];
let d = ['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter'];

function findUniq(arr) {
    let str = arr.join('').toLowerCase();
    let map = new Map();
    let unicLettter;
for (let i = 0; i < str.length; i++ ) {
    if (map.has(str[i])) {
        map.set(str[i], map.get(str[i]) + 1);
    } else {
     map.set(str[i], 0);
    }
}

    for (let i of map) {
        if ((arr.filter(j => j.toLowerCase().includes(i[0]))).length === 1) {
        unicLettter = (i[0]);
        break;
        }
    }

    return arr.find(i => { if ((i.toLowerCase().includes(unicLettter))) return i;});
}


console.log(findUniq(a));
console.log(findUniq(b));
console.log(findUniq(c));
console.log(findUniq(d));


