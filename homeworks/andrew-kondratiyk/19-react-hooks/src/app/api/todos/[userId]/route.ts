import dbConnect from '@/lib/db-connect';
import Todo from '@/models/todo';
import {NextRequest, NextResponse} from 'next/server';

export async function POST(req: NextRequest, {params}: {params: any}) {
  await dbConnect();
  const {title} = await req.json();
  const {userId} = params;
  await Todo.create({title, userId, completed: false});
  return NextResponse.json({message: 'Todo Created'}, {status: 201});
}

export async function GET(req: NextRequest, {params}: {params: any}) {
  await dbConnect();
  const {userId} = params;
  const todos = await Todo.find({userId: userId});
  return NextResponse.json(todos);
}

export async function DELETE(req: NextRequest, {params}: {params: any}) {
  await dbConnect();
  const {userId} = params;
  await Todo.deleteMany({userId});
  return NextResponse.json({message: 'Todos deleted'}, {status: 200});
}
