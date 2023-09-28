import dbConnect from '@/lib/db-connect';
import {hash} from 'bcryptjs';
import User from '@/models/user';
import mongoose from 'mongoose';
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    if (!body) return NextResponse.json({error: 'Data is missing'});

    const {name, password} = body;

    const userExists = await User.findOne({name});

    if (userExists) {
      return NextResponse.json({error: 'User Already exists'});
    } else {
      if (password.length < 8)
        return NextResponse.json({
          error: 'Password should be 8 characters long',
        });

      const hashedPassword = await hash(password, 12);

      const user = await User.create({
        name,
        password: hashedPassword,
      });

      return NextResponse.json({
        success: true,
        user: {
          name: user.name,
          _id: user._id,
        },
      });
    }
  } catch (error) {
    if (error && error instanceof mongoose.Error.ValidationError) {
      for (let field in error.errors) {
        const msg = error.errors[field].message;
        return NextResponse.json({error: msg});
      }
    }
  }
}
