// Optional Chaining - obj?.property?.subProp

const mainObject = {
    name: "hari om",
    subObject: {
        std: 10,
        newObject: {
            city: "karad"
        }
    }
};

// Using optional chaining to safely access properties
console.log(mainObject?.subObject?.aaa, "==="); // undefined ===
