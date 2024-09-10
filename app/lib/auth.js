
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },  // Changed from username to email
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { email, password } = credentials || {};
            
                if (!email || !password) {
                    console.error("Missing email or password");
                    return null;
                }
            
                try {
                    // Find user by email
                    const user = await prisma.user.findUnique({
                        where: { email },
                    });
            
                    if (!user) {
                        console.error("No user found with this email:", email);
                        return null;
                    }
            
                    // Compare the provided password with the stored hashed password
                    const isValidPassword = await bcrypt.compare(password, user.password);
                    if (!isValidPassword) {
                        console.error("Incorrect password for user:", email);
                        return null;
                    }
            
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        isstudent: user.isstudent,
                        isteacher: user.isteacher,
                        isadmin: user.isadmin
                    };
                } catch (error) {
                    console.error("Error in authorize function:", error);
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.CLIENT_SECRET || ''
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "@/pages/signin"  // Redirect to this page on sign-in
    },
    callbacks: {
        // jwt: async ({ token, user }) => {
        //     // If user is available, add the user data to the token
        //     if (user) {
        //         token.id = user.id;
        //         token.name = user.name;
        //         token.email = user.email;
        //     }
        //     return token;
        // },
        // session: async ({ session, token }) => {
        //     // Ensure session user data is populated from the token
        //     if (session && session.user) {
        //         session.user.name = token.name;
        //         session.user.email = token.email;
        //     }
        //     return session;
        // },

        jwt: async ({ token, user }) => {
            if (user) {
              token.id = user.id;
              token.name = user.name;
              token.email = user.email;
              token.isstudent = user.isstudent;
              token.isteacher = user.isteacher;
              token.isadmin = user.isadmin;
            }
            return token;
          },
          session: async ({ session, token }) => {
            if (session && session.user) {
              session.user.id = token.id;
              session.user.name = token.name;
              session.user.email = token.email;
              session.user.isstudent = token.isstudent;
              session.user.isteacher = token.isteacher;
              session.user.isadmin = token.isadmin;
            }
            return session;
          },
    }
};
