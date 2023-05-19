import { User } from "../model/user-schema";

async function createUser(user) {
  const dbUser = new User(user);
  await dbUser.save();
  return dbUser;
}

async function retrieveUserList() {
  return await User.find();
}

async function retrieveUser(id) {
  return await User.findById(id);
}

async function updateUser(user) {
  const dbUser = await User.findOneAndUpdate({ _id: user._id }, user);
  return dbUser !== undefined;
}

async function deleteUser(id) {
  await User.deleteOne({ _id: id });
}

export {
  createUser,
  retrieveUser,
  retrieveUserList,
  updateUser,
  deleteUser,
};