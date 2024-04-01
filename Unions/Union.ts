
// Union
let myVariable: string | number | boolean = "ManuHN"; // Output : ManuHN

myVariable = 5; // Output : 5

myVariable = false; // Output : false


//  type Union

type User = {
    name: string, age: number,
}

type Admin = { username: string, password: string }


const user: User | Admin = { name: "user", age: 19 };

const user2: User | Admin = { username: 'admin', password: 'password' };


// Defining array of strings and number

let myArray: (string | number | boolean)[] = ["m", 5, true]

// If we do like below it will store only strings or number not both
let myArray2: string[] | number[] = [1, 2, 3]