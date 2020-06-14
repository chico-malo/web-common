function createAGenerate(count, increment) {
    console.log('count', count);
    return function(){
        console.log('count2', count);
        count += increment;
        return count;
    }
}
let generateNextNumber = createAGenerate(0, 1);
console.log(generateNextNumber()); //1
console.log(generateNextNumber()); //2
console.log(generateNextNumber()); //3
