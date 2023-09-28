import {Schema, models, model, Document} from 'mongoose';

export interface IUser extends Document {
  name: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default models.User || model<IUser>('User', userSchema);
