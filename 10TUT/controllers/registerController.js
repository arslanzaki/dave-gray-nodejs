const usersDB = {
  users: require("./../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) {
    return res
      .status(400)
      .json({ message: "Username & Password Are Required" });
  }

  // Check For Duplicate Usernames In The Database
  const duplicate = usersDB.users.find((person) => person.username === user);
  if (duplicate) {
    return res.sendStatus(409); // Conflict
  }

  try {
    // Password Encryption
    const hashedPwd = await bcrypt.hash(pwd, 10);
    // Store The New User
    const newUser = { username: user, password: hashedPwd };
    usersDB.setUsers([...usersDB.users, newUser]);

    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );
    console.log(usersDB.users);
    res.status(201).json({ success: `New User ${user} Created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
