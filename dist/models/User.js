import mongoose from "mongoose";
import { randomUUID } from "crypto";
const chatSchema = new mongoose.Schema({
    id: {
        type: String,
        defaul: randomUUID(),
    },
    role: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
const userSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
        unique: true,
    },
    passowrd: {
        type: "string",
        required: true,
    },
    chats: [chatSchema],
});
export default mongoose.model("User", userSchema);
//# sourceMappingURL=User.js.map