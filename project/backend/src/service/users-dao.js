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

async function getAdmins() {
  const adminUsers = await User.find({
    $or: [
      { role: "Admin" },
    ],
  });
  return await adminUsers;
}

async function getVets() {
  const vetUsers = await User.find({
    $or: [
      { role: "Vet" },
    ],
  });
  return await vetUsers;
}

async function getVolunteers() {
  const volunteerUsers = await User.find({
    $or: [
      { role: "Volunteer" },
    ],
  });
  return await volunteerUsers;
}

async function searchUser(searchValue) {
  const searchedUser = await User.find({
    $or: [
      { name: { $regex: searchValue, $options: "i" } },
      { email: { $regex: searchValue, $options: "i" } },
    ],
  });
  return await searchedUser;
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
  getAdmins,
  getVets,
  getVolunteers,
  searchUser,
  updateUser,
  deleteUser,
};