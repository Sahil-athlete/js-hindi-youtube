const human = ["angry", "happy", "sad"]
const animal = ["bee", "elephant", "lion"]

// human.push(animal)
 
// console.log(human);
// console.log(human[3][1]);

const variac=human.concat(animal)
console.log(variac);

const accvv = [...human, ...animal]
console.log(accvv);