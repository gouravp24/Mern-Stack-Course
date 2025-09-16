
const arrived = true; // or false

const ride = new Promise((resolve, reject) => {
  if (arrived) {
    
    resolve("Ride started");
  } else {
    reject("Ride cancelled");
  }
  loading = true;
    setTimeout(() => {  
        loading = false;
        console.log("Loading finished");
    }, 3000);
    
  
});

ride
  .then(value => console.log(value) )   // when resolved
  .catch(error => console.log(error)); // when rejected





// 1. resolve → quick success
Promise.resolve("OK").then(console.log);

// 2. reject → quick error
Promise
  .reject("Err")
  .catch(console.log);

// 3. all → wait all succeed
Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(console.log);

// 4. race → first settled wins
Promise.race([
  new Promise(r => setTimeout(() => r("Fast"), 100)),
  new Promise(r => setTimeout(() => r("Slow"), 500))
]).then(console.log);

// 5. allSettled → results of all (success/failed)
Promise.allSettled([Promise.resolve("Yes"), Promise.reject("No")])
  .then(console.log);
