const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

      for(let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i], i, newCollection);
      }
      return collection;
    },

    map: function(collection, callback) {
      collection = (collection instanceof Array) ? collection : Object.values(collection);

      for(let i = 0; i < collection.length; i++) {
        collection[i] = callback(collection[i], i, collection);
      }
      return collection;
    },

    reduce: function(collection, callback, accumulator) {
      if(!accumulator) {
        accumulator = collection[0];
        collection = collection.slice(1);
      }

      for(let i = 0; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }

      return accumulator;
    },

    find: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection: Object.values(collection);

      for(let i = 0; i < newCollection.length; i++) {
        if(callback(newCollection[i])) return newCollection[i];
      }

      return undefined;
    },

    filter: function(collection, callback) {
      let newCollection = [];

      for(let i = 0; i < collection.length; i++) {
        if(callback(collection[i])) newCollection.push(collection[i]);
      }

      return newCollection;
    },

    size: function(collection) {
      return collection instanceof Array
        ? collection.length
        : Object.values(collection).length;
    },

    first: function(collection, n) {
      return n 
        ? collection.slice(0, n)
        : collection[0];
    },

    last: function(collection, n) {
      return n
        ? collection.slice(collection.length - n, n + 1)
        : collection[collection.length - 1];
    },

    compact: function(collection) {
      return this.filter(collection, (element) => !!element);
  },

    sortBy: function(collection, callback) {
      let newCollection = [...collection];
      return newCollection.sort((a, b) => callback(a) - callback(b));
    },

    flatten: function(collection, oneLevel = false, secondLevel = false) {
      let newCollection = [];

      if(collection instanceof Array) {
        for(let element of collection) {
          if (oneLevel) {
            if (secondLevel) newCollection.push(collection);
            else newCollection = newCollection.concat(this.flatten(element, true, true));
          }
        }
      } else {
        newCollection.push(collection);
      }
      return newCollection;
    },

    functions: function() {

    },


  };
})();

fi.libraryMethod();

const flatten = fi.flatten([1, [2, 3], [[4, 5], 6, [7, [8, 9]]]], true);
console.log(flatten);
