function normalizer(collection) {
    return Array.isArray(collection) ? collection : Object.values(collection)
}

function myEach(collection, callback){
    let collectionArray = normalizer(collection)
    for (let i = 0; i < collectionArray.length; i++) {
        callback(collectionArray[i])
    }
    return collection;
}

function myMap(collection, callback){
    let collectionArray = normalizer(collection)
    const newCollection = []
    for (let i = 0; i < collectionArray.length; i++) {
        newCollection.push(callback(collectionArray[i]))
    }
    return newCollection
}

function myReduce(collection, callback, acc){
    let collectionArray = normalizer(collection)
    if (acc === undefined){
        acc = collectionArray[0]
        collectionArray = collectionArray.slice(1)
    }
    for (let i = 0; i < collectionArray.length; i++) {
        acc = callback(acc, collectionArray[i], collectionArray)
    }
    return acc
}

function myFind(collection, predicate){
    let collectionArray = normalizer(collection)
    for (let i = 0; i < collectionArray.length; i++) {
        if (predicate(collectionArray[i])) return collectionArray[i]
    }
    return undefined
}

function myFilter(collection, predicate) {
    let collectionArray = normalizer(collection)
    let newCollection = []
    for (let i = 0; i < collectionArray.length; i++) {
        if (predicate(collectionArray[i])) {
            newCollection.push(collectionArray[i])
        }
    }
    return newCollection
}

function mySize(collection) {
    let collectionArray = normalizer(collection)
    let collectionSize = 0
    for (let i = 0; i < collectionArray.length; i++) {
        collectionSize++
    }
    return collectionSize
}

function myFirst(array, n = 0) {
    return n === 0 ? array[n] : array.slice(0, n)
}

function myLast(array, n) {
  if (!n || n >= array.length) {
    return array[array.length - 1];
  }
  return array.slice(-n);
}

function myKeys(obj) {
    let keys = Object.keys(obj)
    return keys
}

function myValues(obj) {
    let values = Object.values(obj)
    return values
}