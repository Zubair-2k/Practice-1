let nestedArray=[[1,2],[3,4],[5,6]];

console.log(nestedArray)

const flattening = nestedArray.reduce((accumulator,currentValue)=>
    accumulator.push(currentValue)
)

console.log(flattening)