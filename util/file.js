const fs = require("fs");

const deleteFile = (filePath) => {
  // console.log(filePath);
  fs.unlink(filePath, (err) => {
    if (err) {
      throw new err();
    }
  });
};
exports.deleteFile = deleteFile;
