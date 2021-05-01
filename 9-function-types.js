
// Performing a task
function greet(firstname, lastname) {
    console.log('Hello ' + firstname + ' ' + lastname);
}

greet('Jhon','Smith'); // console shows Jhon Smith

// this function has return in it, which means that after it performs it's task it will return back whatever the value was for us to use

// Calculating a value
function square(number) {
    return number * number
}

console.log(square(5)) // console shows 25