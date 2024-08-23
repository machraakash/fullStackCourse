const fs = require("fs");

// fs.writeFile("message.txt", "Smoke Weed EveryDay - Snoopy Doggy", (err) => {
//     if(err) throw err;
//     console.log("The Weed has been smoked!");
// });

fs.readFile('./message.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});