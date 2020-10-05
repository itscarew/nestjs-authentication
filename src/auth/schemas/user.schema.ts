import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  joined: { type: Date, default: Date.now },
});
