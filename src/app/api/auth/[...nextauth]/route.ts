import connectDB from "@/lib/db";
import User, { UserI } from "@/models/user";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";

type Credentials = {
  email: string;
  password: string;
};

type Token = {
  user: UserI;
};

async function auth(req: NextRequest, res: any) {
  return await NextAuth(req, res, {
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        //@ts-expect-error TODO: fix this
        async authorize(credentials: Credentials) {
          connectDB();

          const { email, password } = credentials;

          const user = await User.findOne({ email }).select("+password");

          if (!user) {
            throw new Error("Invalid email or password");
          }

          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );

          if (!isPasswordMatched) {
            throw new Error("Invalid email or password");
          }

          return user;
        },
      }),
    ],
    callbacks: {
      jwt: async ({ token, user }) => {
        const jwtToken = token as Token;
        if (user) token.user = user;

        // Update session when user is updated
        if (req.url?.includes("/api/auth/session?update")) {
          // Hit the database and return the updated user
          const updatedUser = await User.findById(jwtToken?.user?._id);
          token.user = updatedUser;
        }

        return token;
      },
      session: async ({ session, token }) => {
        session.user = token.user as UserI;

        //@ts-expect-error Todo: fix this
        delete session?.user?.password;

        return session;
      },
    },
    pages: {
      signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
  });
}

export { auth as GET, auth as POST };
