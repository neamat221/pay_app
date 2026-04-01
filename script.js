// login functionality

// 1st e krchilma
// document.getElementById("loginBtn").addEventListener("click", function(event) {

//     event.preventDefault();
//     const mobileNumber = 12345678910;
//     const pin = 1234;

//     const enteredMobileNumber = document.getElementById("mobile").value;
//     const mobileNumberPattern = parseInt(enteredMobileNumber);

//     const enteredPin = document.getElementById("pin").value;
//     const pinPattern = parseInt(enteredPin);

//     if (mobileNumberPattern === mobileNumber && pinPattern === pin) {
//         window.location.href = "main.html";
//     } else {
//         alert("Invalid mobile number or pin.");
//     }
// });


document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault();
    // console.log("Login button clicked");
    const validMobileNumber = "12345678910";
    const validPin = "1234";

    const enteredMobileNumber = document.getElementById("mobile").value;
    const mobileNumberConverted = parseInt(enteredMobileNumber);

    const enteredPin = document.getElementById("pin").value;
    const pinConverted = parseInt(enteredPin);

    console.log("Entered Mobile Number:", enteredMobileNumber);
    console.log("Entered Pin:", enteredPin);

    if (mobileNumberConverted === parseInt(validMobileNumber) && pinConverted === parseInt(validPin)) {
        window.location.href = "main.html";
    } else {
        alert("Invalid mobile number or pin.");
    }
});