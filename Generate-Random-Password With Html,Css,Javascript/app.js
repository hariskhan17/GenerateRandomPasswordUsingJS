// const passwordBox = document.getElementById("password")
// const length = 12
// const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
// const number = '0123456789'
// const symbol = '!#$%&()*+,-./:;<=>?@[\]^_{|}~'
// const allChar = upperCase + lowerCase + number + symbol;

// function createPassword() {
//     let password = ""
//     password += upperCase[Math.floor(Math.random() * upperCase.length)]
//     password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
//     password += number[Math.floor(Math.random() * number.length)]
//     password += symbol[Math.floor(Math.random() * symbol.length)]

//     while (length > password.length) {
//         password += allChar[Math.floor(Math.random() * allChar.length)]
//     }
//     passwordBox.value = password;
// }

// function copyPassword() { 
// passwordBox.select()
// document.execCommand("copy")  

// }



const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
const allChar = upperCase + lowerCase + number + symbol;

// function createPassword() {
//     let password = "";
//     password += upperCase[Math.floor(Math.random() * upperCase.length)];
//     password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//     password += number[Math.floor(Math.random() * number.length)];
//     password += symbol[Math.floor(Math.random() * symbol.length)];

//     while (length > password.length) {
//         password += allChar[Math.floor(Math.random() * allChar.length)];
//     }
//     passwordBox.value = password;
// }


function createPassword() {
    const buttonLoader = document.getElementById('button-loader');
  
    // Show loader inside the button
    buttonLoader.style.display = 'block';
  
    setTimeout(() => {
      // Password generation logic
      let password = "";
      password += upperCase[Math.floor(Math.random() * upperCase.length)];
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
      password += number[Math.floor(Math.random() * number.length)];
      password += symbol[Math.floor(Math.random() * symbol.length)];
  
      while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
      }
  
      // Set the generated password
      passwordBox.value = password;
  
      // Hide loader inside the button
      buttonLoader.style.display = 'none';
    }, 1000); // Simulate a delay (e.g., 1 second)
  }
  









function copyPassword() { 
    const password = passwordBox.value;
    
    // Use the clipboard API to copy text
    navigator.clipboard.writeText(password)
        .then(() => {
            // Show SweetAlert2 popup on successful copy
            Swal.fire({
                title: "Copied!",
                text: "Your password has been copied.",
                icon: "success"
            });
            passwordBox.value = "";
        })
        .catch(err => {
            // Show SweetAlert2 popup on error
            Swal.fire({
                title: "Oops!",
                text: "Failed to copy the password.",
                icon: "error"
            });
        
        });
}













