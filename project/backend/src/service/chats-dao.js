import { Chat } from "../model/chat-schema";

async function createChat(chat) {
  const dbChat = new Chat(chat);
  await dbChat.save();
  return dbChat;
}

async function retrieveChatList() {
  return await Chat.find();
}

async function retrieveChat(id) {
  return await Chat.findById(id);
}

async function updateChat(chat) {
  const dbChat = await Chat.findOneAndUpdate({ _id: chat._id }, chat);
  return dbChat !== undefined;
}

async function deleteChat(id) {
  await Chat.deleteOne({ _id: id });
}

export {
  createChat,
  retrieveChat,
  retrieveChatList,
  updateChat,
  deleteChat,
};