import dbConnect from '@/lib/db-connect';
import Todo from '@/models/todo';
import {NextRequest, NextResponse} from 'next/server';

export async function DELETE(req: NextRequest, {params}: {params: any}) {
  await dbConnect();
  const {userId} = params;
  await Todo.deleteMany({userId, completed: true});
  return NextResponse.json({message: 'Todos deleted'}, {status: 200});
}
