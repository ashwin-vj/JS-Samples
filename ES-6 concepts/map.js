let exMap = new Map()
exMap.set('a', 1)
exMap.set('b', 2)
exMap.set('c', 3)
exMap.set('a',4)  //overwrites the value to the key.

console.log(exMap)
console.log(exMap.size)
console.log(exMap.has('c'))
console.log(exMap.has('d'))
//exMap.delete('a')