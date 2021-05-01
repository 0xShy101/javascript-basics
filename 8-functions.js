

function greet1() {
    console.log('Hello World');
}

// inside the {} is the body of the fuction, in here is where we add a all statments to define somekind of logic in our application
// note that for functions we don't add a ; at the end

// to call a function simply time it's name and add a brackets after and (;)

greet1(); // console shows Hello World

// ----------Advanced use of functions-------------

function greet2(firstname, lastname) {
    console.log('Hello ' + firstname + ' ' + lastname);
}

// now in order for the function to work we need to pass values to it, it's the brackets to now include a firstname and a lastname

greet2('Jhon','Smith'); // console shows Jhon Smith