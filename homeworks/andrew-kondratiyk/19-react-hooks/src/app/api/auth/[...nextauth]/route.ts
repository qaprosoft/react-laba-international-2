import dbConnect from '@/lib/db-connect';
import User, {IUser} from '@/models/user';
import {compare} from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        name: {label: 'Name', type: 'text'},
        password: {label: 'Password', type: 'password'},
      },
      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({
          name: credentials?.name,
        }).select('+password');

        if (!user) {
          throw new Error('Invalid credentials');
        }

        const isPasswordCorrect = await compare(
          credentials!.password,
          user.password,
        );

        if (!isPasswordCorrect) {
          throw new Error('Invalid credentials');
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET!,
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({token, user}) => {
      user && (token.user = user);
      return token;
    },
    session: async ({session, token}) => {
      const user = token.user as IUser;
      session.user = user;

      return session;
    },
  },
});

export {handler as GET, handler as POST};
