/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import bcrypt from "bcryptjs";
import prisma from "../../../prisma/db";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // GitHub Provider
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // Credentials Provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(req);
        if (!credentials?.email || !credentials?.password) {
          console.error("Email and Password are required");
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user && user.password) {
          const isValidPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (isValidPassword) {
            return user;
          } else {
            throw new Error("Invalid Credentials");
          }
        } else {
          throw new Error("User not found");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // When the user signs in, save the provider in the token
      if (account) {
        token.provider = account.provider;
        console.log(account, token);
      }
      return token;
    },
    async session({ session, token }) {
      // Pass the provider information to the client
      // @ts-ignore
      session.provider = token.provider;
      // console.log(session, token);
      // Include user ID in session
      // @ts-ignore
      session.user.id = token.sub;
      return session;
    },
  },
  session: {
    strategy: "jwt", // Using JWT for sessions
  },
  pages: {
    signIn: "/",
  },
};

export default authOptions;
