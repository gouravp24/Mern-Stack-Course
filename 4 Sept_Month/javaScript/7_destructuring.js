// Destructuring - object

const userInfo = {
    a: "Gourav",
    std: 12,
};

// Destructuring with renaming
const { a: fullName, std } = userInfo;

console.log(fullName, "fullName"); // Gourav fullName
console.log(std, "std");           // 12 std


// Destructuring - array

const myArray = [54, 65, 78];
const [var1, var2, var3] = myArray;

console.log(var1,"var1 =="); // 54 var1
console.log(var2,"var2 =="); // 65 var2
console.log(var3,"var3 =="); // 78 var3