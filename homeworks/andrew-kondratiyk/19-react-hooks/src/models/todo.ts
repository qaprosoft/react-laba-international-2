import {Schema, models, model, Document} from 'mongoose';

export interface ITodo extends Document {
  userId: Schema.Types.ObjectId;
  title: string;
  note?: string;
}

const todoSchema = new Schema<ITodo>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
});

export default models.Todo || model<ITodo>('Todo', todoSchema);
