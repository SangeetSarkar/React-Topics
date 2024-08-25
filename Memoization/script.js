//Memoization Demonstration

let storage = [];

function square(n) {
  //If the number has already been calcuated, directly return it 
  if (storage[n] != null) 
    return storage[n];

  // -------------------------------------
  // Time consuming calculations which are 
  // done for minimum times
  
  let res = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      res++;
    }
  }
  
  // -------------------------------------

  // The calculated value is stored at index n and returned
  storage[n] = res;
  return res;
}
// The first one takes time to display but the
// rest are displayed instantaneously as they 
// are already calculated and saved at index 30000
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
