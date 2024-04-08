// Stack, Heap

// For all the primitive types the Stack memory is used

// FOr all the non primitive types the Heap memory is used

/**************Stack Examples**************/
let myName = "Chandril"

let anotherName = myName
anotherName = "anything but chandril"

console.log(myName)
console.log(anotherName)

/***************Heap Example****************/
let userOne = {
    email: "chandril@google.com",
    upi: "user@yonosbi"
}

let userTwo = userOne

userTwo.email = "sanjukta@google.com"

console.log(userOne.email)
console.log(userTwo.email)
