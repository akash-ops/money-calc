import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongoDB";
import User from "../../../models/user";
import bcrypt from "bcryptjs"

export async function POST(req) {
    try {
        const {name, email, password} = await req.json();
        console.log("data for signup", name, email, password);

        let hashedPassword = await bcrypt.hash(password,10);

        await connectMongoDB();
        await User.create({name: name, email: email, password: hashedPassword})
        
        return new NextResponse({message : "User registered Successful", status: 201})
    } catch (error) {
        return NextResponse({message : "Unable to register the user", status: 500})
    }
}