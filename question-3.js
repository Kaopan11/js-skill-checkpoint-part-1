// Question #3
let userPassword = "";
// let userPassword = "ssswnalWadqQ";
// let userPassword = "TechUp";
// let userPassword = "abcde"

// เริ่มเขียนโค้ดตรงนี้
// logic in Question #3 -> function, if-else
let checkPasswordStrength = function(userPassword) {
    if (userPassword.length > 10) {
        return "Storng";
    }
    else if (userPassword.length >= 6) {
        return "Medium";
    }
    else if (userPassword.length < 6) {
        return "Weak";
    }
};

// Test case
console.log(checkPasswordStrength(userPassword)); 

