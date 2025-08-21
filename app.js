let firstName = prompt("What is your First Name")
let lastName = prompt("What is your last Name")
let fullName = `${firstName} ${lastName}`
alert(`Welcome ${fullName}`.toLowerCase())



setTimeout(function () {
let phone = prompt("Which mobile phone model is your favourite?").toUpperCase()
document.writeln(`Your Favourite Phone is : ${phone} <br>`)
document.writeln(`Length of string: ${phone.length} <br><br>`)
}, 200)



setTimeout(function () {
let myCountry = "Pakistan"
document.writeln(`String : ${myCountry} <br>`)
document.writeln(`Index of 'n' : ${myCountry.indexOf("n")}<br><br>`)
}, 1000)



setTimeout(function () {
let hellotxt = "Hello World"
document.writeln(`String : ${hellotxt} <br>`)
document.writeln(`Last Index of 'l' : ${hellotxt.lastIndexOf("l")}<br><br>`)
}, 1500)



setTimeout(function () {
let myCountry1 = "Pakistani"
document.writeln(`String : ${myCountry1} <br>`)
document.writeln(`Character at 3 : ${myCountry1.charAt(3)}<br><br>`)
}, 2000)



setTimeout(function () {
let fullName2 = firstName.concat(" ", lastName)
alert(`Hello ${fullName2}`.toLowerCase())
}, 2500)



setTimeout(function () {
let city = "Hyderabad"
document.writeln(`City : ${city} <br>`)
document.writeln(`After Replacement : ${city.replace("Hyder", "Islam")}<br><br>`)
}, 3000)



setTimeout(function () {
let txt = "<i><b>Ali and Sami are best friends.They play cricket and football together</b></i>"
document.writeln(`Text : ${txt} <br>`)
document.writeln(`After Replacement : ${txt.replaceAll("and", "&")}<br><br>`)
}, 3500)



setTimeout(function () {
let value = '472'
let value2 = +value
document.writeln(`Value : ${value}<br>`)
document.writeln(`Type : ${typeof (value)}<br>`)
document.writeln(`Value : ${value2}<br>`)
document.writeln(`Type : ${typeof (value2)}<br><br>`)
}, 4000)



setTimeout(function () {
let usertxt =prompt("Type Anything")
document.writeln(`User Input : ${usertxt}<br>`)
document.writeln(`Upper Case : ${usertxt.toUpperCase()}<br><br>`)
}, 4500)



setTimeout(function () {
let userlang = prompt("Tell me your favourite programming language")
document.writeln(`User Input : ${userlang}<br>`)
document.writeln(`Title Case : ${userlang.charAt(0).toUpperCase() + userlang.slice(1).toLowerCase()} <br><br>`)
}, 5000)



setTimeout(function () {
let num = 35.36
document.writeln(`Number : ${num}<br>`)
let string = num.toString()
document.writeln(`Result : ${string.slice(0, 2) + string.slice(3, 5)}<br><br>`)
}, 5500)


setTimeout(function () {
let username = prompt("What will be your username")
let isInvalid = false
for (let i = 0; i < username.length; i++) {
  let code = username.charCodeAt(i)
  if (code === 33 || code === 44 || code === 46 || code === 64) {
    isInvalid = true
    break
  }
}
if (isInvalid) {
  alert("Please! Enter a valid username")
  username = prompt("What will be your username")
  let isInvalid1 = false
for (let i = 0; i < username.length; i++) {
  let code = username.charCodeAt(i)
  if (code === 33 || code === 44 || code === 46 || code === 64) {
    isInvalid1 = true
    break
  }
}
  alert("Please! Enter a valid username")

} else {
  alert(`Your username is ${username}`)
}
}, 6000)

setTimeout(function () {
let A = ["cake", "apple pie", "cookie", "chips", "patties"]
let userInput = prompt("Welcome to our bakery. What do you want to order Sir/Mam?").toLowerCase()
let found = false
for (let i = 0; i < A.length; i++) {
  if (A[i].includes(userInput)) {
    alert(`${A[i]} is available at index ${i} in our bakery`)
    found = true
    break
  }
}
if (!found) {
  alert(`We are sorry. ${userInput} is not available in our bakery`)
}
}, 6500)



setTimeout(function () {
let password = prompt(
  "Enter your password:\n" +
  "Rules:\n" +
  "1. Password should not start with a number\n" +
  "2. Password must be at least 6 characters long\n" +
  "3. Password must contain both letters and numbers"
)
let hasLetter = false
let hasDigit = false

if (password.length < 6) {
    alert("Password must be at least 6 characters long")
     password = prompt(
  "Enter your password:\n" +
  "Rules:\n" +
  "1. Password should not start with a number\n" +
  "2. Password must be at least 6 characters long\n" +
  "3. Password must contain both letters and numbers"
)
} else {
    let firstCharCode = password.charCodeAt(0)
    if (firstCharCode >= 48 && firstCharCode <= 57) {
        alert("Password should not start with a number")
             password = prompt(
  "Enter your password:\n" +
  "Rules:\n" +
  "1. Password should not start with a number\n" +
  "2. Password must be at least 6 characters long\n" +
  "3. Password must contain both letters and numbers"
)
    }
    else {
        for (let i = 0; i < password.length; i++) {
            let code = password.charCodeAt(i);
            if (code >= 48 && code <= 57) {
                hasDigit = true
            } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                hasLetter = true
            }
        }
        if (hasLetter && hasDigit) {
            alert("Valid password")
            document.writeln(`Your Password : ${password}<br><br>`)
        } else {
            alert("Password must contain both letters and numbers")
                 password = prompt(
  "Enter your password:\n" +
  "Rules:\n" +
  "1. Password should not start with a number\n" +
  "2. Password must be at least 6 characters long\n" +
  "3. Password must contain both letters and numbers"
)
        }
    }
}
}, 7000)



setTimeout(function () {
let text = "University Of Karachi"
let textarr = text.split("")
document.writeln(textarr.join("<br>"))
}, 7500)



setTimeout(function () {
let userhobby = prompt("What is your favourite thing to do")
document.writeln(`User Input : ${userhobby}<br>`)
document.writeln(`Last character of Input : ${userhobby.charAt(userhobby.length-1)}<br><br>`)
}, 8000)



setTimeout(function () {
let text1 = "The quick brown fox jumps over the lazy dog" .toLowerCase()
let the = text1.split("the")
document.writeln(`<br><br>Text : ${text1}<br>`);
document.writeln(`There are ${the.length - 1} occurrence(s) of word 'the'`);
}, 8500)