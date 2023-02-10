// const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// FILE READING
// Bad Path Approach
// fs.readFile('./files/starter.txt','utf8', (err,data)=> {
//     if (err) throw err;
//     console.log(data)
//     // console.log(data.toString())
// })

// Good Path Approach
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);

    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\nAppended Text"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

console.log("Hello");

// FILE WRITING, APPENDING, RENAMING [Asyncronously Causing Callback Hell]

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice To Meet You.",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Complete!");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\nWelcome Back!",
//       (err) => {
//         if (err) throw err;
//         console.log("Append Complete");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "MyReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename Complete");
//           }
//         );
//       }
//     );
//   }
// );
// Exit On Uncaught Errors

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
