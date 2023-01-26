/*function findUniq(arr) {
    let res = [];
    for (let i of arr) {
        let str = (arr.filter(a => a !== i)).map(i => i.split(' ').join('')).join('').toLowerCase();
        for (let j of i) {
            if (str.includes(j.toLowerCase()) || j === ' ') {
                continue;
            } else {
                res.push(j);
            }
        }
    }
    return arr.filter(i => {
        for (let k of res) {
            if (i.includes(k)) return i;
        }
    }).join('');
  }*/
//findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
//findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'


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
//console.log(map);
/*for (let i of map) {
    if (i[1] === 0) {
        unicLettter = (i[0]);
        break;
    }    
}*/
        
    for (let i of map) {
        if ((arr.filter(j => j.toLowerCase().includes(i[0]))).length === 1) {
        unicLettter = (i[0]);
        break;
        }
    }
    //console.log((arr.filter(j => j.toLowerCase().includes('b'))).length === 1);
    //console.log(unicLettter);
    return arr.find(i => { if ((i.toLowerCase().includes(unicLettter))) return i;});
}


console.log(findUniq(a));
console.log(findUniq(b));
console.log(findUniq(c));
console.log(findUniq(d));


