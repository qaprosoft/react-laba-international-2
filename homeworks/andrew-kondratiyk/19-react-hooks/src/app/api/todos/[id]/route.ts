import dbConnect from '@/lib/db-connect';
import Todo from '@/models/todo';
import {NextApiResponse} from 'next';
import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest, {params}: {params: any}) {
  const {id} = params;
  await dbConnect();
  const todo = await Todo.findById(id);
  return NextResponse.json(todo, {status: 200});
}

export async function PUT(req: NextRequest, {params}: {params: any}) {
  const {id} = params;
  const {title, completed} = await req.json();
  await dbConnect();
  await Todo.findByIdAndUpdate(id, {title, completed});
  return NextResponse.json({message: 'Todo updated'}, {status: 200});
}

export async function DELETE(req: NextRequest, {params}: {params: any}) {
  await dbConnect();
  const {id} = params;
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({message: 'Todo deleted'}, {status: 200});
}
