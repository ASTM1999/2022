import { Document } from 'mongoose';

export interface Agenda extends Document {
  readonly userId: string;
  readonly teacherId: string;
  readonly question1: string;
  readonly question2: string;
  readonly question3: string;
  readonly question4: string;
  readonly question5: string;
  // readonly MeetingTopic: string;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly status: number;
}
