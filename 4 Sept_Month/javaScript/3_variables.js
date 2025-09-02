//Variables

//var
//scope in function
//  can be re-declared

//let
//scope in block
//  can be re-assigned

//const
//scope in block
//  can not be re-declared
//must be initialized

//example

const myfunction = () => {
  {
    var name = "Gourav";
    let age = 25;
    const city = "Mumbai";

    //reassignment
    age = 26; //allowed
    name = "raj"; //allowed
    // city = "Pune"; //Not Allowed Error

    // initialization must for const
    var location;
    let address;
    // const address;
    const address2 = "123 Main St"; //must initialize

    //re-declaration
    var name = "patil";
    //  let age=30; //Not Allowed
    //   const city="Pune"; //Not Allowed

    console.log(age);
    console.log(city);
  }

  //   For scope check
  console.log(name);
  //   console.log(age);  not allowed
  //   console.log(city);  not allowed
};
myfunction();
