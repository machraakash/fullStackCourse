/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// import inquirer from 'inquirer';
// inquirer
// .prompt([{
//     name: "Website: ",
// }
//   ])
//   .then((answers) => {

//     console.log(answers);
//   });

// const fs = require("fs");
// import qr from 'qr-image';
var titties = require('qr-image');

// var qrText = qr();

// qr.image("schomoyo")
const qr = titties.create('https://www.yokohoma.com', { type: 'png', size: 10, margin: 1 });
console.log(qr.toString('base64'));
// var userAddress = prompt("Enter the website address, for QR code generation.");

// var qr_svg = qr.image(userAddress, { type: 'png' });
// qr_svg.pipe(require('fs').createWriteStream(userAddress + '.png'));

// fs.writeFile("message.txt", userAddress, (err) => {
//         if(err) throw err;
//         console.log("USAA MISAAAA!");
//     });
// .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });