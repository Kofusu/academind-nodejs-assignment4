const fs = require("fs");
const path = require("path");

const userDataPath = path.join(require.main.path, "data", "users.json");

const getUsersFromFile = (callback) => {
  fs.readFile(userDataPath, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class User {
  name = "";
  constructor(t) {
    this.name = t;
  }

  static getUser(callback) {
    getUsersFromFile(callback);
  }

  addUser() {
    getUsersFromFile((usersData) => {
      // this refer to class because arrow function
      usersData.push(this);
      // write or add file
      fs.writeFile(userDataPath, JSON.stringify(usersData), (err) => {
        if (err) console.log(err);
      });
    })
  }
};
