import dbConnect from '@/lib/db-connect';
import Todo from '@/models/todo';
import {NextRequest, NextResponse} from 'next/server';

export async function POST(req: NextRequest) {
  await dbConnect();
  const {userId, title} = await req.json();
  await Todo.create({title, userId, completed: false});
  return NextResponse.json({message: 'Todo Created'}, {status: 201});
}

export async function GET() {
  await dbConnect();
  const todos = await Todo.find();
  return NextResponse.json(todos);
}
