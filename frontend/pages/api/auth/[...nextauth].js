import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const options = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.role = user.role; // Add role value to user object so it is passed along with session
      return session;
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
