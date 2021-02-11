const request = require("request");
const fs = require("fs");

const myArgs = process.argv.slice(2);

const URL = myArgs[0];
const path = myArgs[1];

const fetcher = function (URL, path) {
  request(`${URL}/${path}`, (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    let data = body;
    fs.writeFile(path, data, () => {
      console.log(
        `Downloaded and saved ${fs.statSync(path).size} bytes to ${path}`
      );
    });
  });
};

fetcher(URL, path);
