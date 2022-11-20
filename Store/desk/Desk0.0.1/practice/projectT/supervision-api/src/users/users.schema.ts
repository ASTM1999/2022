import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  role: Number,
  email: String,
  password: String,
  fullName: String,
  studentNumber: String,
  phone: String,
  status: Number,
  teacherId: String,
});