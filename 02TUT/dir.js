const fs = require("fs");

// If Not Exist, Create That Directory

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory Created!");
  });
}

// If Exists, Then Remove That Directory

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory Removed!");
  });
}
