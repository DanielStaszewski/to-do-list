const fs = require('fs'); 

// reusable arrow function to encode file data to base64 encoded string
const convertBase64 = (path) => {
  // read binary data from file
  const bitmap = fs.readFileSync(path);
  // convert the binary data to base64 encoded string
  return bitmap.toString("base64");
};

module.exports = convertBase64;