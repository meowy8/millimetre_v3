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

        // find user with email
        const user = await User.findOne({ email: credentials.email })
          .select("+password")
          .select("+_id");
        // console.log("credentials", credentials);
        // console.log("user", user);

        // if user not found
        if (!user) {
          throw new Error("User not found");
        }

        // verify password
        const isMatch = await verifyPassword(
          credentials.password,
          user.password
        );
        // console.log("isMatch", isMatch);

        if (!isMatch) {
          throw new Error("Incorrect password");
        }

        // console.log("user from authorize", user);

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // assign user ID and username to token
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.profileImage = user.profileImage;
      }
      return token;
    },
    async session({ session, token }) {
      // assign user ID and username to session
      if (token) {
        session.user = {
          id: token.id,
          username: token.username,
          profileImage: token.profileImage,
        };
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
