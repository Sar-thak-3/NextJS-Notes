import NextAuth from "next-auth/next";
import Providers from "next-auth/providers"

export default function NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    database: process.env.DB_URL,
    session: {
        jwt: true
    },
    jwt: {
        secret: "nandgera"
    },
    callbacks: {
        async jwt(token,user){
            if(user){
                token.id = user.id
            }
            return token
        },
        async session(session,token){
            session.user.id = token.id
            return session
        }
    }
})