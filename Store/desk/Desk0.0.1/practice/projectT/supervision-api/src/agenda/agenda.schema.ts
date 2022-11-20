import * as mongoose from 'mongoose';

export const AgendaSchema = new mongoose.Schema({
  userId: String,
  teacherId: String,
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  // MeetingTopic: String,
  startDate: Date,
  endDate: Date,
  status: Number,
});