import dbConnect from '@/lib/db-connect';
import User from '@/models/user';
import {compare} from 'bcryptjs';
import NextAuth, {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const AuthOptions: NextAuthOptions = {
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

        const {password, ...userWithoutPass} = await User.findOne({
          name: credentials?.name,
        }).select('+password');

        if (!userWithoutPass) {
          return null;
        }

        const isPasswordCorrect = await compare(
          credentials!.password,
          password,
        );

        if (!isPasswordCorrect) {
          return null;
        }

        return userWithoutPass;
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
      const {password, ...user} = (token.user as any)._doc;
      session.user = user;

      return session;
    },
  },
};

const handler = NextAuth(AuthOptions);

export {handler as GET, handler as POST};
