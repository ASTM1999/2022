import { Document } from 'mongoose';

export interface Users extends Document {
  readonly role: number; // 0 student, 1 lecturer, 2 admin
  readonly email: string;
  readonly password: string;
  readonly fullName: string;
  readonly studentNumber: string;
  readonly phone: string;
  readonly status: number;
  readonly teacherId: string;
}
