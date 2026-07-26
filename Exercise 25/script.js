//Exercise 25

//spreed operatr

let oldArrey = [1, 2, 3];
let newArrey = [...oldArrey, 4, 5, 6];

console.log(newArrey);

//Rest operator

function multiple(...number) {
    return number.reduce((total,num) =>total*num,1)
}

console.log(multiple(20,3))

// si aan u rest wuxu sameya parameter ayaad waxa ku qo...
//wuxuna kaa cawina inaada arrey u baahan[]