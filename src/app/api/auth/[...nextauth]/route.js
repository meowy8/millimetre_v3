import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import connectDB from "@/utils/db";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const client = await connectDB();

        const user = await User.findOne({ email: credentials.email })
          .select("+password")
          .select("+_id");
        console.log("credentials", credentials);
        console.log("user", user);

        if (!user) {
          throw new Error("User not found");
        }

        const isMatch = await verifyPassword(
          credentials.password,
          user.password
        );
        console.log("isMatch", isMatch);

        if (!isMatch) {
          throw new Error("Incorrect password");
        }

        console.log("user from authorize", user);

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = { id: token.id, username: token.username };
      }
      return session;
    },
  },
  session: {
    jwt: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
