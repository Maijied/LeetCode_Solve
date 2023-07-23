/**
 * TypeScript
 */
  const createCounter = (initialValue: number = 0): (() => number) => {
  let counter: number = initialValue;

  return (): number => {
    return counter++;
  };
};

/**
 * JavaScript
 */

// var createCounter = function(n) {
//     return function() {
//         return n++;
//     };
// };

const createCounter = (initialValue = 0) => {
  let counter = initialValue;

  return () => {
    return counter++;
  };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

